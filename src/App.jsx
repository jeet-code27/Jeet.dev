import { Routes, Route } from "react-router-dom"
import BottomNav from "./components/BottomNav"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Work from "./components/Work"
import About from "./components/About"
import Contact from "./components/Contact"
import FloatingContact from "./components/FloatingContact"
import { Analytics } from "@vercel/analytics/react"
import AmbujaProject from "./components/projects/AmbujaProject"
import BoneAndJointsProject from "./components/projects/BoneAndJointsProject"
import DSConceptProject from "./components/projects/DSConceptProject"
import MorganicsProject from "./components/projects/MorganicsProject"
import SeocialMediaProject from "./components/projects/SeocialMediaProject"
import HotelWebsiteProject from "./components/projects/HotelWebsiteProject"
import PortfolioSection from "./components/PortfolioSection"
import PortfolioWebsiteProject from "./components/projects/PortfolioWebsiteProject"
import DrMayurGoyal from "./components/projects/DrMayurGoyal"
import HolisticHealthProject from "./components/projects/HolisticHealthProject"

// Import each project component
// import AmbujaProject from "./components/projects/AmbujaProject"
// import ProjectTwo from "./components/projects/ProjectTwo"
// import ProjectThree from "./components/projects/ProjectThree"
// Import more project components as needed

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
          
          {/* Individual project routes */}
          <Route path="/work/ambujaproject" element={<AmbujaProject />} />
          <Route path="/work/boneadnjoitnsproject" element={<BoneAndJointsProject />} />
          <Route path="/work/dsconceptproject" element={<DSConceptProject />} />
          <Route path="/work/morganicsproject" element={<MorganicsProject />} />
          <Route path="/work/seocialmediaproject" element={<SeocialMediaProject />} />
          <Route path="/work/hotelproject" element={<HotelWebsiteProject />} />
          <Route path="/work/portfolioproject" element={<PortfolioWebsiteProject />} />
          <Route path="/work/drmayurgoyalproject" element={<DrMayurGoyal />} />
          <Route path="/work/holistichealthproject" element={<HolisticHealthProject />} />



          {/* Add more project routes as needed */}
        </Routes>
      </main>
      <BottomNav />
     
      <Footer />
      <Analytics />
    </div>
  )
}

export default App