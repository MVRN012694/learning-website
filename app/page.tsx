import { siteConfig } from "@/lib/site-config";

export default function HomePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-4">
        {siteConfig.name}
      </h1>

      <p className="text-lg text-gray-600 mb-6">
        {siteConfig.description}
      </p>

      <p className="text-gray-700">
        Our content is curated to help beginners build strong foundations,
        professionals upskill with real-world practices, and job seekers
        prepare confidently for interviews.
      </p>
    </main>
  );
}















