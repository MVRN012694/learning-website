import { getPostBySlug } from "@/lib/posts";
import ReactMarkdown from "react-markdown";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return <div className="text-center mt-20">Post not found</div>;
  }

  return (
    <article className="prose prose-lg mx-auto px-4 py-10">
      <h1>{post.data.title}</h1>

      {post.data.date && (
        <p className="text-gray-500 text-sm">
          {new Date(post.data.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      )}

      {post.data.image && (
        <img
          src={post.data.image}
          alt={post.data.title}
          className="rounded-lg my-6"
        />
      )}

      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}























