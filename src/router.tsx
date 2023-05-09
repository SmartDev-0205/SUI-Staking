import React from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import { HomePage } from "./pages/home";
import { ReferralPage } from "./pages/referral";
import { Layout } from "./components/layouts/layout";
import { AirdropPage } from "./pages/airdrop";

export const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/referral" element={<ReferralPage />} />
          <Route path="/airdrop" element={<AirdropPage />} />
          <Route path="/doc" element={<ReferralPage />} />
        </Routes>
      </Layout>
      <ToastContainer />
    </BrowserRouter>
  );
};
