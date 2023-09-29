import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import tentangkami from "../assets/background2.png";
import team from "../assets/team.jpg";

//gambar layanan kami
import layanan1 from "../assets/partners.png";
import layanan2 from "../assets/idea.png";
import layanan3 from "../assets/reliability.png";


export default function DetailTentang() {
    const LayananKami = [
        {
          img: layanan1,
          title: "Solid Teamwork",
          subTitle:
            "CKD Memiliki team yang solid dan kompak untuk membantu melancarkan acara Anda ",
        },
        {
          img: layanan2,
          title: "Creative Thinking",
          subTitle:
            "CKD memiliki team yang kreatif dalam mengerjakan dan menjalankan acara untuk menghasilkan acara yang menarik dan unik",
        },
        {
          img: layanan3,
          title: "Reliable and Fun",
          subTitle:
            "CKD  merupakan partner yang dapat Anda andalkan dalam acara dan memberikan kesenangan dalam acara Anda.",
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
          <span className="font-semibold"> Tentang Kami </span>
        </div>
        <div
          className="px-16 py-8"
          style={{
            backgroundImage: `url(${tentangkami})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="text-center text-4xl font-semibold text-white">
            Tentang Kami
          </h1>
          <div className="grid md:grid-cols-5 gap-10 mx-1 md:mx-10">
            <div className="md:col-span-3">
              <img src={team} className="mt-10 md:mb-6 rounded-md" />
            </div>
            <div className="my-auto md:col-span-2">
              <p className="text-center md:text-left text-2xl text-white mb-6 font-semibold">
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
        </div> </div>
        <div className="px-16 mt-16">
          <div>
            <h1 className="text-center text-4xl font-semibold">Cv. Cipta Kreatif Dwipa </h1>
            <p className="text-center mt-2">
              Hadir Menjadi Solisi Bagi Kamu Yang Ingin Mengabadikan Moment Kegiatan Berkesan
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
        </div> 
       </>
    )
}
