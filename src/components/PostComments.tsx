"use client";
import Link from "next/link";
import { useState } from "react";
import type { Comment } from "@/types";

const PostComments = ({ postId }: { postId: string }) => {
  const [comments, setComments] = useState<Comment[]>([]);

  const fetchComments = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const comments = await response.json();
      setComments(comments);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Comments</h2>
      <button
        onClick={fetchComments}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Load Comments
      </button>
      <ul className="mt-5">
        {comments.map((comment) => (
          <li key={comment.id} className="mb-5 border-b border-gray-800 p-2">
            <h3 className="text-md font-bold">{comment.name}</h3>
            <p className="text-gray-300 text-sm max-w-[450]">{comment.body}</p>
            <div className="mt-4 text-sm">
              User Email:{" "}
              <Link href={"#"} className="text-blue-500">
                {comment.email}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostComments;
