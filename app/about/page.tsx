import { siteConfig } from "@/lib/site-config";

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">About {siteConfig.name}</h1>

      <p className="text-gray-700 mb-4">
        {siteConfig.name} is your trusted learning hub for Cloud, DevOps,
        and modern IT technologies.
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>Beginners building strong technical foundations</li>
        <li>Professionals upskilling with real industry practices</li>
        <li>Job seekers preparing confidently for interviews</li>
      </ul>
    </main>
  );
}



