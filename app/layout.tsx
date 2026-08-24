import { Inter } from "next/font/google";

import ToasterContext from "./context/ToasterContext";

import ActiveStatus from "./components/ActiveStatus";
import "./globals.css";

import AuthContext from "./context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Muktinath Tech — Chat",
  description: "Muktinath Tech Chat",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext>
          <ToasterContext />
          <ActiveStatus />
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
