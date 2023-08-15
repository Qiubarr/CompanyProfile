import React from "react";
import { Col , Row } from "antd";
import logo from "../assets/logo.png";
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
          lat: 10.99835602,
          lng: 77.01502627,
        },
        zoom: 11,
      };
  return (
    <div className=" bg-black mt-16">
      <div className="px-20 py-14 grid grid-cols-2 gap-4">
        <div>
          <Row>
            <Col>
              <img src={logo} width={60} alt="Logo" />
            </Col>
            <Col className="ml-2 font-bold text-blue-800 text-2xl">
              CIPTA KREATIF DWIPA
            </Col>
          </Row>
          <p className="text-gray-400 pr-10 mt-3">
            The Love Boat soon will be making another run the Love Boat promises
            something for everyone Today still wanted by the government they
            survive as soldiers of fortune.
          </p>
          <ul className="list-disc mt- mt-3 ml-10">
            <li className="text-white hover:text-blue-400">Beranda</li>
            <li className="text-white hover:text-blue-400">Layanan</li>
            <li className="text-white hover:text-blue-400">Tentang Kami</li>
            <li className="text-white hover:text-blue-400">Atikel</li>
            <li className="text-white hover:text-blue-400">Kotak Masuk</li>
          </ul>
          <div className="mt-5 flex">
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
          </div>
        </div>
        <div>
          <div style={{ height: "50vh", width: "100%" }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: "" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
              />
            </GoogleMapReact>
          </div>
        </div>
      </div>
    </div>
  );
}
