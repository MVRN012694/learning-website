import { getPostBySlug } from "../../../lib/posts";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PostPage({ params }: Props) {
  const { slug } = await params; // ✅ unwrap params

  if (!slug) {
    return <div>Article not found</div>;
  }

  const post = await getPostBySlug(slug);

  return (
    <main className="min-h-screen p-10">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-sm text-gray-500 mt-2">{post.date}</p>

      <article
        className="prose mt-8"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </main>
  );
}

