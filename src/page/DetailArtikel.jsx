import gambar1 from "../assets/Penguatan Dan Pengawasan 2.jpeg";
import newsartikel1 from "../assets/Seminar Peran dan Fungsi.jpeg";
import newsartikel2 from "../assets/Training 7 Awareness 1.jpeg";
import newsartikel3 from "../assets/Kusemai Nilai.jpeg";
import galeri1 from "../assets/Galeri1.jpeg";
import foto from "../assets/foto.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareInstagram,
  faSquareFacebook,
  faSquareTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function DetailArtikel() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // Format month with leading zero
  const day = currentDate.getDate();

  const NewPost = [
    {
      img: newsartikel1,
      title:
        "Peran dan Fungsi Strategis Bank Indonesia dalam Membangun Sistem Keuangan Indonesia - Bank Indonesia",
    },
    {
      img: newsartikel2,
      title:
        "Motivasi Kinerja Unggul The 7 Awareness - Inspektorat Jendral Kementerian Agama RI",
    },
    {
      img: newsartikel3,
      title: "Kusemai Nilai - kementerian agama RI",
    },
  ];

  const galeri = [
    {
      img: gambar1,
    },
    {
      img: galeri1,
    },
    {
      img: gambar1,
    },
    {
      img: galeri1,
    },
    {
      img: gambar1,
    },
  ];

  const comment = [
    {
      img: foto,
      nama: "Satrio Joyodono",
      tgl: "28 - 03 - 2023",
      komen:
        "Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry standard dummy text ever sincer condimentum purus. In non ex at ligula fringilla lobortis et aliquet.",
    },
    {
      img: foto,
      nama: "Rizki Akbar Ananda",
      tgl: "28 - 03 - 2023",
      komen:
        "Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry standard dummy text ever sincer condimentum purus. In non ex at ligula fringilla lobortis et aliquet.",
    },
  ];

  const [Komentar, setKomentar] = useState(comment);
  const [name, setName] = useState({
    nama: "",
    komen: "",
    img: foto,
    tgl: `${day} - ${month} - ${year}`,
  });

  const addComment = () => {
    setKomentar((value) => [...value, name]);
    setName({ ...name, nama: "", komen: "" });
  };
  return (
    <div className="bg-white">
      <div className="text-white py-5 w-full text-center bg-[#559df5]">
        <Link to="/" className="hover:text-blue-900">
          <FontAwesomeIcon icon={faHouse} className="mr-3" />
          Home -
        </Link>
        <Link className="hover:text-blue-900"> Artikel - </Link>
        <span className="font-semibold"> Detail Artikel</span>
      </div>
      <div className="px-8 md:px-16 py-10">
        <div className="md:grid md:grid-cols-3 md:gap-10">
          <div className="md:col-span-2">
            <div>
              <img src={gambar1} className=" h-60 md:h-96 w-full" />
              <p className="text-xl md:text-3xl font-medium mt-3 font-serif">
                Penguatan Pengawasan dan Peningkatan Integritas Kementerian
                Agama Berakhlak - Inspektorat Jendral Kementerian Agama RI
              </p>
              <p className="text-blue-400 mt-2">
                Admin - {Komentar.length} Comments
              </p>
              <p className="mt-5 text-base text-justify md:text-left md:text-lg text-gray-400">
                Workshop merupakan sebuah kegiatan pertemuan sekelompok orang
                dengan minat, keahlian, dan profesi pada bidang tertentu.
                Anggota peserta workshop akan terlibat secara aktif untuk
                melakukan diskusi maupun penelitian untuk meningkatkan
                keahliannya.
              </p>
              <p className="mt-2 text-base text-justify md:text-left md:text-lg text-gray-400">
                Workshop bertujuan untuk memberikan pengetahuan serta informasi
                kepada seluruh peserta sesuai bidang yang mereka tekuni dan
                bertujuan untuk meningkatkan kompetensi sumber daya manusia
                dalam suatu lembaga ataupun perusahaan.
              </p>
              <p className="mt-2 text-base text-justify md:text-left md:text-lg text-gray-400">
                Inspektorat Jendral Kementerian Agama RI bekerja sama dengan CV
                Cipta Kreatif Dwipa menyelenggarakan sebuah workshop guna
                meningkatkan kualitas SDM di lingkup Kementerian Agama RI.
              </p>
            </div>
            <hr className="h-px my-8 bg-gray-200 border-0" />
            <div className="flex justify-end">
              <p className="text-gray-400 mr-4">Bagikan</p>
              <FontAwesomeIcon
                icon={faSquareTwitter}
                className="mr-4 text-[#d532fc] hover:text-[#5e28c2] text-2xl"
              />
              <FontAwesomeIcon
                icon={faSquareFacebook}
                className="mr-4 text-[#d532fc] hover:text-[#5e28c2] text-2xl"
              />
              <FontAwesomeIcon
                icon={faSquareInstagram}
                className="mr-4 text-[#d532fc] hover:text-[#5e28c2] text-2xl"
              />
            </div>
            <hr className="h-px my-8 bg-gray-200 border-0" />
            <div>
              <h1 className="text-3xl font-semibold">
                {Komentar.length} comments
              </h1>
              <div className="divide-y divide-blue-100 mt-5">
                {Komentar.map((layanan) => (
                  <div className="grid grid-cols-6 py-5">
                    <div className="col-span-1">
                      <img
                        src={layanan.img}
                        className="rounded-full w-10 h-10 md:w-20 md:h-20"
                      />
                    </div>
                    <div className="col-span-5">
                      <p className="text-xl font-medium">{layanan.nama}</p>
                      <p className="text-sm md:text-base text-[#ff8f3e] font-medium">
                        {layanan.tgl}
                      </p>
                      <p className="mt-2 text-gray-400">{layanan.komen}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <hr className="h-px my-8 bg-gray-200 border-0" />
            <h1 className="text-3xl font-semibold">Tinggalkan Komentar</h1>
            <div className="mt-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    className="w-full p-4 bg-slate-200"
                    placeholder="Full Name"
                    value={name.nama}
                    onChange={(e) => setName({ ...name, nama: e.target.value })}
                  />
                </div>
                <div>
                  <input
                    className="w-full p-4 bg-slate-200"
                    placeholder="Email"
                  />
                </div>
              </div>
              <textarea
                className="w-full p-4 bg-slate-200 mt-4"
                rows={6}
                placeholder="Write Message"
                value={name.komen}
                onChange={(e) => setName({ ...name, komen: e.target.value })}
              />
              <button
                className="py-4 px-6 text-white font-medium mt-4 bg-[#ff8f3e]"
                onClick={addComment}
              >
                Kirim
              </button>
            </div>
          </div>
          <div className="md:col-span-1 mt-8 md:mt-0">
            <div className="bg-blue-100 pt-8 px-8 pb-6 shadow-md">
              <p className="text-xl font-medium">New Post</p>
              <div className="divide-y divide-gray-100">
                {NewPost.map((layanan) => (
                  <div className="grid grid-cols-5 py-5">
                    <div className="col-span-1">
                      <img src={layanan.img} className="w-12 h-12" />
                    </div>
                    <div className="col-span-4 ml-5 font-semibold hover:text-[#3728c2]">
                      <p>{layanan.title}</p>
                    </div>
                    <hr className="w-1 " />
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-blue-100 p-8 mt-8 shadow-md">
              <p className="text-xl font-medium">Galeri</p>
              <div className="grid grid-cols-2 gap-4 mt-5">
                {galeri.map((layanan) => (
                  <img
                    src={layanan.img}
                    className="hover:scale-110 ease-in duration-500"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
