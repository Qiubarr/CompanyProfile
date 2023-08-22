import { Carousel, Col, Row } from "antd";
import React from "react";
import gambar1 from "../assets/sliderDashboard1.png";

//gambar artikel
import artikel1 from "../assets/Penguatan Dan Pengawasan 2.jpeg";
import artikel2 from "../assets/Seminar Peran dan Fungsi.jpeg";
import artikel3 from "../assets/Training 7 Awareness 1.jpeg";
import artikel4 from "../assets/Sawit.jpeg";
import artikel5 from "../assets/Kusemai Nilai.jpeg";

//gambar galeri
import galeri1 from "../assets/Galeri1.jpeg";
import galeri2 from "../assets/Galeri2.jpeg";
import galeri3 from "../assets/Galeri3.jpeg";
import galeri4 from "../assets/Galeri4.jpeg";
import galeri5 from "../assets/Galeri5.jpeg";
import galeri6 from "../assets/Galeri6.jpeg";

//gambar layanan kami
import layanan1 from "../assets/layanan1.svg";
import layanan2 from "../assets/layanan2.svg";
import layanan3 from "../assets/layanan3.svg";

//gambar slider
import slider from "../assets/slider.jpg";
import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";

import tentangkami from "../assets/background2.png";
import white from "../assets/white.png";
import black from "../assets/black.jpg";
import background3 from "../assets/background3.png";
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

const contentStyle = {
  height: "500px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#000",
};

