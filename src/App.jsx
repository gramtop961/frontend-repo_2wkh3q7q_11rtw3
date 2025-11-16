import React from 'react'
import Hero from './components/Hero'
import Header from './components/Header'
import { About, Projects, Services, Contact } from './components/Sections'
import StartProjectModal from './components/StartProjectModal'
import { SignInModal, SignUpModal } from './components/AuthModals'

function App() {
  const [startOpen, setStartOpen] = React.useState(false)
  const [auth, setAuth] = React.useState(null) // 'signin' | 'signup' | null

  const openAuth = (type)=> setAuth(type)
  const closeAuth = ()=> setAuth(null)

  return (
    <div className="min-h-screen bg-[#0A0A14] text-white">
      <Header onOpenStartProject={()=>setStartOpen(true)} onOpenAuth={openAuth} />
      <main>
        <Hero onOpenStartProject={()=>setStartOpen(true)} />
        <About />
        <Projects />
        <Services />
        <Contact onOpenStartProject={()=>setStartOpen(true)} />
      </main>
      <StartProjectModal open={startOpen} onClose={()=>setStartOpen(false)} />
      <SignInModal open={auth==='signin'} onClose={closeAuth} />
      <SignUpModal open={auth==='signup'} onClose={closeAuth} />
      <footer className="bg-[#0A0A14] text-white/60 py-10 text-center border-t border-white/10">© {new Date().getFullYear()} GaBoot. All rights reserved.</footer>
    </div>
  )
}

export default App
