import React, { Suspense } from "react";
import ScrollToTop from "./components/ScrollToTop";
import AllRoutes from "./router/AllRoutes";
import AnimatedCursor from "react-animated-cursor";
import { ToastContainer } from "react-toastify";
import ReactGA from "react-ga4";

const trackingId = "G-HZ22P07JGN"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);

const App = () => {
  // this for animation
  //useEffect(() => {
  //  AOS.init({
  //    duration: 1000,
  //    once: true,
  //  });
  //}
  //, []);
  return (
    <Suspense fallback={null}>
      <>
        <AnimatedCursor
          // make the pointer larger
          innerSize={8}
          outerSize={8}
          color="193, 11, 111"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
        />

        <ScrollToTop />
        <AllRoutes />
        {/* End contact */}
        <ToastContainer />
        {/* Same as */}
      </>
    </Suspense>
  );
};

export default App;
