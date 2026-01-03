import "./globals.css";

export const metadata = {
  title: "My Daily Learning Website",
  description: "Learn something new every day"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        <main className="max-w-3xl mx-auto px-4 py-10">
          {children}
        </main>
      </body>
    </html>
  );
}


