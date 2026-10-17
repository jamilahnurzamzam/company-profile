import { Link } from 'react-router-dom'

const destinations = [
  {
    id: 1,
    name: 'Ubud, Bali',
    category: 'Nature & Culture',
    description: 'Temukan ketenangan di tengah hijaunya alam.',
    image:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    name: 'Labuan Bajo',
    category: 'Island Escape',
    description: 'Petualangan laut dengan pemandangan luar biasa.',
    image:
      'https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3,
    name: 'Yogyakarta',
    category: 'Local Heritage',
    description: 'Jelajahi budaya, sejarah, dan kuliner lokal.',
    image:
      'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=900&q=80',
  },
]

const features = [
  {
    number: '01',
    title: 'Temukan tempat baru',
    description:
      'Inspirasi destinasi untuk perjalanan yang tidak terlupakan.',
  },
  {
    number: '02',
    title: 'Rencanakan perjalanan',
    description:
      'Panduan dan ide itinerary agar perjalanan lebih terarah.',
  },
  {
    number: '03',
    title: 'Rasakan pengalaman lokal',
    description:
      'Kenali budaya, kuliner, dan cerita dari setiap tempat.',
  },
]

export default function Home() {
  return (
    <div className="overflow-hidden bg-[#F7F2E8] text-[#292D28]">
      {/* HERO */}
      <section className="px-5 pb-14 pt-12 sm:px-8 sm:pb-20 sm:pt-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#354F3B] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#D97745]" />
              YOUR NEXT ADVENTURE STARTS HERE
            </span>

            <h1 className="mt-7 max-w-xl text-5xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Dunia luas,
              <span className="mt-1 block text-[#D97745] sm:text-8xl">
                ayo jelajah!
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-8 text-[#62665E] sm:text-lg">
              Temukan destinasi seru, kenali budaya lokal, dan
              ciptakan cerita perjalananmu sendiri bersama JalanYuk.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#destinations"
                className="rounded-full bg-[#354F3B] px-7 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-[#263B2C]"
              >
                Jelajahi Destinasi ↗
              </a>

              <Link
                to="/about"
                className="rounded-full border border-[#D9D8CD] bg-white px-7 py-4 font-semibold text-[#354F3B] transition hover:bg-[#EDE8DC]"
              >
                Tentang Kami
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[#62665E]">
              <span>- Inspirasi wisata -</span>
              <span>- Cerita lokal -</span>
              <span>- Petualangan baru -</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -right-4 -top-5 h-28 w-28 rounded-full bg-[#E8C66A] sm:-right-5 sm:h-36 sm:w-36" />

            <div className="relative rounded-[2rem] bg-white p-3 shadow-xl sm:rounded-[2.5rem] sm:p-4">
              <img
                src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=85"
                alt="Pemandangan tropis di Bali"
                className="h-[360px] w-full rounded-[1.5rem] object-cover sm:h-[470px] sm:rounded-[2rem]"
              />

              <div className="absolute bottom-7 left-7 right-7 rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur sm:bottom-9 sm:left-9 sm:right-9 sm:p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-[#D97745]">
                  DESTINATION OF THE WEEK
                </p>
                <div className="mt-2 flex items-center justify-between gap-3">
                  <div>
                    <h2 className="text-xl font-bold">Bali, Indonesia</h2>
                    <p className="mt-1 text-sm text-[#62665E]">
                      A little escape, a lot of memories.
                    </p>
                  </div>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E8C66A] text-xl">
                    ↗
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-3 rounded-2xl bg-[#D97745] px-5 py-4 text-white shadow-lg sm:-left-7">
              <p className="text-sm font-medium">Time for a getaway!</p>
              <p className="mt-1 text-xs text-white/80">
                Your story awaits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section
        id="destinations"
        className="bg-white px-5 py-16 sm:px-8 sm:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#D97745]">
                PLACES TO GO
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">
                Ke mana kita hari ini?
              </h2>
              <p className="mt-4 max-w-xl leading-7 text-[#62665E]">
                Dari keindahan alam sampai sudut kota yang penuh cerita,
                selalu ada tempat baru untuk ditemukan.
              </p>
            </div>

            <Link
              to="/portfolio"
              className="w-fit font-bold text-[#354F3B] transition hover:text-[#D97745]"
            >
              Lihat semua destinasi ↗
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((destination) => (
              <article
                key={destination.id}
                className="group overflow-hidden rounded-[1.75rem] bg-[#F7F2E8] transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    loading="lazy"
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white px-4 py-2 text-xs font-bold text-[#354F3B]">
                    {destination.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl font-bold">
                      {destination.name}
                    </h3>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E8C66A] text-lg transition group-hover:bg-[#D97745]">
                      ↗
                    </span>
                  </div>

                  <p className="mt-3 leading-7 text-[#62665E]">
                    {destination.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY JELAJAH */}
      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#D97745]">
              THE JELAJAH WAY
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">
              Perjalanan bukan cuma soal tujuan.
            </h2>
            <p className="mt-4 leading-7 text-[#62665E]">
              Ini tentang tempat yang kamu temukan, orang yang kamu temui,
              dan cerita yang kamu bawa pulang.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.number}
                className="rounded-[1.75rem] border border-[#E5E0D4] bg-white p-7 transition hover:border-[#D97745] hover:shadow-lg sm:p-8"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8C66A] font-extrabold text-[#354F3B]">
                  {feature.number}
                </span>

                <h3 className="mt-6 text-xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-[#62665E]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="px-5 pb-16 sm:px-8 sm:pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#354F3B] px-6 py-12 text-white sm:rounded-[2.5rem] sm:px-12 sm:py-16 lg:px-16">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#E8C66A]">
                YOUR NEXT CHAPTER
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-5xl">
                Dunia menunggu. Yuk, jalan!
              </h2>
              <p className="mt-4 leading-7 text-white/75">
                Mulai dari satu destinasi, lalu biarkan rasa ingin tahumu
                membawamu lebih jauh.
              </p>
            </div>

            <Link
              to="/contact"
              className="w-fit shrink-0 rounded-full bg-[#E8C66A] px-7 py-4 font-bold text-[#292D28] transition hover:-translate-y-1 hover:bg-white"
            >
              Hubungi Kami ↗
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
