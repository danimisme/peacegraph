import Link from "next/link";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer id="footer" className="w-full pb-14 pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-200 pb-14 flex justify-between items-center flex-col gap-8 lg:gap-0 lg:flex-row">
          <div className="block">
            <h3 className="font-manrope text-3xl text-gray-900 font-bold mb-2 text-center lg:text-left">
              Berlangganan news letter kami
            </h3>
            <p className="text-gray-500 text-center lg:text-left">
              Tetap up to date dengan pembaruan dan pengumuman produk terbaru
              kami.
            </p>
          </div>
          <div className="flex items-center flex-col gap-4 lg:flex-row">
            <input
              type="text"
              name="email"
              className="py-3 px-6 h-14 border border-gray-300 shadow-sm rounded-full focus:outline-none"
              placeholder="Enter your mail.."
            />
            <button className="h-14 py-3.5 px-7 bg-indigo-600 shadow-sm rounded-full text-white font-bold">
              Berlangganan
            </button>
          </div>
        </div>
        {/* <!--Grid--> */}
        <div className="grid grid-cols-2 min-[690px]:grid-cols-4 lg:grid-cols-6 gap-4 xl:gap-8 pt-14 pb-10 max-w-xs mx-auto min-[690px]:max-w-2xl lg:max-w-full">
          <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
            <img
              src="/icon/LOGO.png"
              alt="peacegraph logo"
              className="h-16 w-auto mx-auto lg:mx-0"
            />
            <p className="py-4 text-gray-500 lg:max-w-xs text-center lg:text-left">
              Percetakan & digital printing
              <br />
              Ada yang ingin anda tanyakan ?
            </p>
            <a
              href="https://wa.me/c/628118811647"
              className="py-2.5 px-5 h-9 block w-fit bg-indigo-600 rounded-full shadow-sm text-xs text-white mx-auto transition-all  duration-500 hover:bg-indigo-700 lg:mx-0"
            >
              Hubungi Kami
            </a>
          </div>
          {/* <!--End Col--> */}
          <div className="lg:mx-auto  max-w-xs col-span-2">
            <h4 className="text-lg text-gray-900 font-medium mb-7">Lokasi</h4>
            <ul className="text-sm  transition-all duration-500">
              <li className="mb-3">
                <p className="text-gray-600 whitespace-nowrap hover:text-gray-900">
                  Jl. Wibawa Mukti 2 KM. 4 No. 128,
                </p>
              </li>
              <li className="mb-3">
                <p className="text-gray-600 whitespace-nowrap hover:text-gray-900">
                  RT.001/RW.006, Jatiluhur,
                </p>
              </li>
              <li className="mb-3">
                <p className="text-gray-600 whitespace-nowrap hover:text-gray-900">
                  Kec. Jatiasih, Kota Bekasi,
                </p>
              </li>
              <li className="mb-3">
                <p className="text-gray-600 whitespace-nowrap hover:text-gray-900">
                  Jawa Barat 17425
                </p>
              </li>
            </ul>
          </div>
          {/* <!--End Col--> */}
          <div className="lg:mx-auto text-left col-span-2">
            <h4 className="text-lg text-gray-900 font-medium mb-7">
              Jam Kerja
            </h4>
            <ul className="text-sm  transition-all duration-500">
              <li className="mb-3">
                <p className="text-gray-600 whitespace-nowrap hover:text-gray-900">
                  Senin - Jumat: 08.00 - 22.00
                </p>
              </li>
              <li className="mb-3">
                <p className="text-gray-600 whitespace-nowrap hover:text-gray-900">
                  Sabtu - Minggu: 08.00 - 17.00
                </p>
              </li>
            </ul>
          </div>
        </div>
        {/* <!--Grid--> */}
        <div className="py-7 border-t border-gray-200">
          <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
            <div>
              <span className="text-sm text-gray-500 ">
                <a href="/">Peacegraph</a> 2024, All rights reserved.
              </span>
              <p className="text-sm text-gray-500">
                Are you an admin ?
                <Link href="/auth/login" className="text-blue-500 mx-2">
                  Click Here
                </Link>
              </p>
            </div>

            <div className="flex mt-5 px-2 cursor-pointer">
              <a
                href="https://wa.me/c/628118811647"
                target="_blank"
                className="text-gray-700 group hover:text-gray-900 transition-all duration-500"
              >
                <FaWhatsapp className="inline-block h-6 w-6 me-2 group-hover:-translate-y-4 transition-all duration-500" />
              </a>
              <a
                href="https://www.instagram.com/peacegraph_/"
                target="_blank"
                className="text-gray-700 group hover:text-gray-900 transition-all duration-500"
              >
                <FaInstagram className="inline-block h-6 w-6 me-2 group-hover:-translate-y-4 transition-all duration-500" />
              </a>
              <a
                href="http://tiktok.com/@peacegraph7"
                target="_blank"
                className="text-gray-700 group hover:text-gray-900 transition-all duration-500"
              >
                <FaTiktok className="inline-block h-5 w-6 me-2 group-hover:-translate-y-4 transition-all duration-500" />
              </a>
              <a
                href="https://goo.gl/maps/MgK7c1U1Sw7yiGdN8"
                target="_blank"
                className="text-gray-700 group hover:text-gray-900 transition-all duration-500"
              >
                <FaLocationDot className="inline-block h-6 w-6 me-2 group-hover:-translate-y-4 transition-all duration-500" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
