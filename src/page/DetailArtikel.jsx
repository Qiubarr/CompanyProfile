import gambar1 from "../assets/Penguatan Dan Pengawasan 2.jpeg";
import foto from "../assets/foto.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareInstagram,
  faSquareFacebook,
  faSquareTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function DetailArtikel() {
  const NewPost = [
    {
      img: gambar1,
      title: "Motivasi Kinerja Unggul The 7 Awareness",
    },
    {
      img: gambar1,
      title: "Motivasi Kinerja Unggul The 7 Awareness",
    },
    {
      img: gambar1,
      title: "Motivasi Kinerja Unggul The 7 Awareness",
    },
  ];

  const galeri = [
    {
      img: gambar1,
    },
    {
      img: gambar1,
    },
    {
      img: gambar1,
    },
    {
      img: gambar1,
    },
    {
      img: gambar1,
    },
  ];

  const comment = [
    {
      img: foto,
      nama: "Nama Orang",
      tgl: "28 - 03 - 2023",
      comment:
        "Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry standard dummy text ever sincer condimentum purus. In non ex at ligula fringilla lobortis et aliquet.",
    },
    {
      img: foto,
      nama: "Nama Orang",
      tgl: "28 - 03 - 2023",
      comment:
        "Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry standard dummy text ever sincer condimentum purus. In non ex at ligula fringilla lobortis et aliquet.",
    },
  ];
  return (
    <div className="px-16  mt-10 ">
      <div className="my-3 text-gray-500">
        <Link to="/">
          <FontAwesomeIcon icon={faArrowLeft} className="mr-3" />
          Home /{" "}
        </Link>
        <Link> Artikel / </Link>
        <span className="font-semibold"> Detail Artikel</span>
      </div>
      <div className="grid grid-cols-3 gap-10">
        <div className="col-span-2">
          <div>
            <img src={gambar1} className="h-96 w-full" />
            <h1 className="text-3xl font-medium mt-3 font-serif">
              Penguatan Pengawasan dan Peningkatan Integritas Kementerian Agama
              Berakhlak - Inspektorat Jendral Kementerian Agama RI
            </h1>
            <p className="text-blue-400 mt-2">Admin - 3 Comments</p>
            <p className="mt-5 text-lg text-gray-400">
              Workshop merupakan sebuah kegiatan pertemuan sekelompok orang
              dengan minat, keahlian, dan profesi pada bidang tertentu. Anggota
              peserta workshop akan terlibat secara aktif untuk melakukan
              diskusi maupun penelitian untuk meningkatkan keahliannya.
            </p>
            <p className="mt-2 text-lg text-gray-400">
              Workshop bertujuan untuk memberikan pengetahuan serta informasi
              kepada seluruh peserta sesuai bidang yang mereka tekuni dan
              bertujuan untuk meningkatkan kompetensi sumber daya manusia dalam
              suatu lembaga ataupun perusahaan.
            </p>
            <p className="mt-2 text-lg text-gray-400">
              Inspektorat Jendral Kementerian Agama RI bekerja sama dengan CV
              Cipta Kreatif Dwipa menyelenggarakan sebuah workshop guna
              meningkatkan kualitas SDM di lingkup Kementerian Agama RI.
            </p>
          </div>
          <hr class="h-px my-8 bg-gray-200 border-0" />
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
          <hr class="h-px my-8 bg-gray-200 border-0" />
          <div>
            <h1 className="text-3xl font-semibold">
              {comment.length} comments
            </h1>
            <div className="divide-y divide-blue-100 mt-5">
              {comment.map((layanan) => (
                <div className="grid grid-cols-6 py-5">
                  <div className="col-span-1">
                    <img src={layanan.img} className="rounded-full w-20 h-20" />
                  </div>
                  <div className="col-span-5">
                    <p className="text-xl font-medium">{layanan.nama}</p>
                    <p className="text-base text-[#ff8f3e] font-medium">
                      {layanan.tgl}
                    </p>
                    <p className="mt-2 text-gray-400">{layanan.comment}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <hr class="h-px my-8 bg-gray-200 border-0" />
          <h1 className="text-3xl font-semibold">Tinggalkan Komentar</h1>
          <form className="mt-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  className="w-full p-4 bg-slate-200"
                  placeholder="Full Name"
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
            />
            <button className="py-4 px-6 text-white font-medium mt-4 bg-[#ff8f3e]">
              Kirim
            </button>
          </form>
        </div>
        <div className="col-span-1">
          <div className="bg-blue-100 pt-8 px-8 pb-6">
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
          <div className="bg-blue-100 p-8 mt-8">
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
  );
}
