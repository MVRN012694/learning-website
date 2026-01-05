import "./globals.css";
import Navbar from "@/components/Navbar";

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
      <body>
        <Navbar />
        <main className="max-w-6xl mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}







