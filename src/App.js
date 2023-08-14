import Footer from "./components/Footer";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar"

export default function App() {
  return (
    <div className="bg-gray-800 text-white p-8 scroll-smooth">
      <Navbar />
      <Header />
      <Homepage/>
      <Footer/>
    </div>
  );
}