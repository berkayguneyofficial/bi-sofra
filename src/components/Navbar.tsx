import { motion } from "motion/react";
export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-green-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-green-800">bi'sofra</div>
        <div className="flex gap-6 text-green-900 font-medium">
          <a href="#nedir">bi'sofra Nedir?</a>
          <a href="#nasil-calisir">Nasıl Çalışır?</a>
          <a href="#teknoloji">Teknoloji</a>
        </div>
        <div className="flex gap-3">
          <button onClick={() => document.getElementById('ogrenciler-icin')?.scrollIntoView({ behavior: 'smooth' })} className="bg-green-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-800 transition">Öğrenciler İçin</button>
          <button onClick={() => document.getElementById('oteller-icin')?.scrollIntoView({ behavior: 'smooth' })} className="bg-amber-100 text-green-900 px-6 py-2 rounded-full font-semibold hover:bg-amber-200 transition">Oteller İçin</button>
        </div>
      </div>
    </nav>
  );
}
