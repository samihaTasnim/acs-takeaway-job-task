import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar"

export default function App() {
  return (
    <div className="bg-gray-800 text-white p-8">
      <Navbar />
      <Header />
      <Homepage/>
    </div>
  );
}