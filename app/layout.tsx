import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Daily Tech Insights",
  description:
    "Daily Tech Insights is your trusted learning hub for Cloud, DevOps, and modern IT technologies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Header />
        <main className="max-w-3xl mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}









