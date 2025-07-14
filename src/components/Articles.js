import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import client from "../client";
import "../css/ArticlesCSS.css";
import img1 from '../assets/Ads/ToeAd.jpg';
import img2 from '../assets/Ads/HotSinglesAd.jpg';
import img3 from '../assets/Ads/EggAd.jpg';

export default function Articles() {
  const allImages = [img1, img2, img3];
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const { pageNumber } = useParams();  // Get page number from URL
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categoryColors = {
    All: "#28536B",
    Local: "#A30015",
    World: "#AED9E0",
    Politics: "#AF4D98",
    Life: "#F79F79"
  };

  const postsPerPage = 6; // Number of posts per page
  const currentPage = pageNumber ? parseInt(pageNumber, 10) : 1; // Default to page 1 if no page number

  useEffect(() => {
    const loadPosts = async () => {
      // Fetch the total number of posts to calculate total pages
      const totalPosts = await client.fetch(`count(*[_type == "post"])`);
      setTotalPages(Math.ceil(totalPosts / postsPerPage));

      // Fetch only the posts for the current page, with limit and offset
      client.fetch(
        `*[_type == "post"] | order(publishedAt desc) [${(currentPage - 1) * postsPerPage}...${currentPage * postsPerPage}] {
          title,
          slug,
          publishedAt,
          body,
          categories[] -> { title },
          mainImage { 
            asset -> { _id, url }, alt 
          },
          "name": author -> name
        }`
      )
        .then((data) => setPosts(data))
        .catch(console.error);
      setIsLoading(false);
    };

    loadPosts();
  }, [currentPage]);  // Re-fetch posts when the page changes

  useEffect(() => {
    if (!isLoading) {
    }
  }, [isLoading]);

  // Function to handle pagination navigation
  const handlePageChange = (page) => {
    navigate(`/articles/page/${page}`);
  };

  // Render the pagination menu
  const renderPaginationLinks = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={i === currentPage ? 'active-page' : ''}
          style={{ margin: '0 10px', cursor: 'pointer', backgroundColor: i === currentPage ? 'lightblue' : 'white' }}
        >
          {i}
        </button>
      );
    }
    return pages;
  };
  console.log("Current page: " + currentPage + ", out of " + totalPages + " total pages");
  const filteredPosts = selectedCategory === "All"
    ? posts
    : posts.filter(post =>
      post.categories && post.categories.some(cat => cat.title === selectedCategory)
    );

  function getRandomImages(arr, count) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }
  const randomImages = getRandomImages(allImages, 3);

  return (
    <div>
      <section>
        <div className="category-filter" style={{ marginBottom: '20px', textAlign: 'center' }}>
          {["All", "Local", "World", "Politics", "Life"].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                margin: '5px',
                padding: '5px 15px',
                cursor: 'pointer',
                backgroundColor: selectedCategory === category ? categoryColors[category] : 'white',
                color: selectedCategory === category ? 'white' : 'black'
              }}
            >
              {category}
            </button>
          ))}
        </div>
        <div id="ArticlesAndAds">
          <div id="ArticleArea">
            {filteredPosts.map((post) => (
              <article key={post.slug.current}>
                <Link to={`/articles/${post.slug.current}`}>
                  <img src={post.mainImage.asset.url} alt={post.title} />
                </Link>
                {post.categories !== null && (
                  <ul className="Categories">
                    {post.categories.map((category, index) => (
                      <li key={index} 
                        style={{
                          display: 'inline-block',
                          margin: '3px',
                          padding: '2px 6px',
                          borderRadius: '4px',
                          backgroundColor: categoryColors[category.title] || '#eee',
                          color: 'white',
                          fontWeight: 'bold',
                      }}>{category.title}</li>
                    ))}
                  </ul>
                )}
                <h3>{post.title}</h3>
              </article>
            ))}
          </div>
          <div id="AdArea">
            <p>A word from our benefactors</p>
            <hr />
            <div id = "AdImages">
              {randomImages.map((img, index) => (
               <img
                  key={index}
                  src={img}
                  alt={`Random ${index}`}
                  style={{ width: '200px', margin: '10px' }}
                />
              ))}
              <img1 />
            </div>
          </div>
        </div>

        {/* Pagination menu */}
        <div className="pagination" style={{ margin: '20px 5px 5px', textAlign: 'center' }}>
          {renderPaginationLinks()}
        </div>
      </section>
    </div>
  );
}