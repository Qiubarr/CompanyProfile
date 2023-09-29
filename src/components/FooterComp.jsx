import React from "react";
import { Col , Row } from "antd";
import logo from "../assets/logo.png";
import BIlogo from "../assets/logoBI.png";
import Kemenaglogo from "../assets/LOGO KEMENAG.png";
import sawitlogo from "../assets/logosawit.png";
import GoogleMapReact from "google-map-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareInstagram,
  faSquareFacebook,
  faSquareTwitter,
} from "@fortawesome/free-brands-svg-icons";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function FooterComp() {
    const defaultProps = {
        center: {
          lat: -6.309530780597378,
          lng: 106.77222093896887,
        },
        zoom: 20,
      };
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
            Cipta Kreatif Dwipa adalah penyedia jasa event organizer di Tangerang Selatan, Untuk acara perusahaan, sekolah, bazaar, outbound dengan konsep yang unik dan dokumentasi serta dekorasi acara yang lengkap.
            Kru kami akan mengatur acara sesuai dengan kebutuhan Anda dan bebas untuk membuka diskusi tentang ide tersebut. 
            Kami berkomitmen untuk menghadirkan pengalaman tak terlupakan di acara yang disediakan dengan orang-orang kami yang kreatif dan solid.
          </p>
          {/* <ul className="list-disc mt- mt-3 ml-10">
            <li className="text-white hover:text-blue-400">Beranda</li>
            <li className="text-white hover:text-blue-400">Layanan</li>
            <li className="text-white hover:text-blue-400">Tentang Kami</li>
            <li className="text-white hover:text-blue-400">Atikel</li>
            <li className="text-white hover:text-blue-400">Kotak</li>
            <li className="text-white hover:text-blue-400">Masuk</li>
            
          </ul> */}
          {/* <div className="mt-5 flex">
            <FontAwesomeIcon
              icon={faSquareTwitter}
              className="mr-2 text-[#d532fc] hover:text-[#5e28c2] text-xl"
            />
            <FontAwesomeIcon
              icon={faSquareFacebook}
              className="mr-2 text-[#d532fc] hover:text-[#5e28c2] text-xl"
            />
            <FontAwesomeIcon
              icon={faSquareInstagram}
              className="mr-2 text-[#d532fc] hover:text-[#5e28c2] text-xl"
            />
            <p className="text-white">Social Media</p>
          </div> */}
          <div className="mt-10 flex justify-center md:justify-start">
            <img src={BIlogo} alt="logo bank indonesia" className="h-8"/>
            <img src={Kemenaglogo} alt="logo Inspektorat Jenderal Kementerian Agama RI" className="h-8 mx-3"/>
            <img src={sawitlogo} alt="logo BPDP-KS" className="h-8"/>
          </div>
        </div>
        <div>
          <div className="my-auto">
          <div className="hidden md:block" style={{ height: "50vh", width: "100%" }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: "" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <AnyReactComponent
                lat={-6.309530780597378}
                lng={106.77222093896887}
                text="My Marker"
              />
            </GoogleMapReact>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
