import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry :(</h2>
      <p>That page cannot be found</p>
      <Link
        to="/"
        style={{
          color: "red",
          padding: "5px 0 0 0",
        }}
      >
        Back to Home Page
      </Link>
    </div>
  );
};

export default NotFound;
