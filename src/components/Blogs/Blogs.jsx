import React from "react";
import styles from "./Blogs.module.css";

import BlogsCard from "../BlogsCard/BlogsCard";

const Blogs = () => {
  return (
    <section className={styles.blogsSection}>
      <p className={styles.subtitle}>Blog & News</p>
      <h2 className={styles.title}>Read Our Latest News</h2>
      <div className={styles.blogsGrid}>
        <BlogsCard />
        <BlogsCard />
        <BlogsCard />
      </div>
    </section>
  );
};

export default Blogs;
