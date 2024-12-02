import Footer from "./components/Footer";
import GetVerified from "./components/GetVerified";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowitWorks";
import Introduction from "./components/Introduction";
import Navbar from "./components/Navbar/Navbar";
import VideoSection from "./components/VideoSection";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Introduction />
      <VideoSection />
      <GetVerified />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default App;
