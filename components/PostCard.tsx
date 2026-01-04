import Link from "next/link";

type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
};

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/posts/${post.slug}`}>
      <article className="group rounded-lg border border-gray-200 p-6 hover:bg-gray-50 transition">
        <h2 className="text-xl font-semibold group-hover:underline">
          {post.title}
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          {post.date}
        </p>

        <p className="text-gray-700 mt-3 leading-relaxed">
          {post.excerpt}
        </p>
      </article>
    </Link>
  );
}
