import { Link } from 'react-router-dom'

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Destinations', to: '/portfolio' },
  { label: 'Contact', to: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#292D28] text-white">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 md:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E8C66A] text-xl font-extrabold text-[#354F3B]">
                J
              </span>
              <span className="text-2xl font-extrabold">
                Jela<span className="text-[#D97745]">jah</span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm leading-7 text-white/65">
              Teman perjalananmu untuk menemukan tempat baru, pengalaman
              seru, dan cerita yang tak terlupakan.
            </p>

            <p className="mt-4 font-semibold text-[#E8C66A]">
              Explore More, Worry Less.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="text-lg font-bold">Jelajahi</h2>
            <ul className="mt-5 space-y-3">
              {footerLinks.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-white/65 transition hover:text-[#E8C66A]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h2 className="text-lg font-bold">Petualangan berikutnya?</h2>
            <p className="mt-4 leading-7 text-white/65">
              Temukan inspirasi perjalananmu dan mulai jelajahi keindahan
              Indonesia bersama Jelajah.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex rounded-full bg-[#E8C66A] px-5 py-3 font-bold text-[#292D28] transition hover:bg-[#f1d783]"
            >
              Hubungi Kami ↗
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-6">
          <div className="flex flex-col gap-3 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Jelajah. All rights reserved.
            </p>
            <p>Dibuat dengan ☀️ untuk para penjelajah.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
