import {React, useState, useEffect} from 'react';
import {useParams, Link} from "react-router-dom";
import client from "../client";
import BlockContent from "@sanity/block-content-to-react";
import "./SinglePageCSS/SinglePageCSS.css";

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { slug } = useParams()
  useEffect(() => {
    client.fetch(
      `*[slug.current == "${slug}"] {
        title,
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
    ).then((data) => setSinglePost(data[0]))
    setIsLoading(false)
  }, [slug])

  return (
    <>
    {isLoading ? <h1>Loading...</h1> : 
      <section>
        <div id="flex-container">
          <div id="main-content">
            <div id="main-title-image">
              <h1>{singlePost.title}</h1>
              {singlePost.mainImage && singlePost.mainImage.asset && (
              <img src={singlePost.mainImage.asset.url} alt={singlePost.title} title={singlePost.title} />
              )}
            </div>
            <div id="main-blurb-paragraphs">
              <p>By {singlePost.name}</p>
              <BlockContent blocks={singlePost.body} projectId="xw4897mg" dataset="production" />
              <Link to="/blog">Read more</Link>
            </div>
          </div>
          <div id="ad-section">

          </div>
        </div>
       
      </section>
    }
    </>
  )
}
