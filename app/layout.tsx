import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-800 text-slate-100 container mx-auto p-16 flex justify-center items-center flex-col`}
      >
        <nav className="p-8 flex gap-4">
          <Link href="/task1">Task1</Link>
          <Link href="/task2">Task2</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
