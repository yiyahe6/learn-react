import React from "react";
import Rainbow from "../hoc/Rainbow";

const About = () => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>
        Hey gang, in this React tutorial I'll introduce you tothe React Router
        and how we can use it to create different "pages" in our application.
      </p>
    </div>
  );
};
export default Rainbow(About);
