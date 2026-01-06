import Link from "next/link";

type Props = {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
};

export default function PostCard({ title, date, excerpt, slug }: Props) {
  return (
    <Link href={`/posts/${slug}`}>
      <article className="border rounded-lg p-5 hover:shadow-md transition mb-6">
        <h2 className="text-xl font-semibold mb-1">{title}</h2>
        <p className="text-sm text-gray-500 mb-2">{date}</p>
        <p className="text-gray-700">{excerpt}</p>
      </article>
    </Link>
  );
}


