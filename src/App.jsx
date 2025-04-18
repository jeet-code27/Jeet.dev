import { Routes, Route } from "react-router-dom"
import BottomNav from "./components/BottomNav"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Work from "./components/Work"
import About from "./components/About"
import Contact from "./components/Contact"
import FloatingContact from "./components/FloatingContact"
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className="min-h-screen">
      <main className="pb-24">
        <FloatingContact/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <BottomNav />
     
      <Footer />
      <Analytics />
    </div>
  )
}

export default App