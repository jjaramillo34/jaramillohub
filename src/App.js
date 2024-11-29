import React, { Suspense, lazy } from "react";
import { useTranslation } from "react-i18next";
import { ToastContainer } from "react-toastify";
import { Analytics } from "@vercel/analytics/react";
import "react-toastify/dist/ReactToastify.css";

// Lazy load components
const ScrollToTop = lazy(() => import("./components/ScrollToTop"));
const AllRoutes = lazy(() => import("./router/AllRoutes"));
const AnimatedCursor = lazy(() => import("react-animated-cursor"));
const TranslationDebug = lazy(() => import("./components/TranslationDebug"));
const LanguageSwitcher = lazy(() => import("./components/LanguageSwitcher"));

// Loading component
const LoadingSpinner = ({ message }) => (
  <div className="fixed inset-0 bg-white dark:bg-gray-900 z-50 flex flex-col items-center justify-center">
    <div className="relative">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#FFB401]/20 border-t-[#FFB401]"></div>
      <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
        {message}
      </div>
    </div>
  </div>
);

const App = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate minimum loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Suspense fallback={<LoadingSpinner message={t("common.loading")} />}>
      <div
        className={`relative transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Analytics />

        <Suspense fallback={null}>
          <AnimatedCursor
            innerSize={8}
            outerSize={35}
            innerScale={1}
            outerScale={1.7}
            outerAlpha={0}
            hasBlendMode={true}
            innerStyle={{
              backgroundColor: "#FFB401",
            }}
            outerStyle={{
              border: "3px solid #FFB401",
            }}
          />
        </Suspense>

        <Suspense fallback={null}>
          <ScrollToTop />
        </Suspense>

        <Suspense fallback={<LoadingSpinner message={t("common.loading")} />}>
          <AllRoutes />
        </Suspense>

        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />

        {process.env.REACT_APP_SHOW_TRANSLATION_DEBUG === "true" && (
          <Suspense fallback={null}>
            <TranslationDebug />
          </Suspense>
        )}

        <Suspense fallback={null}>
          <LanguageSwitcher />
        </Suspense>
      </div>
    </Suspense>
  );
};

export default App;
