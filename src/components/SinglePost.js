import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import client from "../client";
import BlockContent from "@sanity/block-content-to-react";
import "../css/SinglePageCSS.css";
import TaxMessage from "./TaxMessage";

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showTaxMessage, setShowTaxMessage] = useState(false);
  const { slug } = useParams();

  console.log("SinglePost reached");

  // Fetch post data
  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);

      // hide footer & header while loading
      const footerRef = document.getElementsByTagName("footer");
      const headerRef = document.getElementsByTagName("nav");
      if (footerRef.length > 0) {
        footerRef[0].style.display = "none";
      }
      if (headerRef.length > 0) {
        headerRef[0].style.display = "none";
      }

      try {
        const data = await client.fetch(
          `*[slug.current == "${slug}"] {
            title,
            publishedAt,
            body,
            categories[] -> { title },
            mainImage {
              asset -> { _id, url },
              alt
            },
            "name": author -> name
          }`
        );

        if (data && data.length > 0) {
          const post = data[0];
          setSinglePost(post);

          // if TAX_MESSAGE category exists, trigger the TaxMessage
          const hasTaxMessage = post.categories?.some(
            (category) => category.title === "TAX_MESSAGE"
          );
          setShowTaxMessage(hasTaxMessage);

          console.log("Categories: ", post.categories);
        } else {
          console.warn("No post found for slug:", slug);
        }
      } catch (error) {
        console.error("Error fetching single post:", error);
      } finally {
        setIsLoading(false);

        // show footer & header again
        if (footerRef.length > 0) {
          footerRef[0].style.display = "block";
        }
        if (headerRef.length > 0) {
          headerRef[0].style.display = "flex";
        }
      }
    };

    fetchPost();
  }, [slug]);

  return (
    <>
      {isLoading ? (
        <h1 style={{ textAlign: "center" }}>Loading...</h1>
      ) : (
        <section>
          <div id="flex-container">
            <div id="main-content">
              <h1 id="title-date-image">{singlePost?.title}</h1>

              {/* Only render TaxMessage if category exists */}
              {showTaxMessage && <TaxMessage />}

              <div id="title-date-image">
                <p id="author">By {singlePost?.name}</p>
                <p id="date">
                  {singlePost?.publishedAt &&
                    new Date(singlePost.publishedAt).toLocaleString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                      hour: "numeric",
                      minute: "2-digit",
                      hour12: true,
                    })}
                </p>
                {singlePost?.mainImage?.asset && (
                  <img
                    src={singlePost.mainImage.asset.url}
                    alt={singlePost.title}
                    title={singlePost.title}
                  />
                )}
              </div>

              <div id="main-blurb-paragraphs">
                <BlockContent
                  blocks={singlePost?.body}
                  projectId="xw4897mg"
                  dataset="production"
                />
              </div>
            </div>

            <div id="ad-section"></div>
          </div>
        </section>
      )}
    </>
  );
}