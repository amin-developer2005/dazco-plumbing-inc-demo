import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteShell } from "@/components/layout/site-shell";
import { site } from "@/lib/site";
import appCss from "../styles.css?url";

const APP_NAME = site.name;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      {
        name: "description",
        content:
          "Dazco Plumbing Inc. is a licensed plumbing contractor serving Wake Forest and Raleigh, NC. Call (919) 556-6650 to request a quote.",
      },
      { name: "theme-color", content: "#090b0e" },
      { name: "robots", content: "index, follow" },
      { name: "author", content: site.name },
      { name: "geo.region", content: "US-NC" },
      { name: "geo.placename", content: "Wake Forest" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700&family=Source+Sans+3:ital,wght@0,400;0,500;0,600;1,400&display=swap",
      },
    ],
  }),
  component: RootDocument,
  notFoundComponent: NotFound,
});

function RootDocument() {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="bg-bg text-fg">
        <PreviewHostBridge />
        <AuthProvider>
          <SiteShell>
            <Outlet />
          </SiteShell>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}

function NotFound() {
  return (
    <main id="main" className="page-wrap flex flex-1 flex-col justify-center py-24">
      <p className="kicker">404</p>
      <h1 className="mt-3 font-display text-5xl font-semibold">
        That page is not on this site.
      </h1>
      <p className="mt-4 max-w-lg text-muted">
        The page you asked for is not part of this website concept. Use the
        navigation to return to Home, About Us, Services, or Contact.
      </p>
    </main>
  );
}
