import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./i18n";
import "./index.css";

const App = React.lazy(() => import("./App"));

const LoadingFallback = () => (
  <div className="fixed inset-0 bg-white dark:bg-gray-900 z-50 flex flex-col items-center justify-center min-h-screen">
    <div className="relative">
      <div className="animate-spin rounded-full h-16 w-16 border-4 border-[#FFB401]/20 border-t-[#FFB401]"></div>
      <div className="mt-4 text-lg font-medium text-[#FFB401]">
        JaramilloHub
      </div>
    </div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback={<LoadingFallback />}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>
);
