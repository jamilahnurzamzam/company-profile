import { Link } from 'react-router-dom'

const services = [
  {
    number: '01',
    icon: '🗺️',
    title: 'Panduan Destinasi',
    description:
      'Temukan informasi tempat wisata, aktivitas seru, dan hal menarik yang bisa kamu lakukan di berbagai daerah.',
    tag: 'Explore places',
  },
  {
    number: '02',
    icon: '🧳',
    title: 'Rencana Perjalanan',
    description:
      'Susun gambaran perjalananmu dengan lebih terarah, mulai dari destinasi yang ingin dikunjungi hingga aktivitas pilihan.',
    tag: 'Plan your trip',
  },
  {
    number: '03',
    icon: '🌿',
    title: 'Inspirasi Liburan',
    description:
      'Dapatkan ide liburan sesuai suasana yang kamu cari, mulai dari petualangan alam hingga wisata budaya.',
    tag: 'Find inspiration',
  },
]

export default function Services() {
  return (
    <div className="min-h-screen bg-[#F7F2E8] text-[#292D28]">
      {/* Header */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24">
        <p className="inline-block rounded-full bg-[#E8C66A]/40 px-4 py-2 text-sm font-bold text-[#354F3B]">
          APA YANG KAMI TAWARKAN?
        </p>

        <div className="mt-5 grid gap-6 md:grid-cols-2 md:items-end">
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
            Biar kami bantu,
            <span className="text-[#D97745]"> kamu tinggal jalan!</span>
          </h1>

          <p className="max-w-xl leading-8 text-[#62665E] md:justify-self-end">
            Dari mencari inspirasi sampai menyusun rencana, Jelajah hadir
            untuk membuat persiapan perjalanan terasa lebih sederhana.
          </p>
        </div>
      </section>

      {/* Service cards */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="group rounded-[2rem] border border-[#E5E0D4] bg-white p-7 transition duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F7F2E8] text-3xl transition group-hover:bg-[#E8C66A]/40">
                  {service.icon}
                </span>
                <span className="text-sm font-bold text-[#B6B3A8]">
                  {service.number}
                </span>
              </div>

              <p className="mt-8 text-xs font-bold uppercase tracking-widest text-[#D97745]">
                {service.tag}
              </p>

              <h2 className="mt-3 text-2xl font-extrabold">
                {service.title}
              </h2>

              <p className="mt-4 leading-7 text-[#62665E]">
                {service.description}
              </p>

              <div className="mt-7 h-1 w-12 rounded-full bg-[#E8C66A] transition-all group-hover:w-20" />
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-16 sm:px-8 md:pb-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-[2rem] bg-[#354F3B] p-8 text-white sm:p-12 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-bold text-[#E8C66A]">YOUR NEXT ADVENTURE</p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Petualanganmu menunggu!
            </h2>
            <p className="mt-3 max-w-xl leading-7 text-white/80">
              Punya pertanyaan atau ingin tahu lebih lanjut? Kami siap
              membantu perjalananmu dimulai.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#E8C66A] px-6 py-3 font-bold text-[#292D28] transition hover:bg-[#f1d783]"
          >
            Hubungi Kami ↗
          </Link>
        </div>
      </section>
    </div>
  )
}
