import React from "react";
import { Metadata } from "next";
import Link from "next/link";

const getData = async () => {
  const responce = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      //Возможность кеширования данных на 60 секундр, и повторный запрос
      revalidate: 60
    }
  });

  return responce.json();
};

export const metadata: Metadata = {
  title: "Blog | Next.js",
};

const Blog = async () => {
  const posts = await getData();

  return (
    <div>
      Blog
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
