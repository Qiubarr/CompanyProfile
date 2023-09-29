import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


//gambar galeri
import galeri1 from "../assets/Galeri1.jpeg";
import galeri2 from "../assets/Galeri2.jpeg";
import galeri3 from "../assets/Galeri3.jpeg";
import galeri4 from "../assets/Galeri4.jpeg";
import galeri5 from "../assets/Galeri5.jpeg";
import galeri6 from "../assets/Galeri6.jpeg";

export default function DetailGaleri() {
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
        <div className="text-white py-5 w-full text-center bg-[#559df5]">
          <Link to="/" className="hover:text-blue-900">
            <FontAwesomeIcon icon={faHouse} className="mr-3" />
            Home -
          </Link>
          <span className="font-semibold"> Galeri </span>
        </div>
        <p className=" text-3xl font-bold mt-8 mb-5 text-center">Galeri</p>
        <p className="text-center mt-2">
        Cipta Kreatif Dwipa Hadir Menjadi Solusi Bagi Kamu Yang Ingin Mengabadikan Moment Kegiatan Berkesan
          </p>
        <div className="pl-4 pr-4 md:pl-20 md:pr-20 mt-2 md:mt-5 pb-14">
          <div className="grid grid-cols-4 gap-4 mx-auto">
            {galeri.map((layanan, index) => (
              <div key={index} className=" w-64 flex-[0_0_auto] p-4 group relative">
                <img className="h-80 object-cover" src={layanan.img} />
                <div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-[#5e28c2] opacity-0 group-hover:h-full group-hover:opacity-80 duration-500">
                  <h1 className="text-2xl text-white">{layanan.title}</h1>
                  <p className="text-white">{layanan.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      ;
    </>
  );
}
