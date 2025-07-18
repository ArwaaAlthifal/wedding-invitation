  import { useState } from 'react'
  import { useRef } from "react";
  import heroImage from './assets/hero.webp'
  import patImage from './assets/pattern.png'
  import jcImage from './assets/jc.png'
  import jef from './assets/jef.png'
  import cut from './assets/cut.png'
  import leftOrnament from './assets/left-decor.png'
  import rightOrnament from './assets/right-decor.png'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import {
    faComments,
    faFaceSmileBeam,
    faHeart,
    faHeartCrack,
    faLocationDot,
    faPeopleArrows,
    faSeedling,
  } from '@fortawesome/free-solid-svg-icons'
  import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
  import ATMCard from './ATMCard'
  import KomentarForm from './KomentarForm';


  function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const togglePlay = () => {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    };

    return (
      <div className="fixed bottom-4 right-4 z-50">
        <audio 
          ref={audioRef} 
          loop
          src="./assets/backsound.mp3" // Replace with your actual music URL
        />
        <button
          onClick={togglePlay}
          className="bg-[#543f33] text-white p-3 rounded-full shadow-lg hover:bg-[#5a4b42] transition"
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
        </button>
      </div>
    );
  }
  function App() {
    return (
      <div className="overflow-x-hidden">
        <MusicPlayer />
        <section className="relative w-screen h-screen flex items-center justify-center overflow-hidden">
          {/* Background Layer */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat filter brightness-50"
            style={{
              backgroundImage: `url(${heroImage})`,
              zIndex: 0,
            }}
          ></div>

          {/* Konten di atas background */}
          <div className="relative z-10 flex flex-col items-center text-white text-center px-6 sm:px-10">
            <img className="w-48 sm:w-48 md:w-48 lg:w-72 xl:w-72" src={jcImage} alt="Jefri dan Cut" loading="lazy" />

            <h1
              className="text-hero text-sm sm:text-md md:text-md mb-6"
              style={{ textShadow: '2px 2px 5px rgba(0,0,0,1)' }}
            >
              JEFRI & CUT
            </h1>
            <h2
              className="text-xs sm:text-sm md:text-sm mb-4"
              style={{ textShadow: '2px 2px 5px rgba(0,0,0,1)' }}
            >
              Kepada Yth. Bapak/Ibu/Saudara/i
            </h2>

            <button className="bg-[#543f33] px-4 py-2 rounded-xl font-semibold text-xs sm:text-sm md:text-md shadow-lg hover:bg-[#5a4b42] transition ">
              <FontAwesomeIcon icon={faEnvelope} className="me-1" /> <a href="#invitation">Buka Undangan</a>
            </button>
          </div>
        </section>

        <section id='invitation' className="relative bg-[#543f33] py-10 px-6 text-center text-white overflow-hidden">
          {/* Ornamennya */}
          <img
            src={leftOrnament}
            alt="Ornamen kiri"
            className="absolute top-0 left-0 w-24 sm:w-32 md:w-40"
            loading="lazy"
          />
          <img
            src={rightOrnament}
            alt="Ornamen kanan"
            className="absolute top-0 right-0 w-24 sm:w-32 md:w-40"
            loading="lazy"
          />

          {/* Teks */}
          <div className="relative z-10 max-w-2xl mx-auto">
            <p
              className="text-xs sm:text-sm font-medium"
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
            >
              "Dan segala sesuatu Kami ciptakan berpasang-pasangan supaya kamu mengingat kebesaran
              Allah."
            </p>
            <p
              className="mt-2 text-sm sm:text-sm font-bold"
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
            >
              QS. Adz-Dzariyat: 49
            </p>
          </div>
        </section>

        <section className="min-h-screen bg-[#f1e9d9] py-20 px-4 text-center text-[#543f33]">
          {/* Judul */}
          <div className="mb-6 leading-none">
            <h1 className="text-header-1 text-xl font-bold leading-none">Kedua</h1>
            <h1
              className="text-header-1 text-3xl font-black leading-none"
              style={{ textShadow: '1px 1px 1px rgba(84,63,51,1)' }}
            >
              Mempelai
            </h1>
          </div>

          {/* Paragraf Pembuka */}
          <p className="max-w-xl mx-auto text-sm mb-12">
            Dengan memohon rahmat dan ridho Allah SWT, perkenankan kami mengundang Bapak/Ibu/Saudara/i
            ke acara pernikahan kami:
          </p>

          {/* Mempelai Perempuan */}
          <div className="flex flex-col items-center mb-10">
            <img src={jef} alt="Foto Jefri" className="w-100 h-60" loading="lazy" />
            <h1 className="text-header-2 text-5xl mt-4 mb-3">Jefri</h1>
            <h1
              className="text-header-1 font-bold"
              style={{ textShadow: '0.5px 0.5px 0.5px rgba(84,63,51,1)' }}
            >
              Jefri Maulizar
            </h1>
            <p className="text-sm">Putra Pertama dari Bapak Marwan H. & Ibu Nurhayati</p>
          </div>

          {/* Simbol "&" */}
          <h1 className="text-header-2 text-6xl font-bold mb-10">&</h1>

          {/* Mempelai Perempuan */}
          <div className="flex flex-col items-center">
            <img src={cut} alt="Foto Jefri" className="w-100 h-60" loading="lazy" />
            <h1 className="text-header-2 text-5xl mt-4 mb-3">Cut</h1>
            <h1
              className="text-header-1 font-black"
              style={{ textShadow: '0.5px 0.5px 0.5px rgba(84,63,51,1)' }}
            >
              Cut Nyakti Siti Zubaidah
            </h1>
            <p className="text-sm">Putri Kedua dari Bapak Alm. Adnan Kasogi & Ibu Ami</p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="min-h-screen bg-[#543f33] py-16 px-4 text-center text-white">
          {/* Judul */}
          <div className="mb-6 leading-none">
            <h1 className="text-header-1 text-xl font-bold leading-none">Rangkaian</h1>
            <h1
              className="text-header-1 text-4xl font-black leading-none text-[#FFD499]"
              style={{ textShadow: '1px 1px 1px rgba(84,63,51,1)' }}
            >
              Acara
            </h1>
          </div>

          {/* Paragraf pembuka */}
          <p className="text-sm max-w-md mx-auto mb-10">
            Pernikahan kami insya Allah akan dilaksanakan pada
          </p>

          {/* Kartu Akad */}
          <div
            className="mx-auto w-[90%] max-w-sm px-6 py-10 rounded-[100px] text-black bg-[#d1c1a4] shadow-md relative "
            style={{
              backgroundImage: `url(${patImage})`, // ganti sesuai filemu
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          >
            {/* Judul Akad */}
            <h1
              className="text-header-1 text-3xl font-black leading-none text-black mb-6"
              style={{ textShadow: '1px 1px 1px rgba(84,63,51,1)' }}
            >
              Akad
            </h1>

            {/* Waktu & Tanggal */}
            <p className="text-sm">Senin, 21 Juli 2025</p>
            <p className="text-sm mb-4 font-semibold">08.00 WIB - selesai</p>

            {/* Icon Lokasi */}
            <div className="flex justify-center items-center gap-4 my-10 px-8">
              <hr className="flex-1 border-[#543f33] border-2" />
              <FontAwesomeIcon icon={faLocationDot} className="text-lg" />
              <hr className="flex-1 border-[#543f33] border-2 rounded rounded-full" />
            </div>

            {/* Lokasi */}
            <p className="text-sm px-2">
              Masjid Al-huda, Kp. Cempa Kec. blangkejeren, Kabupaten Gayo Lues, Aceh
            </p>

            {/* Tombol Maps */}
            <a
              href="https://maps.app.goo.gl/P8wFyhT8tvLCBG53A"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-5 py-2 bg-[#543f33] text-white rounded-full font-semibold text-xs shadow-md"
            >
              <FontAwesomeIcon icon={faLocationDot} className="text-md me-2" />
              Buka Maps
            </a>
          </div>

          <div class="ornamen-center">
            <img src="./assets/ornamen.png" alt="Ornamen" loading="lazy" />
          </div>

          <div
            className="mx-auto w-[90%] max-w-sm px-6 py-10 rounded-[100px] text-black bg-[#d1c1a4] shadow-md relative mt-10"
            style={{
              backgroundImage: `url(${patImage})`, // ganti sesuai filemu
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          >
            {/* Judul Akad */}
            <h1
              className="text-header-1 text-3xl font-black leading-none text-black mb-6"
              style={{ textShadow: '1px 1px 1px rgba(84,63,51,1)' }}
            >
              Resepsi
            </h1>

            {/* Waktu & Tanggal */}
            <p className="text-sm">Senin, 21 Juli 2025</p>
            <p className="text-sm mb-4 font-semibold">10.00 WIB - selesai</p>

            {/* Icon Lokasi */}
            <div className="flex justify-center items-center gap-4 my-10 px-8">
              <hr className="flex-1 border-[#543f33] border-2" />
              <FontAwesomeIcon icon={faLocationDot} className="text-lg" />
              <hr className="flex-1 border-[#543f33] border-2 rounded rounded-full" />
            </div>

            {/* Lokasi */}
            <p className="text-sm px-2">
              Jl. Kota Cane Kp. Cempa Kec. blangkejeren, Kabupaten Gayo Lues, Aceh
            </p>

            {/* Tombol Maps */}
            <a
              href="https://maps.app.goo.gl/nC3DGDuxpdg9Bpyg7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-5 py-2 bg-[#543f33] text-white rounded-full font-semibold text-xs shadow-md"
            >
              <FontAwesomeIcon icon={faLocationDot} className="text-md me-2" />
              Buka Maps
            </a>
          </div>
        </section>

        <section
          className="pt-20 bg-repeat bg-[#f1e9d9] text-[#543f33]"
          style={{
            backgroundImage: 'url(/src/assets/motif.png)', // motif batik
          }}
        >
          <div className="max-w-3xl mx-auto text-center mb-16 px-4">
            <h1
              className="text-header-1 text-xl font-bold leading-none text-[#FFD499]"
              style={{ textShadow: '2px 2px 2px rgba(84,63,51,1)' }}
            >
              Momen
            </h1>
            <h1
              className="text-header-1 text-4xl font-black leading-none text-[#543f33] mb-10"
              style={{ textShadow: '1px 1px 1px rgba(84,63,51,1)' }}
            >
              Bahagia
            </h1>
            <p className="mt-4 text-sm sm:text-sm leading-relaxed font-semibold">
              Rencana Allah jauh lebih indah tanpa kita sadari, dua insan yang tinggal berjauhan bisa
              di satukan dan menjalani hubungan selama 5 tahun.
            </p>
          </div>

          {/* Timeline Item */}
          <div className="max-w-3xl mx-auto space-y-12 px-4 mb-10">
            {/* Tahun 2020 */}
            <div className="flex items-start gap-4">
              <div className="bg-[#543f33] p-3 rounded-full shrink-0 w-10 h-10 flex items-center justify-center">
                <FontAwesomeIcon icon={faComments} style={{ color: '#FFD499' }} />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Tahun 2020</h3>
                <p className="text-sm leading-relaxed">
                  Kami berkenalan lewat media sosial sebagai teman biasa. Seiring waktu, kami semakin
                  dekat hingga akhirnya memutuskan untuk berpacaran meski belum pernah bertemu. Awal
                  hubungan kami penuh ujian, termasuk rasa cemburu dan kesalahpahaman kecil yang sulit
                  diselesaikan.
                </p>
              </div>
            </div>

            {/* Tahun 2021 */}
            <div className="flex items-start gap-4">
              <div className="bg-[#543f33] p-3 rounded-full shrink-0 w-10 h-10 flex items-center justify-center">
                <FontAwesomeIcon icon={faHeartCrack} style={{ color: '#FF3333' }} />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Tahun 2021</h3>
                <p className="text-sm leading-relaxed">
                  Beberapa bulan menjalani hubungan, Icut kehilangan sosok paling berharga - ayahnya.
                  Saya berusaha datang ke Gayo Lues untuk menemaninya, meski belum pernah ke sana
                  sebelumnya. Perjalanan penuh tantangan, termasuk terjatuh dari motor. Tapi pertemuan
                  pertama kami terasa begitu berarti. Setelah itu, kami kembali menjalani hubungan
                  jarak jauh.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#543f33] p-3 rounded-full shrink-0 w-10 h-10 flex items-center justify-center">
                <FontAwesomeIcon icon={faSeedling} style={{ color: '#FFD499' }} />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Tahun 2022</h3>
                <p className="text-sm leading-relaxed">
                  Icut libur kuliah dan kami kembali bertemu di Medan. Bersama teman-teman, kami
                  menikmati liburan ke Berastagi. Namun, saat saya harus bekerja ke Jakarta, kami
                  sempat berselisih. Saya berangkat tanpa sempat berpamitan, dan baru memberi kabar
                  saat sudah jauh, yang membuatnya kecewa dan sedih.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#543f33] p-3 rounded-full shrink-0 w-10 h-10 flex items-center justify-center">
                <FontAwesomeIcon icon={faPeopleArrows} style={{ color: '#FFD499' }} />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Tahun 2023</h3>
                <p className="text-sm leading-relaxed">
                  Hubungan kami benar-benar diuji oleh jarak. Komunikasi hanya lewat handphone, tanpa
                  pertemuan. Saya sangat menyesal tidak sempat berpamitan saat itu.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#543f33] p-3 rounded-full shrink-0 w-10 h-10 flex items-center justify-center">
                <FontAwesomeIcon icon={faFaceSmileBeam} style={{ color: '#FFD499' }} />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Tahun 2024</h3>
                <p className="text-sm leading-relaxed">
                  Setelah dua tahun tak bertemu, akhirnya saya pulang kampung dan bertemu Icut di
                  Bandara Kualanamu. Rasanya campur aduk — bahagia, sedih, haru. Kami kembali
                  menghabiskan waktu di Medan, bercerita dan tertawa bersama, membayangkan masa depan
                  yang kami impikan.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#543f33] p-3 rounded-full shrink-0 w-10 h-10 flex items-center justify-center">
                <FontAwesomeIcon icon={faHeart} style={{ color: '#FF3333' }} />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Tahun 2025</h3>
                <p className="text-sm leading-relaxed">
                  Penantian panjang itu akhirnya terwujud. Kami memutuskan untuk melangkah ke jenjang
                  pernikahan. Lamaran diterima, dan kami sepakat melangsungkan akad pada bulan Juli.
                  Saya berjanji untuk menjadi imam terbaik untuknya, menggantikan sosok ayah yang
                  telah tiada, dan terus bersama melewati segala suka dan duka ke depan.
                </p>
              </div>
            </div>
          </div>
          <img src="/assets/sobekan.png" alt="" className="w-150" loading="lazy" />
        </section>

        <section className="min-h-screen bg-[#543f33] pt-16 px-4 text-center text-white">
          {/* Judul */}
          <div className="mb-6 leading-none">
            <h1 className="text-header-1 text-xl font-bold leading-none">Galeri Kami</h1>
            <h1
              className="text-header-1 text-4xl font-black leading-none text-[#FFD499]"
              style={{ textShadow: '1px 1px 1px rgba(84,63,51,1)' }}
            >
              Berdua
            </h1>
          </div>

          {/* Paragraf pembuka */}
          <p className="text-sm max-w-md mx-auto mb-10">
            Cermin, mata, dan kamera mungkin punya perspektif berbeda tentang kita, tapi di hadiratNya
            aku dan kamu adalah sepasang yang ditakdirkan bersama
          </p>

          {/* Galeri */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img
              src="/assets/fn-jefri/5.webp"
              alt=""
              className="w-full h-auto transition-transform duration-300 rounded hover:brightness-75"
            />
            <img
              src="/assets/fn-jefri/6.webp"
              alt=""
              className="w-full h-auto transition-transform duration-300 rounded hover:brightness-75"
            />
            <img
              src="/assets/fn-jefri/9.webp"
              alt=""
              className="w-full h-auto transition-transform duration-300 rounded hover:brightness-75"
            />
            <img
              src="/assets/fn-jefri/10.webp"
              alt=""
              className="w-full h-auto transition-transform duration-300 rounded hover:brightness-75"
            />
            <img
              src="/assets/fn-jefri/12.webp"
              alt=""
              className="w-full h-auto transition-transform duration-300 rounded hover:brightness-75"
            />
            <img
              src="/assets/fn-jefri/13.webp"
              alt=""
              className="w-full h-auto transition-transform duration-300 rounded hover:brightness-75"
            />
            <img
              src="/assets/fn-jefri/23.webp"
              alt=""
              className="w-full h-auto transition-transform duration-300 rounded hover:brightness-75"
            />
            <img
              src="/assets/fn-jefri/24.webp"
              alt=""
              className="w-full h-auto transition-transform duration-300 rounded hover:brightness-75"
            />
          </div>
        </section>

        <section className="min-h-screen bg-[#543f33] py-5 px-4 text-center text-white">
          <div class="ornamen-center">
            <img src="./assets/ornamen.png" alt="Ornamen" loading="lazy" />
          </div>
          {/* Judul */}

          <div className="mb-6 leading-none">
            <h1 className="text-header-1 text-xl font-bold leading-none">Hadiah</h1>
            <h1
              className="text-header-1 text-3xl font-black leading-none text-[#FFD499]"
              style={{ textShadow: '1px 1px 1px rgba(84,63,51,1)' }}
            >
              Pernikahan
            </h1>
          </div>

          {/* Paragraf pembuka */}
          <div className="flex flex-col items-center">
            <p className="text-sm max-w-md mx-auto mb-10">
              Tanpa mengurangi rasa hormat, bagi Bapak/Ibu/Saudara/i yang ingin memberikan tanda kasih
              untuk kami bisa melalui :
            </p>
            <ATMCard />
          </div>

        </section>

        <section>
          <KomentarForm />
        </section>
      </div>
    )
  }

  export default App
