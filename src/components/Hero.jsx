import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero({ onOpenStartProject }) {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#0A0A14]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 h-[60vh] w-[60vh] rounded-full bg-[#7B61FF]/20 blur-[120px]" />
        <div className="absolute -bottom-32 -right-32 h-[60vh] w-[60vh] rounded-full bg-[#00D4FF]/20 blur-[120px]" />
      </div>

      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.7}} className="py-24 md:py-40">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">GaBoot • Web3 Construction</span>
          <h1 className="mt-6 text-5xl md:text-7xl font-extrabold tracking-tight text-white">
            Bangun Masa Depan Ruang Anda.
          </h1>
          <p className="mt-5 text-lg text-white/80 max-w-xl">
            Arsitektur, Infrastruktur, dan Konsultasi ditenagai teknologi Web3 — transparan, efisien, dan terukur.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <button onClick={onOpenStartProject} className="group inline-flex items-center rounded-2xl bg-gradient-to-tr from-[#00D4FF] to-[#7B61FF] px-6 py-3 text-white font-semibold shadow-[0_12px_36px_rgba(0,212,255,0.3)]">
              <span className="transition group-hover:-translate-y-0.5">Mulai Proyek</span>
            </button>
            <a href="#projects" className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-white/85 hover:bg-white/10">Lihat Proyek</a>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0A0A14] to-transparent" />
    </section>
  )
}
