import { getAllPosts } from "@/lib/posts";

export default async function sitemap() {
  const posts = await getAllPosts();

  const postUrls = posts.map((post) => ({
    url: `https://your-domain.com/posts/${post.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: "https://your-domain.com",
      lastModified: new Date(),
    },
    {
      url: "https://your-domain.com/posts",
      lastModified: new Date(),
    },
    ...postUrls,
  ];
}
