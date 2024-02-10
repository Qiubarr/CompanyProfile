import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPhone,
  faMapLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faSquareInstagram,
  faSquareFacebook,
  faSquareTwitter,
} from "@fortawesome/free-brands-svg-icons";

import background3 from "../assets/background3.png";


export default function kontak() {
  const runPopup=()=>{
    alert ("Pertanyaan Anda Berhasil Dikirim!")
  }
    return <>
    <div className="bg-white">
        <div className="text-white py-5 w-full text-center bg-[#559df5]">
          <Link to="/" className="hover:text-blue-900">
            <FontAwesomeIcon icon={faHouse} className="mr-3" />
            Home -
          </Link>
          <span className="font-semibold"> Kontak </span>
        </div>
    <div
          className="h-96 "
          style={{
            backgroundImage: `url(${background3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="px-4 md:px-24 py-10 grid md:grid-cols-5 md:gap-5my-auto">
            <div className="text-white md:col-span-3">
              <p className="font-[itim] text-2xl md:text-5xl text-center md:text-left hidden md:block">
                Butuh Konsultasi ?
              </p>
              <p className="hidden md:block text-4xl font-[itim] mt-3">
                Silahkan Kontak Kami
              </p>
              <p className="hidden md:block text-4xl font-[itim] mb-3">
                Kami Siap Membantu
              </p>
              <div className="hidden md:block">
                <p className="text-lg font-medium">Kontak</p>
                <p className="text-[#ff8f3e] text-ml hover:text-[#cf7433]">
                  <FontAwesomeIcon icon={faMapLocationDot} className="mr-2" />
                  Jl. Raya Cirendeu No.17E, Cireundeu, Kec. Ciputat Tim., Kota
                  Tangerang Selatan, Banten 15419
                </p>
                <p className="text-[#ff8f3e] text-ml hover:text-[#cf7433]">
                  <FontAwesomeIcon icon={faPhone} className="mr-2" />
                  085295329287 (Berlian Muhammad)
                </p>
                <p className="text-[#ff8f3e] text-ml hover:text-[#cf7433]">
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                  ciptakreatifdwipa@gmail.com
                </p>
                <div className="mt-3 flex">
                  <FontAwesomeIcon
                    icon={faSquareTwitter}
                    className="mr-2 text-[#fff] hover:text-[#5e28c2] text-xl"
                  />
                  <FontAwesomeIcon
                    icon={faSquareFacebook}
                    className="mr-2 text-[#fff] hover:text-[#5e28c2] text-xl"
                  />
                  <FontAwesomeIcon
                    icon={faSquareInstagram}
                    className="mr-2 text-[#fff] hover:text-[#5e28c2] text-xl"
                  />
                  <p className="text-white">@ciptakreatifdwipa</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg md:col-span-2">
              <p className="font-[Island-Moments] italic text-2xl mb-5 text-center">
                Kirim Pertanyaan Anda?
              </p>
              <div>
                <input
                  placeholder="Masukkan Email Anda Disini"
                  className="bg-gray-400 placeholder-gray-200 px-2 py-3 w-full mb-5 rounded-md text-black"
                />
              </div>
              <div>
                <input
                  placeholder="Pertanyaan Anda"
                  className="bg-gray-400 placeholder-gray-200 px-2 py-3 w-full mb-5 rounded-md text-black"
                ></input>
              </div>
              <button onClick={runPopup}className="bg-[#ff8f3e] px-2 py-4 w-full rounded-md text-white hover:bg-[#cf7433]">
                Kirim
              </button>
            </div>
          </div>
        </div>
      </div> 
 </>
}