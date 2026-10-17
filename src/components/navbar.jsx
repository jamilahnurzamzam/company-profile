import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Destinations', to: '/portfolio' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[#E5E0D4] bg-[#F7F2E8]/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        {/* LOGO */}
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-2"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#354F3B] text-xl font-extrabold text-white">
            J
          </span>

          <span className="text-xl font-extrabold tracking-tight text-[#292D28]">
            Jela<span className="text-[#D97745]">jah</span>
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `text-sm font-semibold transition ${
                  isActive
                    ? 'text-[#D97745]'
                    : 'text-[#62665E] hover:text-[#354F3B]'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* DESKTOP CTA */}
        <Link
          to="/contact"
          className="hidden rounded-full bg-[#354F3B] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#263B2C] md:inline-flex"
        >
          Let's Travel ↗
        </Link>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={menuOpen}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#E5E0D4] bg-white text-xl text-[#354F3B] md:hidden"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="border-t border-[#E5E0D4] bg-[#F7F2E8] px-5 pb-5 pt-3 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 font-semibold transition ${
                    isActive
                      ? 'bg-white text-[#D97745]'
                      : 'text-[#354F3B] hover:bg-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
