import React from "react";
import { Metadata } from "next";
import Posts from "@/components/Posts";
import PostsSearch from "@/components/PostsSearch";

export const metadata: Metadata = {
  title: "Blog | Next.js",
};

const Blog = async () => {
  return (
    <div>
      Blog
      <PostsSearch />
      <Posts />
    </div>
  );
};

export default Blog;
