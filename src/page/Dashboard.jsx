import { Carousel, Col, Row } from "antd";
import React from "react";
import gambar1 from "../assets/sliderDashboard1.png";
import artikel1 from "../assets/Penguatan Dan Pengawasan 2.jpeg";
import artikel2 from "../assets/Seminar Peran dan Fungsi.jpeg";
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
      img: gambar1,
      title: "Pengelola Event Online & Virtual",
      subTitle: "CKD siap membantu anda dalam penyelenggaraan acara yang bersifat Online/Virtual. ",
    },
    {
      img: gambar1,
      title: "Corporate Event Organizer",
      subTitle: "CKD siap membantu Anda dalam penyelenggaraan acara yang bersifat social. Kami pastikan Anda dan tamu undangan Anda mendapatkan pengalaman yang lebih personal dalam acara.",
    },
    {
      img: gambar1,
      title: "Penyelenggara Pertemuan, Konferensi dan Pameran",
      subTitle: "CKD hadir untuk membantu Anda dalam penyelenggaraan berbagai macam kegiatan Pertemuan, Konferensi dan Pameran. .",
    },
  ];

  const ArtikelKami = [
    {
      img: artikel1,
      title: "Workshop Inspektorat Jenderal Kementrian Agama RI",
      subTitle:
        "Penguatan Pengawasan dan Peningkatan Integritas Kementerian Agama Berakhlak.",
    },
    {
      img: artikel2,
      title: "Seminar Bank Indonesia",
      subTitle:
        "Peran dan Fungsi Strategis Bank Indonesia Dalam Membangun Sistem Keuangan Indonesia.",
    },
    {
      img: gambar1,
      title: "Training Inspektorat Jenderal Kementrian Agama RI",
      subTitle:
        "Training Motivasi Kinerja Unggul The 7 Awareness, Inspektorat Jenderal Kementerian Agama RI",
    },
    {
      img: gambar1,
      title: "Seminar BPDP-KS",
      subTitle:
        "Peran Pemuda Dalam Transisi Energi Berkelanjutan Berbasis Sektor Kelapa Sawit.",
    },
    {
      img: gambar1,
      title: "Event Kusemai Nilai",
      subTitle:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit",
    },
  ];

  const galeri = [
    {
      title: "Event Organizer",
      date: "28/03/01",
      img: gambar1,
    },
    {
      title: "Event Organizer",
      date: "28/03/01",
      img: background3,
    },

    {
      title: "Event Organizer",
      date: "28/03/01",
      img: gambar1,
    },

    {
      title: "Event Organizer",
      date: "28/03/01",
      img: gambar1,
    },

    {
      title: "Event Organizer",
      date: "28/03/01",
      img: gambar1,
    },

    {
      title: "Event Organizer",
      date: "28/03/01",
      img: gambar1,
    },
  ];
  return (
    <>
      <div>
        <Carousel autoplay>
          <div className="max max-h-[400px]">
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
          </div>
        </Carousel>
        <div className="px-16 mt-10">
          <div>
            <h1 className="text-center text-4xl font-semibold">Layanan Kami</h1>
            <p className="text-center mt-2">
              Cipta Kreatif Dwipa Hadir Menjadi Solusi Bagi Kamu Yang Ingin Mengabadikan Moment Kegiatan Berkesan
            </p>
            <div className="grid grid-cols-3 gap-10 mx-10 mt-8">
              {LayananKami.map((layanan) => (
                <div className="bg-white hover:bg-gradient-to-r from-[#52b8ff] to-[#9d33fe] px-4 pb-10 hover:text-white rounded-sm shadow-md ">
                  <img
                    src={layanan.img}
                    className="rounded-full w-20 h-20 mx-auto mt-10 mb-6"
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
              Cipta Kreatif Dwipa merupakan Perusahaan yang bergerak di bidang event organizer dan pelatihan keterampilan, 
              dengan semangat dan komitmen yang tinggi untuk meningkatkan kualitas hidup dan kecakapan masyarakat Indonesia.
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
                  <img
                    src={layanan.img}
                    className="rounded-xl w-full h-40 mx-auto mb-6"
                  />
                  <p className="text-center text-xl font-semibold mb-2">
                    {layanan.title}
                  </p>
                  <p className="text-justify">{layanan.subTitle}</p>
                  <p className="text-right mt-10">
                    <Link className="text-[#ff8f3e] text-center hover:text-[#ffc776] ">
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
                <div class="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-[#5e28c2] opacity-0 group-hover:h-full group-hover:opacity-80 duration-500">
                  <h1 class="text-2xl text-white">{layanan.title}</h1>
                  <p class="text-white">{layanan.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="h-96"
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
                Alamat
              </p>
              <p className="text-[#ff8f3e] text-ml hover:text-[#cf7433]">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                085295329287 (Berlian Muhammad)
              </p>
              <p className="text-[#ff8f3e] text-ml hover:text-[#cf7433]">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                Alamat email
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
