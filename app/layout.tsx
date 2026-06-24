import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thealchemyofbecoming.com"),

  title: {
    default: "The Alchemy of Becoming",
    template: "%s | The Alchemy of Becoming",
  },

  description:
    "Stories of transformation, reinvention, resilience, healing, self-discovery, purpose, and the courageous evolution of the human spirit.",

  keywords: [
    "personal growth",
    "healing",
    "transformation",
    "self discovery",
    "resilience",
    "life stories",
    "human experience",
    "purpose",
    "emotional growth",
    "storytelling",
    "wisdom",
    "mindset",
    "inspiration",
  ],

  authors: [
    {
      name: "The Alchemy of Becoming",
    },
  ],

  creator: "The Alchemy of Becoming",

  publisher: "The Alchemy of Becoming",

  category: "Personal Growth",

  openGraph: {
    title: "The Alchemy of Becoming",

    description:
      "A living archive dedicated to documenting personal growth, emotional resilience, life-changing experiences, wisdom, and human transformation.",

    url: "https://thealchemyofbecoming.com",

    siteName: "The Alchemy of Becoming",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "The Alchemy of Becoming",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "The Alchemy of Becoming",

    description:
      "Stories of transformation, resilience, healing, self-discovery, and purpose.",

    images: ["/images/og-cover.jpg"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body
        className="
          min-h-screen
          bg-[#0a0a0a]
          text-white
          antialiased
          selection:bg-amber-500
          selection:text-black
        "
      >
        {/* Background Effects */}
        <div className="fixed inset-0 -z-50 overflow-hidden">
          {/* Gradient Orbs */}
          <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-[140px]" />

          <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-yellow-500/10 blur-[140px]" />

          <div className="absolute bottom-0 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-orange-500/5 blur-[160px]" />

          {/* Grid */}
          <div
            className="
              absolute
              inset-0
              bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),
              linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]
              bg-[size:40px_40px]
            "
          />
        </div>

        {/* Site Wrapper */}
        <div className="relative flex min-h-screen flex-col">
          {children}
        </div>

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "The Alchemy of Becoming",
              url: "https://thealchemyofbecoming.com",
              description:
                "Stories of transformation, resilience, healing, self-discovery and purpose.",
              publisher: {
                "@type": "Organization",
                name: "The Alchemy of Becoming",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}