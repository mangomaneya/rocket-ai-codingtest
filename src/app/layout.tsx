import type { Metadata } from "next";
import { Zen_Antique_Soft } from "next/font/google";
import "./globals.css";

const zen = Zen_Antique_Soft({
  weight: "400",
  variable: "--font-zen-serif",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "rocket ai codingtest",
  description: "로켓 ai 코딩테스트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={zen.variable}>
      <body className={`${zen.variable} antialiased`}>{children}</body>
    </html>
  );
}
