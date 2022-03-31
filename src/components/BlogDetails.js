import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../customhooks/useFetch";
import expStyle from "./exp.module.css";
import { useHistory } from "react-router-dom";
const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch(`/blogs/${id}`, "get");
  const history = useHistory();
  const handleClick = () => {
    fetch("http://localhost:3000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      console.log("Blog Deleted");
      history.push("/");
    });
  };
  console.log(blog);
  return (
    <div className="blog-details">
      {isPending && <div>Loading</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p className={expStyle.author}>
            Writen by <b>{blog.author}</b>
          </p>
          <div>{blog.body}</div>
          <button className={expStyle.btn} onClick={handleClick}>
            Delete{" "}
          </button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
