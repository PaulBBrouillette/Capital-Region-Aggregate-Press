import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header"
import Articles from "./components/Articles"
import SinglePost from "./components/SinglePost"
import Error from "./components/Error"
import Footer from "./components/Footer"
import About from "./components/About"

function App() {
  return (
    <div className="page-container">
      <Router>
      <Header />
      <main className="content-wrap">
        <Routes>
          <Route path="/" element={<Articles />} exact />
          <Route path="/articles/:slug" element={<SinglePost />} />
          <Route path="/articles/page/:pageNumber" element={<Articles />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/About" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
