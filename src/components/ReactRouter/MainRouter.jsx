import React from "react";
import AdminPanel from "../Layout/AdminPanelPage/AdminPanel/AdminPanel";
import Home from "../Layout/Main";
import { Routes, Route } from "react-router-dom";

const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/react-blog-project" element={<Home />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </>
  );
};

export default MainRouter;
