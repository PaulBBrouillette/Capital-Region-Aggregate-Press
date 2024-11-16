import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header"
import Homepage from "./pages/Homepage"
import Blog from "./pages/Blog"
import SinglePost from "./pages/SinglePost"
import Error from "./pages/Error"
import Authors from "./pages/Authors"

function App() {
  return (
    <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Homepage />} exact />
      <Route path="/blog/:slug" element={<SinglePost />} />
      <Route path="/blog/page/:pageNumber" element={<Blog />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/authors" element={<Authors />} />
      <Route path="*" element={<Error />} />
    </Routes>
    </Router>
  );
}

export default App;
