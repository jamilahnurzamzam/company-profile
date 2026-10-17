import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    topic: 'Rekomendasi destinasi',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
    setSubmitted(false)
  }

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-[#F7F2E8] text-[#292D28]">
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 md:py-24">
        {/* Informasi kontak */}
        <div>
          <p className="inline-block rounded-full bg-[#E8C66A]/40 px-4 py-2 text-sm font-bold text-[#354F3B]">
            LET'S TALK 💬
          </p>

          <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl">
            Punya rencana
            <span className="text-[#D97745]"> jalan-jalan?</span>
          </h1>

          <p className="mt-6 max-w-lg leading-8 text-[#62665E]">
            Ceritakan rencana atau pertanyaanmu kepada kami. Kami senang
            membantu kamu menemukan inspirasi untuk petualangan berikutnya.
          </p>

          <div className="mt-10 space-y-5">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-xl">
                ✉️
              </span>
              <div>
                <h2 className="font-bold">Email</h2>
                <p className="mt-1 text-sm text-[#62665E]">
                  Halo melalui formulir di samping
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-xl">
                🧭
              </span>
              <div>
                <h2 className="font-bold">Lokasi</h2>
                <p className="mt-1 text-sm text-[#62665E]">
                  Berawal dari Indonesia, untuk para penjelajah.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-3xl bg-[#354F3B] p-6 text-white">
            <p className="text-sm font-semibold text-[#E8C66A]">
              JELAJAH REMINDER
            </p>
            <p className="mt-2 text-xl font-bold">
              Explore More, Worry Less.
            </p>
            <p className="mt-2 text-sm leading-6 text-white/75">
              Dunia terlalu luas untuk hanya berdiam di satu tempat.
            </p>
          </div>
        </div>

        {/* Formulir */}
        <form
          onSubmit={handleSubmit}
          className="rounded-[2rem] border border-[#E5E0D4] bg-white p-6 shadow-sm sm:p-9"
        >
          <h2 className="text-2xl font-extrabold">Kirim pesanmu</h2>
          <p className="mt-2 text-sm leading-6 text-[#62665E]">
            Isi formulir berikut agar kami tahu apa yang ingin kamu tanyakan.
          </p>

          <div className="mt-7 space-y-5">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-bold">
                Nama lengkap
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Masukkan namamu"
                required
                className="w-full rounded-xl border border-[#E5E0D4] bg-[#F7F2E8]/50 px-4 py-3 outline-none transition focus:border-[#354F3B] focus:ring-2 focus:ring-[#354F3B]/10"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-bold">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="nama@email.com"
                required
                className="w-full rounded-xl border border-[#E5E0D4] bg-[#F7F2E8]/50 px-4 py-3 outline-none transition focus:border-[#354F3B] focus:ring-2 focus:ring-[#354F3B]/10"
              />
            </div>

            <div>
              <label htmlFor="topic" className="mb-2 block text-sm font-bold">
                Topik pesan
              </label>
              <select
                id="topic"
                name="topic"
                value={form.topic}
                onChange={handleChange}
                className="w-full rounded-xl border border-[#E5E0D4] bg-[#F7F2E8]/50 px-4 py-3 outline-none focus:border-[#354F3B]"
              >
                <option>Rekomendasi destinasi</option>
                <option>Informasi perjalanan</option>
                <option>Saran dan masukan</option>
                <option>Lainnya</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-bold"
              >
                Pesan
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Ceritakan apa yang ingin kamu tanyakan..."
                rows="4"
                required
                className="w-full resize-y rounded-xl border border-[#E5E0D4] bg-[#F7F2E8]/50 px-4 py-3 outline-none transition focus:border-[#354F3B] focus:ring-2 focus:ring-[#354F3B]/10"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-[#354F3B] px-6 py-4 font-bold text-white transition hover:bg-[#263B2C]"
            >
              Kirim Pesan ↗
            </button>

            {submitted && (
              <div
                role="status"
                className="rounded-xl bg-[#E8F0E5] p-4 text-sm leading-6 text-[#354F3B]"
              >
                <p className="font-bold">Pesan berhasil disiapkan! 🌿</p>
                <p className="mt-1">
                  Hai, {form.name}! Formulir berhasil divalidasi.
                </p>
              </div>
            )}
          </div>
        </form>
      </section>
    </div>
  )
}
