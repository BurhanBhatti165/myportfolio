import React from "react";
import "./BlogCard.scss";
import {openInNewTab} from "../../utils/links";

export default function BlogCard({blog, isDark}) {

  return (
    <button
      type="button"
      onClick={() => openInNewTab(blog.url, blog.title)}
      className={isDark ? "blog-container dark-mode" : "blog-container"}
      aria-label={`Open blog post: ${blog.title}`}
      style={{background: "none", border: "none", padding: 0, textAlign: "left"}}
    >
        <a
          className={
            isDark ? "dark-mode blog-card blog-card-shadow" : "blog-card"
          }
          href="#blog"
        >
          <h3 className={isDark ? "small-dark blog-title" : "blog-title"}>
            {blog.title}
          </h3>
          <p className={isDark ? "small-dark small" : "small"}>
            {blog.description}
          </p>
          <div className="go-corner">
            <div className="go-arrow">→</div>
          </div>
        </a>
    </button>
  );
}
