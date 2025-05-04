import { React, useState, useEffect} from 'react';
import { useParams} from "react-router-dom";
import client from "../client";
import BlockContent from "@sanity/block-content-to-react";
import "../css/SinglePageCSS.css";

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();

  console.log("Singlepost reached");
  // Fetch post data
  useEffect(() => {
    client.fetch(
      `*[slug.current == "${slug}"] {
        title,
        publishedAt,
        body,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        },
        "name": author -> name
      }`
    ).then((data) => {
      setSinglePost(data[0]);
      setIsLoading(false);
    });
  }, [slug]);

  // Adjust margin dynamically based on navbar height
  useEffect(() => {
    if (!isLoading) {
    }
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <section>
          <div id="flex-container">
            <div id="main-content">
              <div id="main-title-image">
                <h1>{singlePost.title}</h1>
                <p id="author">By {singlePost.name}</p>
                <p id="date">
                  {singlePost && new Date(singlePost.publishedAt).toLocaleString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: true
                  })}
                </p>
                {singlePost.mainImage && singlePost.mainImage.asset && (
                  <img src={singlePost.mainImage.asset.url} alt={singlePost.title} title={singlePost.title} />
                )}
              </div>
              <div id="main-blurb-paragraphs">
                <BlockContent blocks={singlePost.body} projectId="xw4897mg" dataset="production" />
              </div>
            </div>
            <div id="ad-section"></div>
          </div>
        </section>
      )}
    </>
  );
}