import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//gambar artikel
import artikel1 from "../assets/Penguatan Dan Pengawasan 2.jpeg";
import artikel2 from "../assets/Seminar Peran dan Fungsi.jpeg";
import artikel3 from "../assets/Training 7 Awareness 1.jpeg";
import artikel4 from "../assets/Sawit.jpeg";
import artikel5 from "../assets/Kusemai Nilai.jpeg";

export default function Artikel() {
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
    return (
        <>
        <div className="bg-white">
        <div className="text-white py-5 w-full text-center bg-[#559df5]">
          <Link to="/" className="hover:text-blue-900">
            <FontAwesomeIcon icon={faHouse} className="mr-3" />
            Home -
          </Link>
          <span className="font-semibold"> Artikel </span>
        </div>
        <div className="px-8 md:px-16 mt-16">
        <div>
          <h1 className="text-center text-4xl font-semibold">Artikel Kami</h1>
          <p className="text-center mt-2">
            Cipta Kreatif Dwipa Hadir Menjadikan Acara Anda Menyenangkan dan Takterlupakan
          </p>
          <div className="grid grid-cols-1 gap-2 md:grid md:grid-cols-3 md:gap-10 md:mx-10 mt-8">
          {ArtikelKami.map((layanan) => (
                <div className="bg-white rounded-lg shadow-md hover:bg-gradient-to-r from-[#d532fc] to-[#5e28c2] px-4 py-4 hover:text-white flex flex-col justify-between h-full">
                  <div className="relative">
                    <img
                      src={layanan.img}
                      className="rounded-xl w-full h-40 mx-auto mb-6"
                    />
                    <span className="absolute top-0 right-[30%] bg-[#d532fc] text-white w-[40%] py-1 text-center rounded-b-full ">
                      {layanan.tgl}
                    </span>
                  </div>
                  <div>
                    <p className="text-center text-xl font-semibold mb-2">
                      {layanan.title}
                    </p>
                    <p className="text-justify">{layanan.subTitle}</p>
                  </div>
                  <button className="text-center mt-10 p-2 bg-[#ff8f3e] w-full rounded-md">
                    <Link
                      to="/artikel/detail"
                      className="text-center hover:text-[#ffc776] text-white"
                    >
                      Baca Selengkapnya
                    </Link>
                  </button>
                </div>
              ))}
          </div>
        </div>
        <p className="text-center underline mt-6 hover:text-blue-500">
        </p>
      </div> </div>
      </>
    )
            }
