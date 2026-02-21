import "./globals.css";
import Navbar from "../components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://use.typekit.net" />
        <link rel="stylesheet" href="https://use.typekit.net/iad4maq.css" />
      </head>
      <body className="bg-light-gray">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
