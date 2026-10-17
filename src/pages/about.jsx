import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="bg-[#F7F2E8] text-[#292D28]">
      {/* Hero */}
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 md:grid-cols-2 md:py-24">
        <div>
          <p className="mb-4 inline-block rounded-full bg-[#E8C66A]/40 px-4 py-2 text-sm font-bold text-[#354F3B]">
            CERITA KAMI 🌿
          </p>

          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
            Perjalanan seru dimulai dari
            <span className="text-[#D97745]"> satu langkah.</span>
          </h1>

          <p className="mt-6 max-w-xl leading-8 text-[#62665E]">
            Jelajah adalah teman perjalananmu untuk menemukan tempat-tempat
            menarik di Indonesia. Kami percaya bahwa liburan bukan hanya
            tentang pergi ke suatu tempat, tetapi juga tentang cerita,
            pengalaman, dan kenangan yang dibawa pulang.
          </p>

          <Link
            to="/portfolio"
            className="mt-8 inline-flex rounded-full bg-[#354F3B] px-6 py-3 font-bold text-white transition hover:bg-[#263B2C]"
          >
            Jelajahi Destinasi ↗
          </Link>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=85"
            alt="Pemandangan indah di Bali"
            className="h-80 w-full rounded-[2rem] object-cover shadow-lg sm:h-[440px]"
          />
          <div className="absolute -bottom-5 left-4 rounded-2xl bg-white p-4 shadow-lg sm:left-8">
            <p className="text-sm text-[#62665E]">Motto kami</p>
            <p className="font-extrabold text-[#354F3B]">
              Explore More, Worry Less.
            </p>
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="bg-white px-5 py-16 sm:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <p className="font-bold uppercase tracking-widest text-[#D97745]">
              Tujuan Kami
            </p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Membuat perjalanan terasa lebih mudah.
            </h2>
            <p className="mt-4 leading-7 text-[#62665E]">
              Kami ingin membantu siapa pun merencanakan perjalanan dengan
              lebih praktis, nyaman, dan menyenangkan.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-[#F7F2E8] p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8C66A] text-2xl">
                🧭
              </div>
              <h3 className="text-2xl font-extrabold">Visi</h3>
              <p className="mt-4 leading-7 text-[#62665E]">
                Menjadi teman perjalanan terpercaya yang membantu masyarakat
                mengenal keindahan dan keberagaman destinasi Indonesia.
              </p>
            </div>

            <div className="rounded-3xl bg-[#F7F2E8] p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D97745]/20 text-2xl">
                🎒
              </div>
              <h3 className="text-2xl font-extrabold">Misi</h3>
              <ul className="mt-4 space-y-3 leading-7 text-[#62665E]">
                <li>✓ Menyediakan informasi destinasi yang mudah dipahami.</li>
                <li>✓ Membantu wisatawan menemukan tempat menarik.</li>
                <li>✓ Mendorong perjalanan yang nyaman dan berkesan.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-5 py-16 sm:px-8 md:py-20">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#354F3B] px-6 py-12 text-center text-white sm:px-12">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Siap menemukan cerita baru?
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-7 text-white/80">
            Yuk, mulai rencanakan perjalanan dan temukan destinasi favoritmu
            bersama Jelajah.
          </p>
          <Link
            to="/contact"
            className="mt-7 inline-flex rounded-full bg-[#E8C66A] px-6 py-3 font-bold text-[#292D28] transition hover:bg-[#f1d783]"
          >
            Hubungi Kami ↗
          </Link>
        </div>
      </section>
    </div>
  )
}
