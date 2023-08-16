import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import Dashboard from "./page/Dashboard";
import DetailArtikel from "./page/DetailArtikel"
import "./App.css";
import Topbar from "./components/Topbar";

import FooterComp from "./components/FooterComp";

const { Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <Layout className="">
        <Topbar />
        <Content>
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/artikel/detail" element={<DetailArtikel />} />
          </Routes>
        </Content>
        <FooterComp />
        <Footer
          style={{ textAlign: "center" }}
          className="bg-gray-900 text-white"
        >
          Copyright...
        </Footer>
      </Layout>
    </Router>
  );
}

export default App;
