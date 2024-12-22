import { useState, useEffect} from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import client from "../client";
import "../css/ArticlesCSS.css";

export default function Articles() {
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const { pageNumber } = useParams();  // Get page number from URL
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

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

  return (
    <div>
      <section>
        <h1>Articles</h1>
        <h2>You are viewing page {currentPage} of {totalPages}</h2>

        <div id="ArticleArea">
          {posts.map((post) => (
            <article key={post.slug.current}>
              <Link to={`/articles/${post.slug.current}`}><img src={post.mainImage.asset.url} alt={post.title} /></Link>
              {post.categories !== null && (
                <ul className="Categories">
                  {post.categories.map((category, index) => (<li key={index}>{category.title}</li>))}
                </ul>
              )}
              <h4>{post.title}</h4>
            </article>
          ))}
        </div>

        {/* Pagination menu */}
        <div className="pagination" style={{ marginTop: '20px', textAlign: 'center' }}>
          {renderPaginationLinks()}
        </div>
      </section>
    </div>
  );
}