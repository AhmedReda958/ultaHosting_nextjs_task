"use client";

import React, { useCallback, useEffect, useState } from "react";
import { Post } from "../types";
import PostCard, { PostCardSkeleton } from "@/components/PostCard";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const fetchPosts = useCallback(async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      setError("An error occurred: " + error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl my-8">All posts</h1>
      <div className=" mt-1">
        {loading
          ? Array.from({ length: 10 }).map((_, index) => (
              <PostCardSkeleton key={index} />
            ))
          : posts.map((post) => <PostCard key={post.id} post={post} />)}
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
}
