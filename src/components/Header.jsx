import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Menu, X, LogIn, UserPlus } from 'lucide-react'

export default function Header({ onOpenStartProject, onOpenAuth }) {
  const [open, setOpen] = React.useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5">
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            <a href="#hero" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-cyan-400 to-fuchsia-500 shadow-[0_0_24px_rgba(0,212,255,0.35)]" />
              <span className="text-white font-semibold tracking-wide">GaBoot</span>
            </a>
            <nav className="hidden md:flex items-center gap-8 text-sm">
              <a href="#about" className="text-white/80 hover:text-white transition">About</a>
              <a href="#projects" className="text-white/80 hover:text-white transition">Projects</a>
              <a href="#services" className="text-white/80 hover:text-white transition">Services</a>
              <a href="#contact" className="text-white/80 hover:text-white transition">Contact</a>
            </nav>
            <div className="hidden md:flex items-center gap-3">
              <button onClick={() => onOpenAuth('signin')} className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white/90 hover:bg-white/10 transition">
                <LogIn size={16} /> <span>Masuk</span>
              </button>
              <button onClick={() => onOpenAuth('signup')} className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-cyan-300 hover:bg-cyan-400/20 transition">
                <UserPlus size={16} /> <span>Daftar</span>
              </button>
              <button onClick={onOpenStartProject} className="group inline-flex items-center rounded-xl bg-gradient-to-tr from-[#00D4FF] to-[#7B61FF] px-4 py-2 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(0,212,255,0.25)]">
                <span className="transition group-hover:translate-y-[-1px]">Mulai Proyek</span>
              </button>
            </div>
            <button onClick={() => setOpen(true)} className="md:hidden text-white/80 hover:text-white">
              <Menu />
            </button>
          </div>
          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-4 space-y-3">
              <a href="#about" className="block text-white/80 hover:text-white">About</a>
              <a href="#projects" className="block text-white/80 hover:text-white">Projects</a>
              <a href="#services" className="block text-white/80 hover:text-white">Services</a>
              <a href="#contact" className="block text-white/80 hover:text-white">Contact</a>
              <div className="flex items-center gap-3 pt-2">
                <button onClick={() => onOpenAuth('signin')} className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white/90">Masuk</button>
                <button onClick={() => onOpenAuth('signup')} className="flex-1 rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-cyan-300">Daftar</button>
              </div>
              <button onClick={onOpenStartProject} className="w-full rounded-xl bg-gradient-to-tr from-[#00D4FF] to-[#7B61FF] px-4 py-2 font-semibold text-white">Mulai Proyek</button>
              <button onClick={() => setOpen(false)} className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white/80">
                <div className="mx-auto flex items-center justify-center gap-2"><X size={16}/> Tutup</div>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
