import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bookmark Shortcuts - ItsMe Prince",
  description: "Bookmark Shortcuts that makes my life easy. These are the bookmarks which I access regularly!",
  icons: {
    icon: "/Logo.png"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="keywords" content="Mohd Uvaish, ItsMe Prince, Website, Landing Page, Product WebPage, Web Developer, Next.js, Tailwind CSS, Full Stack Developer" />
        <meta name="author" content="Mohd Uvaish" />
      </head>
      <body className={`${inter.className} relative`}>
        <div className=" bg-gradient-to-r from-stone-950 to-black">
          {children}
          </div>
      </body>
    </html>
  );
}
