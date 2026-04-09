import Link from "next/link";
import React from "react";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <div className="header-content">
            <Link href="/" className="logo">
              Kule Korner
            </Link>
            <nav className="nav-links">
              <Link href="/">Home</Link>
              <Link href="/posts">Posts</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
