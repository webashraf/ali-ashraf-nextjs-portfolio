/* eslint-disable prettier/prettier */
import "@/src/styles/globals.css";
import clsx from "clsx";
import { Metadata, Viewport } from "next";

import { FloatingNavDemo } from "./(mainLayout)/_components/_Menu/NavMenu";
import { Providers } from "./providers";

import { fontSans } from "@/src/config/fonts";
import { siteConfig } from "@/src/config/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased dark:bg-black",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen container max-w-[1920px] mx-auto">
            {/* <Navbar /> */}
            <FloatingNavDemo />
            <main className=" mx-auto px-0 flex-grow container max-w-[1920px] ">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
