import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.scss";
import { Header } from "@/widgets";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["cyrillic"],
});

export const metadata: Metadata = {
  title: "Next PC",
  description: "Лучшие игровые решение на любой выбор",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={`${notoSans.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
