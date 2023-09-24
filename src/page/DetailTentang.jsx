import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import tentangkami from "../assets/background2.png";
import team from "../assets/team.jpg";
export default function DetailTentang() {
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
        </>
    )
}
