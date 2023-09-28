import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Page } from "ui/components/Layout/Page";

import "ui/styles/algolia.css";
import "ui/styles/index.css";
import "ui/styles/sandpack.css";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "React Releases",
  description:
    "React feature progression through releases, canary, experimental nightly",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                function setTheme(newTheme) {
                  window.__theme = newTheme;
                  if (newTheme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else if (newTheme === 'light') {
                    document.documentElement.classList.remove('dark');
                  }
                }

                var preferredTheme;
                try {
                  preferredTheme = localStorage.getItem('theme');
                } catch (err) { }

                window.__setPreferredTheme = function(newTheme) {
                  preferredTheme = newTheme;
                  setTheme(newTheme);
                  try {
                    localStorage.setItem('theme', newTheme);
                  } catch (err) { }
                };

                var initialTheme = preferredTheme;
                var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

                if (!initialTheme) {
                  initialTheme = darkQuery.matches ? 'dark' : 'light';
                }
                setTheme(initialTheme);

                darkQuery.addEventListener('change', function (e) {
                  if (!preferredTheme) {
                    setTheme(e.matches ? 'dark' : 'light');
                  }
                });

                // Detect whether the browser is Mac to display platform specific content
                // An example of such content can be the keyboard shortcut displayed in the search bar
                document.documentElement.classList.add(
                    window.navigator.platform.includes('Mac')
                    ? "platform-mac"
                    : "platform-win"
                );
              })();
            `,
          }}
        />
        <Page
          toc={[]}
          // @ts-ignore
          routeTree={{}}
          // @ts-ignore
          meta={metadata}
        >
          {children}
        </Page>
      </body>
    </html>
  );
}
