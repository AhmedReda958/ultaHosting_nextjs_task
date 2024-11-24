import { Post } from "@/types";
import Link from "next/link";

function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/post/${post.id}`}
      className="block p-4 mb-5 rounded border-gray-700 border "
    >
      <h3 className="text-xl font-bold mb-2">
        #{post.id}. {post.title}
      </h3>
      <p className="text-md text-gray-300 opacity-80">{post.body}</p>
    </Link>
  );
}

// for loading skeleton
export function PostCardSkeleton() {
  return (
    <div className="p-4 mb-5 rounded bg-gray-800 min-h-24 animate-pulse"></div>
  );
}

export default PostCard;
