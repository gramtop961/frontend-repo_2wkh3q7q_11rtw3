import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail, Lock, User } from 'lucide-react'

function ModalShell({ open, onClose, title, subtitle, children }){
  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-[90] flex items-center justify-center"
          initial={{opacity:0}}
          animate={{opacity:1}}
          exit={{opacity:0}}
        >
          <div className="absolute inset-0 bg-[#0A0A14]/70 backdrop-blur-md" onClick={onClose} />
          <motion.div
            initial={{opacity:0, scale:1.05, y:12, filter:'blur(6px)'}}
            animate={{opacity:1, scale:1, y:0, filter:'blur(0px)'}}
            exit={{opacity:0, scale:1.02, y:6, filter:'blur(6px)'}}
            transition={{duration:0.35, ease:[0.16,1,0.3,1]}}
            role="dialog" aria-modal="true"
            className="relative mx-4 w-full max-w-md rounded-3xl border border-white/15 bg-white/10 p-6 sm:p-8 text-white shadow-2xl backdrop-blur-xl overflow-hidden"
          >
            <div className="pointer-events-none absolute -top-40 -left-40 h-80 w-80 rounded-full bg-[#00D4FF]/20 blur-[120px]" />
            <div className="pointer-events-none absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-[#7B61FF]/20 blur-[120px]" />
            <button onClick={onClose} className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-white/80 hover:text-white">
              <X />
            </button>
            <div className="relative">
              <h3 className="text-2xl font-bold">{title}</h3>
              <p className="mt-1 text-white/80">{subtitle}</p>
            </div>
            <div className="relative mt-6">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function SignInModal({ open, onClose }){
  return (
    <ModalShell open={open} onClose={onClose} title="Masuk" subtitle="Akses dashboard proyek Anda.">
      <form className="space-y-4">
        <div>
          <label className="mb-2 block text-sm text-white/70">Email</label>
          <div className="flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-3">
            <Mail size={16} className="text-white/60" />
            <input type="email" placeholder="email@domain.com" className="w-full bg-transparent outline-none placeholder-white/40 text-white" />
          </div>
        </div>
        <div>
          <label className="mb-2 block text-sm text-white/70">Password</label>
          <div className="flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-3">
            <Lock size={16} className="text-white/60" />
            <input type="password" placeholder="••••••••" className="w-full bg-transparent outline-none placeholder-white/40 text-white" />
          </div>
        </div>
        <div className="flex items-center justify-between text-sm">
          <a className="text-cyan-300 hover:underline" href="#">Lupa Password?</a>
        </div>
        <button className="w-full rounded-2xl bg-gradient-to-tr from-[#00D4FF] to-[#7B61FF] px-6 py-3 font-semibold text-white shadow-[0_12px_36px_rgba(0,212,255,0.3)]">Masuk</button>
        <div className="text-center text-sm text-white/70">Belum punya akun? <button type="button" className="text-cyan-300 hover:underline">Daftar</button></div>
      </form>
    </ModalShell>
  )
}

export function SignUpModal({ open, onClose }){
  return (
    <ModalShell open={open} onClose={onClose} title="Daftar" subtitle="Buat akun untuk kolaborasi dan update real-time.">
      <form className="space-y-4">
        <div>
          <label className="mb-2 block text-sm text-white/70">Nama lengkap</label>
          <div className="flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-3">
            <User size={16} className="text-white/60" />
            <input placeholder="Nama Lengkap" className="w-full bg-transparent outline-none placeholder-white/40 text-white" />
          </div>
        </div>
        <div>
          <label className="mb-2 block text-sm text-white/70">Email</label>
          <div className="flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-3">
            <Mail size={16} className="text-white/60" />
            <input type="email" placeholder="email@domain.com" className="w-full bg-transparent outline-none placeholder-white/40 text-white" />
          </div>
        </div>
        <div>
          <label className="mb-2 block text-sm text-white/70">Password</label>
          <div className="flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-3">
            <Lock size={16} className="text-white/60" />
            <input type="password" placeholder="Minimal 8 karakter" className="w-full bg-transparent outline-none placeholder-white/40 text-white" />
          </div>
        </div>
        <div>
          <label className="mb-2 block text-sm text-white/70">Konfirmasi Password</label>
          <div className="flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-3">
            <Lock size={16} className="text-white/60" />
            <input type="password" placeholder="Ulangi password" className="w-full bg-transparent outline-none placeholder-white/40 text-white" />
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-white/70">
          <input id="terms" type="checkbox" className="h-4 w-4 rounded border-white/20 bg-white/10" />
          <label htmlFor="terms">Saya setuju dengan Syarat & Ketentuan</label>
        </div>
        <button className="w-full rounded-2xl bg-gradient-to-tr from-[#00D4FF] to-[#7B61FF] px-6 py-3 font-semibold text-white shadow-[0_12px_36px_rgba(0,212,255,0.3)]">Buat Akun</button>
        <div className="text-center text-sm text-white/70">Sudah punya akun? <button type="button" className="text-cyan-300 hover:underline">Masuk</button></div>
      </form>
    </ModalShell>
  )
}
