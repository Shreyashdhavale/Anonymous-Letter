// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anonymous Letters - Send Your Heart",
  description: "A safe space to express your genuine feelings anonymously",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "'Merriweather', serif" }}>
        {children}
      </body>
    </html>
  );
}
