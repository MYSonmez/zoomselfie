import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";
import { useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-input bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ZoomSelfie — Self-Service Photo & Video Experience" },
      {
        name: "description",
        content:
          "ZoomSelfie lets people take or upload a photo, choose a template and create a personalized video through kiosk, web or API experiences.",
      },
      { name: "author", content: "ZoomSelfie" },
      { property: "og:title", content: "ZoomSelfie — Create and Share Your Moment" },
      {
        property: "og:description",
        content:
          "Take or upload a photo, choose a place or theme and receive a personalized ZoomSelfie video ready to share.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@ZoomSelfie" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const location = useRouter().state.location;
  const reduceMotion = useReducedMotion();
  const isPhotoSoft = location.pathname === "/photosoft";

  useEffect(() => {
    let themeTimer: ReturnType<typeof setTimeout> | undefined;

    if (location.pathname === "/photosoft") {
      if (reduceMotion) {
        document.documentElement.dataset.theme = "photosoft";
      } else {
        themeTimer = setTimeout(() => {
          document.documentElement.dataset.theme = "photosoft";
        }, 360);
      }
    } else {
      delete document.documentElement.dataset.theme;
    }

    if (location.pathname === "/") {
      document.documentElement.dataset.page = "zoomselfie-home";
    } else if (location.pathname === "/kiosk") {
      document.documentElement.dataset.page = "zoomselfie-kiosk";
    } else {
      delete document.documentElement.dataset.page;
    }

    return () => {
      if (themeTimer) clearTimeout(themeTimer);
    };
  }, [location.pathname, reduceMotion]);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col transition-colors duration-500">
        <Navbar />
        <motion.main
          key={location.pathname}
          initial={reduceMotion || !isPhotoSoft ? false : { opacity: 0.35, x: 54 }}
          animate={{ opacity: 1, x: 0 }}
          transition={isPhotoSoft ? { duration: 0.72, delay: 0.28, ease: [0.22, 1, 0.36, 1] } : { duration: 0 }}
          className="flex-1"
        >
          <Outlet />
        </motion.main>
        <Footer />

        <AnimatePresence>
          {isPhotoSoft && !reduceMotion && (
            <motion.div
              key="photosoft-product-transition"
              aria-hidden="true"
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{
                clipPath: [
                  "inset(0 100% 0 0)",
                  "inset(0 0% 0 0)",
                  "inset(0 0% 0 0)",
                  "inset(0 0 0 100%)",
                ],
              }}
              transition={{ duration: 1.18, times: [0, 0.3, 0.6, 1], ease: [0.76, 0, 0.24, 1] }}
              className="pointer-events-none fixed inset-0 z-[100] overflow-hidden bg-[#05080a]"
            >
              <div className="absolute inset-y-0 left-0 w-2 bg-cyan-300 sm:w-3" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,.11),transparent_34rem)]" />
              <motion.div
                initial={{ opacity: 0, x: -34 }}
                animate={{ opacity: [0, 1, 1, 0], x: [-34, 0, 0, 26] }}
                transition={{ duration: 0.88, times: [0, 0.22, 0.67, 1], delay: 0.16, ease: "easeOut" }}
                className="absolute inset-0 flex items-center justify-center px-6 text-center text-white"
              >
                <div>
                  <div className="mx-auto mb-5 h-px w-14 bg-cyan-300" />
                  <p className="text-[10px] font-black uppercase tracking-[.32em] text-cyan-300">ZoomSelfie presents</p>
                  <p className="mt-3 text-5xl font-extrabold tracking-[-.06em] sm:text-7xl">PhotoSoft</p>
                  <p className="mt-3 text-[10px] font-bold uppercase tracking-[.22em] text-white/38">Attraction Photo Operations</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </QueryClientProvider>
  );
}
