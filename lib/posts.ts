import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

/* =========================
   GET ALL POSTS (Homepage)
========================= */
export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data } = matter(fileContents);

    return {
      slug,
      data: {
        title: data.title ?? "Untitled",
        date: String(data.date),
      },
    };
  });
}

/* =========================
   GET SINGLE POST
========================= */
export async function getPostBySlug(slug: string) {
  if (!slug) throw new Error("Slug is undefined");

  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(content);

  return {
    slug,
    data: {
      title: data.title ?? "Untitled",
      date: String(data.date),
    },
    contentHtml: processedContent.toString(),
  };
}