export default function Dashboard() {
  const LayananKami = [
    {
      img: layanan1,
      title: "Pengelola Event Online & Virtual",
      subTitle:
        "CKD siap membantu anda dalam penyelenggaraan acara yang bersifat Online/Virtual. ",
    },
    {
      img: layanan2,
      title: "Corporate Event Organizer",
      subTitle:
        "CKD siap membantu Anda dalam penyelenggaraan acara yang bersifat social. Kami pastikan Anda dan tamu undangan Anda mendapatkan pengalaman yang lebih personal dalam acara.",
    },
    {
      img: layanan3,
      title: "Penyelenggara Pertemuan, Konferensi dan Pameran",
      subTitle:
        "CKD hadir untuk membantu Anda dalam penyelenggaraan berbagai macam kegiatan Pertemuan, Konferensi dan Pameran. .",
    },
  ];

  const ArtikelKami = [
    {
      img: artikel1,
      title: "Workshop",
      tgl: "28-03-2023",
      subTitle:
        "Penguatan Pengawasan dan Peningkatan Integritas Kementerian Agama Berakhlak - Inspektorat Jenderal Kementerian Agama RI .",
    },
    {
      img: artikel2,
      title: "Seminar",
      tgl: "28-03-2023",
      subTitle:
        "Peran dan Fungsi Strategis Bank Indonesia dalam Membangun Sistem Keuangan Indonesia - Bank Indonesia",
    },
    {
      img: artikel3,
      title: "Training",
      tgl: "28-03-2023",
      subTitle:
        "Motivasi Kinerja Unggul The 7 Awareness - Inspektorat Jendral Kementerian Agama RI",
    },
    {
      img: artikel4,
      title: "Seminar",
      tgl: "28-03-2023",
      subTitle:
        "Peran Pemuda dalam Transisi Energi Berkelanjutan Berbasis Sektor Kelapa Sawit - BPDP-KS",
    },
    {
      img: artikel5,
      title: "Launching Event",
      tgl: "28-03-2023",
      subTitle: "Kusemai Nilai, kementerian agama RI",
    },
  ];

  const galeri = [
    {
      title: "Event Organizer",
      date: "28/03/01",
      img: galeri1,
    },
    {
      title: "Event Organizer",
      date: "28/03/01",
      img: galeri2,
    },

    {
      title: "Event Organizer",
      date: "28/03/01",
      img: galeri3,
    },

    {
      title: "Event Organizer",
      date: "28/03/01",
      img: galeri4,
    },

    {
      title: "Event Organizer",
      date: "28/03/01",
      img: galeri5,
    },

    {
      title: "Event Organizer",
      date: "28/03/01",
      img: galeri6,
    },
  ];
  return (
    <>
      <div className="bg-white">
        {/* <Carousel autoplay> */}
        <div className="max max-h-[500px] relative flex-[0_0_auto]">
          <Carousel autoplay>
            <img className="h-[500px] object-cover" src={slider2} />
            <img className="h-[500px] object-cover" src={slider1} />
            <img className="h-[500px] object-cover" src={slider} />
            <img className="h-[500px] object-cover" src={slider3} />
          </Carousel>
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-r from-white to-transparent h-full  duration-500">
            <div className="w-1/2 p-20">
              <p className="text-[#559df5] text-base">|| Cipta Kreatif Dwipa</p>
              <h1 className="text-5xl text-black font-bold">
                Experience Extraordinary: Your Event, Our Expertise
              </h1>
              <p className="text-gray-600 mt-5 text-lg">
                Jangan biarkan perencanaan acara menjadi stres. Jadikan kami
                bagian dari tim Anda, dan kami akan mengubah visi Anda menjadi
                kenyataan yang indah.
              </p>
              <button className="px-4 py-2 rounded-md text-white bg-[#559df5] mt-4 hover:bg-black hover:text-[#559df5]">
                Hubungi Kami
              </button>
            </div>
          </div>
        </div>
        {/* <div>
            <img
              className="w-full h-auto"
              src={slider1}
              alt="Gambar 1"
              style={contentStyle}
            />
          </div>
          <div>
            <img
              className="w-full h-auto"
              src={gambar1}
              alt="Gambar 1"
              style={contentStyle}
            />
          </div>
          <div>
            <img
              className="w-full h-auto"
              src={gambar1}
              alt="Gambar 1"
              style={contentStyle}
            />
          </div> */}
        {/* </Carousel> */}
        <div className="px-16 mt-16">
          <div>
            <h1 className="text-center text-4xl font-semibold">Layanan Kami</h1>
            <p className="text-center mt-2">
              Cipta Kreatif Dwipa Hadir Menjadi Solusi Bagi Kamu Yang Ingin
              Mengabadikan Moment Kegiatan Berkesan
            </p>
            <div className="grid grid-cols-3 gap-10 mx-10 mt-8">
              {LayananKami.map((layanan) => (
                <div className="px-4 pb-10 rounded-sm ">
                  <img
                    src={layanan.img}
                    className="w-16 h-16 mx-auto mt-10 mb-6"
                  />
                  <p className="text-center text-xl font-semibold mb-2">
                    {layanan.title}
                  </p>
                  <p className="text-center">{layanan.subTitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className="px-16 py-8 mt-16"
          style={{
            backgroundImage: `url(${tentangkami})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="text-center text-4xl font-semibold text-white">
            Tentang Kami
          </h1>
          <div className="grid grid-cols-5 gap-10 mx-10">
            <div className="col-span-3">
              <img src={gambar1} className="mt-10 mb-6 rounded-md" />
            </div>
            <div className="my-auto col-span-2">
              <p className="text-2xl text-white mb-6 font-semibold">
                Kenapa Kami ?
              </p>
              <p className="text-justify text-gray-300 leading-8">
                Cipta Kreatif Dwipa merupakan Perusahaan yang bergerak di bidang
                event organizer dan pelatihan keterampilan, dengan semangat dan
                komitmen yang tinggi untuk meningkatkan kualitas hidup dan
                kecakapan masyarakat Indonesia.
              </p>
            </div>
          </div>
        </div>
        <div className="px-16 mt-16">
          <div>
            <h1 className="text-center text-4xl font-semibold">Artikel Kami</h1>
            <p className="text-center mt-2">
              Cipta Kreatif Dwipa Hadir Menjadi Solusi Bagi Kamu
            </p>
            <div className="grid grid-cols-3 gap-10 mx-10 mt-8">
              {ArtikelKami.map((layanan) => (
                <div className="bg-white rounded-lg shadow-md hover:bg-gradient-to-r from-[#d532fc] to-[#5e28c2] px-4 py-4 hover:text-white  ">
                  <div className="relative">
                    <img
                      src={layanan.img}
                      className="rounded-xl w-full h-40 mx-auto mb-6"
                    />
                    <span className="absolute top-0 right-[30%] bg-[#d532fc] text-white w-[40%] py-1 text-center rounded-b-full ">
                      {layanan.tgl}
                    </span>
                  </div>
                  <p className="text-center text-xl font-semibold mb-2">
                    {layanan.title}
                  </p>
                  <p className="text-justify">{layanan.subTitle}</p>
                  <p className="text-right mt-10">
                    <Link
                      to="/artikel/detail"
                      className="text-[#ff8f3e] text-center hover:text-[#ffc776] "
                    >
                      Baca Selengkapnya
                    </Link>
                  </p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-center underline mt-6 hover:text-blue-500">
            Lihat Lainnya
          </p>
        </div>
        <div className="flex justify-between px-24 mt-16">
          <h1 className="text-4xl font-semibold">Galeri</h1>
          <p className="underline hover:text-blue-500">Lihat Semua</p>
        </div>
        <div className="pl-20 mt-5">
          <div className="galeri overflow-x-auto flex whitespace-nowrap w-full">
            {galeri.map((layanan) => (
              <div className="w-60 flex-[0_0_auto] p-4 group relative">
                <img className="h-80 object-cover" src={layanan.img} />
                <div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-[#5e28c2] opacity-0 group-hover:h-full group-hover:opacity-80 duration-500">
                  <h1 className="text-2xl text-white">{layanan.title}</h1>
                  <p className="text-white">{layanan.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="h-96 mb-20"
          style={{
            backgroundImage: `url(${background3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="px-24 py-10 grid grid-cols-5 gap-5 mt-20">
            <div className="text-white col-span-3">
              <p className="font-[Island-Moments] italic text-5xl">
                Butuh Konsultasi ?
              </p>
              <p className="text-4xl font-[itim] mt-3">Silahkan Kontak Kami</p>
              <p className="text-4xl font-[itim] mb-3">Kami Siap Membantu</p>
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
            <div className="bg-white p-8 rounded-lg col-span-2">
              <p className="font-[Island-Moments] italic text-2xl mb-5 text-center">
                Kirim Pertanyaan Anda?
              </p>
              <div>
                <input
                  placeholder="Masukkan Email Anda Disini"
                  className="bg-gray-400 placeholder-gray-200 px-2 py-3 w-full mb-5 rounded-md text-white"
                />
              </div>
              <div>
                <input
                  placeholder="Pertanyaan Anda"
                  className="bg-gray-400 placeholder-gray-200 px-2 py-3 w-full mb-5 rounded-md text-white"
                ></input>
              </div>
              <button className="bg-[#ff8f3e] px-2 py-4 w-full rounded-md text-white hover:bg-[#cf7433]">
                Kirim
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
