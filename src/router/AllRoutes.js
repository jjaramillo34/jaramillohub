import React from "react";
import Preview from "../views/Preview";
import HomeDark from "../views/all-home-version/HomeDark";
import HomeRtl from "../views/all-home-version/HomeRtl";
import HomeDarkAlternative from "../views/all-home-version/HomeDarkAlternative";
import NotFound from "../views/NotFound";
import { Routes, Route } from "react-router-dom";
import ContextProvider from "../Context/ContextProvider";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

const AllRoutes = () => {
  return (
    <>
      <ContextProvider>
        <ScrollTopBehaviour />
        <Routes>
          <Route path="/" element={<Preview />} />
          <Route path="/home" element={<HomeDark />} />
          <Route path="/home-rtl" element={<HomeRtl />} />
          <Route path="/test" element={<HomeDarkAlternative />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ContextProvider>
    </>
  );
};

export default AllRoutes;
