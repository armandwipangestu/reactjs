//parent component
import React from "react";
import Albums from "./components/Albums/main.albums";
import MainLayouts from "./components/Layouts/main.layouts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Posts from "./components/Posts/main.posts";
import NotFound from "./components/NotFound/main.notfound";
import Home from "./components/Home/main.home";
import Navigation from "./components/Layouts/navigation.layouts";
import Footer from "./components/Layouts/footer.layouts";

const App = () => {
  return (
    <>
      <MainLayouts>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/albums"
              element={
                <Albums
                  title="Albums API"
                  description="Fetching images with API, default is 3"
                />
              }
            />
            <Route
              path="/posts"
              element={
                <Posts
                  title="Posts API"
                  description="Posts API but GET title only, default is 3"
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </MainLayouts>
    </>
  );
};

export default App;
