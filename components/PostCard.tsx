import Link from "next/link";

interface PostCardProps {
  slug: string;
  title: string;
  date: string;
}

export default function PostCard({ slug, title, date }: PostCardProps) {
  return (
    <Link href={`/posts/${slug}`} className="block p-4 border rounded hover:shadow-lg transition">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-500 text-sm">{new Date(date).toLocaleDateString()}</p>
    </Link>
  );
}

