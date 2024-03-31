import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Foxmarp",
  description: "Foxmarp Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <body className={inter.className}>
        <Header />
        {children}</body>
    </html>
  );
}
