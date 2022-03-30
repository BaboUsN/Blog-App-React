import React, { useState, useEffect } from "react";
import useFetch from "../customhooks/useFetch";
import BlogList from "./BlogList";
const Home = () => {
  const { isPending, data: blogs, error } = useFetch("/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
