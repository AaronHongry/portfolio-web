import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Specify weights
});

export const metadata: Metadata = {
  title: "Aaron Hong | Portfolio",
  description: "Aaron Hong - Portfolio Web",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased background text-color`}
      >
        {children}
      </body>
    </html>
  );
}
