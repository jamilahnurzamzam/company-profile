import { useState } from 'react'

const categories = ['All Places', 'Nature', 'Culture', 'Beach']

const destinations = [
  {
    id: 1,
    name: 'Ubud, Bali',
    region: 'Bali, Indonesia',
    category: 'Nature',
    label: 'Nature Escape',
    description: 'Menikmati hijaunya sawah, hutan tropis, dan suasana yang menenangkan.',
    image:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    name: 'Labuan Bajo',
    region: 'East Nusa Tenggara',
    category: 'Beach',
    label: 'Island Adventure',
    description: 'Jelajahi pulau-pulau eksotis dan birunya laut Indonesia.',
    image:
      'https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3,
    name: 'Yogyakarta',
    region: 'Special Region of Yogyakarta',
    category: 'Culture',
    label: 'Local Heritage',
    description: 'Temukan warisan budaya, bangunan bersejarah, dan kuliner khas.',
    image:
      'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 4,
    name: 'Bromo',
    region: 'East Java, Indonesia',
    category: 'Nature',
    label: 'Mountain Escape',
    description: 'Sambut matahari terbit dengan panorama pegunungan yang memukau.',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 5,
    name: 'Raja Ampat',
    region: 'West Papua, Indonesia',
    category: 'Beach',
    label: 'Ocean Paradise',
    description: 'Nikmati laut jernih, gugusan pulau, dan keindahan bawah laut.',
    image:
      'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 6,
    name: 'Borobudur',
    region: 'Central Java, Indonesia',
    category: 'Culture',
    label: 'Cultural Journey',
    description: 'Mengenal sejarah dan kekayaan budaya melalui warisan bersejarah.',
    image:
      'https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&w=900&q=80',
  },
]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All Places')

  const filteredDestinations =
    activeCategory === 'All Places'
      ? destinations
      : destinations.filter(
          (destination) => destination.category === activeCategory
        )

  return (
    <div className="min-h-screen bg-[#F7F2E8] text-[#292D28]">
      {/* PAGE HEADER */}
      <section className="px-5 pb-12 pt-14 sm:px-8 sm:pb-16 sm:pt-20">
        <div className="mx-auto max-w-7xl">
          <span className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-[#D97745] shadow-sm">
            YOUR NEXT ADVENTURE
          </span>

          <div className="mt-6 grid gap-6 md:grid-cols-2 md:items-end">
            <h1 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
              Places that make you say{' '}
              <span className="text-[#D97745] sm:text-8xl">wow!</span>
            </h1>

            <p className="max-w-xl leading-8 text-[#62665E] md:justify-self-end">
              Dari pegunungan hingga pantai tropis, temukan inspirasi
              perjalanan dan sudut Indonesia yang menunggu untuk dijelajahi.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full bg-[#354F3B] px-4 py-2 text-sm font-semibold text-white">
              6 travel inspirations
            </span>
            <span className="rounded-full bg-[#E8C66A] px-4 py-2 text-sm font-semibold text-[#292D28]">
              Explore Indonesia 🇮🇩
            </span>
          </div>
        </div>
      </section>

      {/* DESTINATION FILTER */}
      <section className="bg-white px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-extrabold">Find your kind of trip</h2>
            <p className="mt-1 text-sm text-[#62665E]">
              Pilih suasana perjalanan yang kamu suka.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                className={`rounded-full px-5 py-3 text-sm font-bold transition ${
                  activeCategory === category
                    ? 'bg-[#354F3B] text-white'
                    : 'bg-[#F7F2E8] text-[#62665E] hover:bg-[#E8C66A] hover:text-[#292D28]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* DESTINATION CARDS */}
      <section className="px-5 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-7 flex items-center justify-between gap-4">
            <p className="font-semibold text-[#62665E]">
              Showing {filteredDestinations.length} destinations
            </p>
            <span className="text-sm font-semibold text-[#D97745]">
              Explore at your own pace ↗
            </span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredDestinations.map((destination) => (
              <article
                key={destination.id}
                className="group overflow-hidden rounded-[1.75rem] bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    loading="lazy"
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-[#354F3B]">
                    {destination.label}
                  </span>
                </div>

                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#D97745]">
                    {destination.region}
                  </p>

                  <h3 className="mt-2 text-2xl font-extrabold">
                    {destination.name}
                  </h3>

                  <p className="mt-3 min-h-14 leading-7 text-[#62665E]">
                    {destination.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-[#EDE8DC] pt-4">
                    <span className="text-sm font-semibold text-[#354F3B]">
                      {destination.category}
                    </span>
                    <span
                      aria-hidden="true"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E8C66A] text-lg transition group-hover:bg-[#D97745]"
                    >
                      ↗
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredDestinations.length === 0 && (
            <p className="py-12 text-center text-[#62665E]">
              Belum ada destinasi untuk kategori ini.
            </p>
          )}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="px-5 pb-16 sm:px-8 sm:pb-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-[2rem] bg-[#354F3B] p-8 text-white sm:p-12 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-[#E8C66A]">
              THE WORLD IS WAITING
            </p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Punya destinasi impian?
            </h2>
            <p className="mt-3 leading-7 text-white/75">
              Ceritakan rencana perjalananmu. Yuk, mulai petualangan baru!
            </p>
          </div>

          <a
            href="/contact"
            className="w-fit rounded-full bg-[#E8C66A] px-7 py-4 font-bold text-[#292D28] transition hover:-translate-y-1 hover:bg-white"
          >
            Let's Talk ↗
          </a>
        </div>
      </section>
    </div>
  )
}
