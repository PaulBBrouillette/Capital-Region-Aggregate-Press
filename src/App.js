import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header"
import Articles from "./components/Articles"
import SinglePost from "./components/SinglePost"
import Error from "./components/Error"

function App() {
  return (
    <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Articles />} exact />
      <Route path="/articles/:slug" element={<SinglePost />} />
      <Route path="/articles/page/:pageNumber" element={<Articles />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="*" element={<Error />} />
    </Routes>
    </Router>
  );
}

export default App;
