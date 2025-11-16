import React from 'react'
import { motion } from 'framer-motion'
import { Building2, ScanLine, Atom, BadgeCheck } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="relative bg-[#0A0A14] text-white py-24">
      <div className="absolute inset-0 -z-10 opacity-40" aria-hidden>
        <div className="absolute top-1/4 left-10 h-72 w-72 rounded-full bg-[#FF4D8D]/20 blur-[120px]" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
        <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}}>
          <h2 className="text-3xl md:text-5xl font-bold">Arsitektur + Web3 = Masa Depan Pembangunan</h2>
          <p className="mt-4 text-white/80">Kami merancang ruang yang cerdas. Dari konsep ke konstruksi, data Anda selaras on-chain untuk transparansi end-to-end. Handover tanpa batas, dokumentasi presisi, dan governance yang dapat diaudit.</p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              ['50+ Proyek','Skala medium hingga nasional'],
              ['3 Negara','Operasi lintas lokasi'],
              ['Zero Downtime','Handover presisi BIM'],
              ['On-chain','Traceability transparan'],
            ].map(([t,s],i)=> (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-xl font-semibold">{t}</div>
                <div className="text-white/70 text-sm">{s}</div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6, delay:0.1}} className="relative">
          <div className="aspect-video rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/0 backdrop-blur p-6">
            <div className="h-full w-full rounded-xl bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00D4FF]/20 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export function Services() {
  const items = [
    {icon: Building2, title:'Arsitektur', desc:'Desain visioner berbasis data dan simulasi.'},
    {icon: ScanLine, title:'Infrastruktur', desc:'Konstruksi presisi dengan supply chain traceable.'},
    {icon: Atom, title:'Konsultasi', desc:'Strategi pembangunan berkelanjutan + on-chain.'},
  ]
  return (
    <section id="services" className="relative bg-[#0A0A14] text-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl md:text-5xl font-bold">Capabilities</motion.h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map(({icon:Icon,title,desc},i)=> (
            <motion.div key={i} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay:i*0.05}}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur relative overflow-hidden">
              <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-[#7B61FF]/20 blur-2xl" />
              <Icon className="text-cyan-300" />
              <div className="mt-4 text-xl font-semibold">{title}</div>
              <div className="text-white/70">{desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Projects() {
  const cards = Array.from({length:6}).map((_,i)=>({
    title:`Proyek ${i+1}`,
    sector: i%3===0? 'Arsitektur': i%3===1? 'Infrastruktur': 'Konsultasi',
  }))
  return (
    <section id="projects" className="relative bg-[#0A0A14] text-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl md:text-5xl font-bold">Project Showcase</motion.h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c,i)=> (
            <motion.div key={i} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay:i*0.05}}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
              <div className="aspect-[4/3] bg-gradient-to-br from-white/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="absolute bottom-0 p-4">
                <div className="text-lg font-semibold drop-shadow">{c.title}</div>
                <div className="text-white/80 text-sm">{c.sector}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact({ onOpenStartProject }) {
  return (
    <section id="contact" className="relative bg-[#0A0A14] text-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-3xl font-bold">Siap membangun masa depan Anda?</h3>
            <p className="mt-2 text-white/80">Bawa visi Anda — kami realisasikan dalam realitas digital.</p>
          </div>
          <div className="flex items-center md:justify-end">
            <button onClick={onOpenStartProject} className="rounded-2xl bg-gradient-to-tr from-[#00D4FF] to-[#7B61FF] px-6 py-3 font-semibold text-white shadow-[0_12px_36px_rgba(0,212,255,0.3)]">Mulai Proyek</button>
          </div>
        </div>
      </div>
    </section>
  )
}
