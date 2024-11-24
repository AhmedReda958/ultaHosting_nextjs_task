import PostComments from "@/components/PostComments";

async function getPost(postId: string) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}

async function postPage({ params }: { params: { postId: string } }) {
  const post = await getPost(params.postId);

  return (
    <main className="container mx-auto">
      <h1 className="text-2xl mb-4">Post id: #{post.id}</h1>
      <div className="mb-10 pb-6 border-b border-gray-800">
        <h2 className="text-xl mb-6">{post.title}</h2>
        <p className="text-basetext-gray-300 opacity-80 pe-10">{post.body}</p>
      </div>
      <PostComments postId={params.postId} />
    </main>
  );
}

export default postPage;
