import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//gambar layanan kami
import layanan1 from "../assets/layanan1.svg";
import layanan2 from "../assets/layanan2.svg";
import layanan3 from "../assets/layanan3.svg";

export default function layanan() {
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
return <>
<div className="bg-white">
        <div className="text-white py-5 w-full text-center bg-[#559df5]">
          <Link to="/" className="hover:text-blue-900">
            <FontAwesomeIcon icon={faHouse} className="mr-3" />
            Home -
          </Link>
          <span className="font-semibold"> Layanan </span>
        </div>
<div className="px-16 mt-16">
          <div>
            <h1 className="text-center text-4xl font-semibold">Layanan Kami</h1>
            <p className="text-center mt-2">
              Cipta Kreatif Dwipa Hadir Menjadi Solusi Bagi Kamu Yang Ingin
              Mengabadikan Moment Kegiatan Berkesan
            </p>
            <div className="grid md:grid-cols-3 md:gap-10 mx-1 md:mx-10 md:mt-8">
              {LayananKami.map((layanan) => (
                <div className="px-4 pb-2 md:pb-10 rounded-sm">
                  <img
                    src={layanan.img}
                    className="w-16 h-16 mx-auto mt-3 md:mt-10 mb-2 md:mb-6"
                  />
                  <p className="text-center text-xl font-semibold mb-2">
                    {layanan.title}
                  </p>
                  <p className="text-center">{layanan.subTitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div> </div>
</>
}