import React from "react";
import { Col, Row } from "antd";
import logo from "../assets/logo.png";
import BIlogo from "../assets/logoBI.png";
import Kemenaglogo from "../assets/LOGO KEMENAG.png";
import sawitlogo from "../assets/logosawit.png";

export default function FooterComp() {
  return (
    <div className=" bg-black">
      <div className="px-8 md:px-20 py-14 md:grid md:grid-cols-2 md:gap-4">
        <div>
          <Row>
            <Col>
              <img src={logo} className="w-[60px]" alt="Logo" />
            </Col>
            <Col className="ml-2 font-bold text-blue-800 text-lg md:text-2xl">
              CIPTA KREATIF DWIPA
            </Col>
          </Row>
          <p className="text-gray-400 md:pr-10 mt-3 text-justify md:text-left">
            Cipta Kreatif Dwipa adalah penyedia jasa event organizer di
            Tangerang Selatan, Untuk acara perusahaan, sekolah, bazaar, outbound
            dengan konsep yang unik dan dokumentasi serta dekorasi acara yang
            lengkap. Kru kami akan mengatur acara sesuai dengan kebutuhan Anda
            dan bebas untuk membuka diskusi tentang ide tersebut. Kami
            berkomitmen untuk menghadirkan pengalaman tak terlupakan di acara
            yang disediakan dengan orang-orang kami yang kreatif dan solid.
          </p>
          <div className="mt-10 flex justify-center md:justify-start">
            <img src={BIlogo} alt="logo bank indonesia" className="h-8" />
            <img
              src={Kemenaglogo}
              alt="logo Inspektorat Jenderal Kementerian Agama RI"
              className="h-8 mx-3"
            />
            <img src={sawitlogo} alt="logo BPDP-KS" className="h-8" />
                      
          </div>
        </div>
        <div>
          <div className="my-auto">
            <div
              className="hidden md:block"
              style={{ height: "50vh", width: "100%" }}
            >
              <iframe
                src="http://maps.google.com/maps?q=-6.309530780597378,106.77222093896887&z=16&output=embed"
                height="300"
                width="550"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}