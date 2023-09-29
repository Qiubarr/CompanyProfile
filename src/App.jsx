import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import Dashboard from "./page/Dashboard";
import DetailArtikel from "./page/DetailArtikel";
import DetailGaleri from "./page/DetailGaleri"
import "./App.css";
import Topbar from "./components/Topbar";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareInstagram,
  faSquareFacebook,
  faSquareTwitter,
} from "@fortawesome/free-brands-svg-icons";

import FooterComp from "./components/FooterComp";
import DetailTentang from "./page/DetailTentang";
import Artikel from "./page/Artikel";
import Layanan from "./page/Layanan";
import Kontak from "./page/Kontak";
import Beranda from "./page/Dashboard";




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
            <Route exact path="/tentang" element={<DetailTentang/>}/>
            <Route exact path="/artikel" element={<Artikel/>}/>
            <Route exact path="/layanan" element={<Layanan/>}/>
            <Route exact path="/kontak" element={<Kontak/>}/>
            <Route exact path="/Dashboard" element={<Beranda />} />
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
            <p className="my-auto">Cipta Kreatif Dwipa</p>
          </div>
          <div className="hidden md:flex md:justify-end md:gap-3">
            <Link to="/dashboard">
            <p className="text-gray-400 hover:text-blue-400">Beranda</p>
            </Link>
            <Link to="/Layanan">
            <p className="text-gray-400 hover:text-blue-400">Layanan</p>
            </Link>
            <Link to="/tentang">
            <p className="text-gray-400 hover:text-blue-400">Tentang Kami</p>
            </Link>
            <Link to="/artikel">
            <p className="text-gray-400 hover:text-blue-400">Artikel</p>
            </Link>
            <Link to="/galeri">
            <p className="text-gray-400 hover:text-blue-400">Galeri</p>
            </Link>
            <Link to="/Kontak">
            <p className="text-gray-400 hover:text-blue-400">Kontak</p>
            </Link>
          </div>
        </Footer>
      </Layout>
    </Router>
  );
}

export default App;
