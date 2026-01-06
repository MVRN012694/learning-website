import { getPostBySlug } from "@/lib/posts";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PostPage({ params }: Props) {
  // ✅ IMPORTANT FIX — unwrap params
  const { slug } = await params;

  const post = await getPostBySlug(slug);

  if (!post) {
    return <div className="text-center mt-20">Post not found</div>;
  }

  return (
    <main className="px-4 py-10">
      <article className="prose prose-lg mx-auto">
        <h1>{post.data.title}</h1>

        <p className="text-gray-500 text-sm">
          {new Date(post.data.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <div
          dangerouslySetInnerHTML={{
            __html: post.contentHtml,
          }}
        />
      </article>
    </main>
  );
}






























