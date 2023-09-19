import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import Dashboard from "./page/Dashboard";
import DetailArtikel from "./page/DetailArtikel";
import DetailGaleri from "./page/DetailGaleri"
import "./App.css";
import Topbar from "./components/Topbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareInstagram,
  faSquareFacebook,
  faSquareTwitter,
} from "@fortawesome/free-brands-svg-icons";

import FooterComp from "./components/FooterComp";

const { Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <Layout className=" overflow-x-hidden">
        <Topbar />
        <Content>
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/artikel/detail" element={<DetailArtikel />} />
            <Route exact path="/galeri" element={<DetailGaleri />} />
          </Routes>
        </Content>
        <FooterComp />
        <Footer
          style={{ textAlign: "center" }}
          className="bg-gray-900 text-white flex justify-between"
        >
          <div className="flex justify-start gap-1">
            <FontAwesomeIcon
              icon={faSquareTwitter}
              className="mr-2 text-gray-600 hover:text-[#5e28c2] text-3xl"
            />
            <FontAwesomeIcon
              icon={faSquareFacebook}
              className="mr-2 text-gray-600 hover:text-[#5e28c2] text-3xl"
            />
            <FontAwesomeIcon
              icon={faSquareInstagram}
              className="mr-2 text-gray-600 hover:text-[#5e28c2] text-3xl"
            />
            <p className="my-auto">Copyright ...</p>
          </div>
          <div className="hidden md:flex md:justify-end md:gap-3">
            <p className="text-gray-400 hover:text-blue-400">Beranda</p>
            <p className="text-gray-400 hover:text-blue-400">Layanan</p>
            <p className="text-gray-400 hover:text-blue-400">Tentang Kami</p>
            <p className="text-gray-400 hover:text-blue-400">Atikel</p>
            <p className="text-gray-400 hover:text-blue-400">Kotak Masuk</p>
          </div>
        </Footer>
      </Layout>
    </Router>
  );
}

export default App;
