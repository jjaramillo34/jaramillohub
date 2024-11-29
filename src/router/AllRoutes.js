import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomeDark from "../views/all-home-version/HomeDark";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeDark />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AllRoutes;
