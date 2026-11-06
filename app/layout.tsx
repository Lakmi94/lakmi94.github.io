import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Lakmi Weerapperuma",
  description:
    "Software and web developer with experience in mobile application development, game programming, databases, and Olympic broadcasting.",
};

const stylesheets = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/devicon.min.css",
  "https://use.fontawesome.com/releases/v5.5.0/css/all.css",
  "/css/animate.css",
  "/css/icomoon.css",
  "/css/bootstrap.css",
  "/css/flexslider.css",
  "/css/owl.carousel.min.css",
  "/css/owl.theme.default.min.css",
  "/css/style.css",
  "/css/portfolio.css",
];

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Quicksand:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href={stylesheets[0]} />
        <link
          rel="stylesheet"
          href={stylesheets[1]}
          integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
          crossOrigin="anonymous"
        />
        {stylesheets.slice(2).map((href) => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
      </head>
      <body>{children}</body>
    </html>
  );
}
