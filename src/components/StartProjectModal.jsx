import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export default function StartProjectModal({ open, onClose }) {
  React.useEffect(()=>{
    function onKey(e){ if(e.key==='Escape') onClose() }
    if(open) window.addEventListener('keydown', onKey)
    return ()=> window.removeEventListener('keydown', onKey)
  },[open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-[100] flex items-center justify-center"
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
            role="dialog" aria-modal="true" aria-labelledby="start-title"
            className="relative mx-4 w-full max-w-3xl rounded-3xl border border-white/15 bg-white/10 p-6 sm:p-8 text-white shadow-2xl backdrop-blur-xl overflow-hidden"
          >
            <div className="pointer-events-none absolute -top-40 -left-40 h-80 w-80 rounded-full bg-[#00D4FF]/20 blur-[120px]" />
            <div className="pointer-events-none absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-[#7B61FF]/20 blur-[120px]" />
            <button onClick={onClose} className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-white/80 hover:text-white">
              <X />
            </button>
            <div className="relative">
              <h3 id="start-title" className="text-2xl sm:text-3xl font-bold">Mulai perjalanan membangun masa depan Anda.</h3>
              <p className="mt-1 text-white/80">Masukkan detail proyek, dan kami akan mengubah visinya menjadi realitas digital.</p>
            </div>
            <form className="relative mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input label="Nama lengkap" placeholder="Nama Lengkap" />
              <Input type="email" label="Email" placeholder="email@domain.com" />
              <Select label="Jenis proyek" options={["Arsitektur","Infrastruktur","Konsultasi"]} />
              <Select label="Estimasi budget" options={["< 250jt","250–750jt","750jt–2M","2–5M","> 5M"]} />
              <Textarea className="sm:col-span-2" label="Deskripsi kebutuhan" placeholder="Ceritakan tujuan, skala, timeline, dan referensi..." />
              <FileUpload className="sm:col-span-2" />
              <div className="sm:col-span-2 mt-2 flex items-center gap-3">
                <button type="submit" className="rounded-2xl bg-gradient-to-tr from-[#00D4FF] to-[#7B61FF] px-6 py-3 font-semibold text-white shadow-[0_12px_36px_rgba(0,212,255,0.3)] hover:translate-y-[-1px] transition">
                  Kirim Brief
                </button>
                <button type="button" className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-white/90 hover:bg-white/10 transition">
                  Jadwalkan Konsultasi
                </button>
                <span className="text-xs text-white/60">Data Anda aman. Kami tidak membagikan ke pihak ketiga.</span>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Field({label, children, className}){
  return (
    <label className={`block ${className||''}`}>
      <div className="mb-2 text-sm text-white/70">{label}</div>
      {children}
    </label>
  )
}

function Input({label, className, ...props}){
  return (
    <Field label={label} className={className}>
      <input {...props} className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder-white/40 outline-none focus:ring-0 focus:border-cyan-300 shadow-[0_0_0_0_rgba(0,0,0,0)] focus:shadow-[0_0_32px_rgba(0,212,255,0.2)] transition" />
    </Field>
  )
}

function Select({label, options, className, ...props}){
  return (
    <Field label={label} className={className}>
      <select {...props} className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none focus:border-cyan-300 focus:shadow-[0_0_32px_rgba(0,212,255,0.2)]">
        <option value="" className="bg-[#0A0A14]">Pilih</option>
        {options.map(o=> <option key={o} value={o} className="bg-[#0A0A14]">{o}</option>)}
      </select>
    </Field>
  )
}

function Textarea({label, className, ...props}){
  return (
    <Field label={label} className={className}>
      <textarea {...props} rows={5} className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-cyan-300 focus:shadow-[0_0_32px_rgba(0,212,255,0.2)]" />
    </Field>
  )
}

function FileUpload({className}){
  return (
    <div className={`rounded-2xl border border-dashed border-white/20 bg-white/5 p-4 text-white/70 ${className||''}`}>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm">Upload file referensi (opsional)</div>
          <div className="text-xs text-white/50">PDF, PNG, JPG, maks 20MB</div>
        </div>
        <button type="button" className="rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-white/90 hover:bg-white/15">Pilih File</button>
      </div>
    </div>
  )
}
