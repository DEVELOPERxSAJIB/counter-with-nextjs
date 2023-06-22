"use client"

import "./globals.css";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import colors from "colors";
import store from "@/store/store";
import "bootstrap/dist/css/bootstrap.min.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
