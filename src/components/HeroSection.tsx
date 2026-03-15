import { motion } from "motion/react";
import { Soup } from "lucide-react";
export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-6xl font-bold text-green-900 leading-tight mb-6">Bir Şehir, İki Sorun.<br /><span className="text-green-600 font-extrabold">Tek Çözüm</span></h1>
          <p className="text-xl text-green-800 mb-8">Her gün otellerde tonlarca yemek tüketilmeden çöpe gidiyor. Aynı şehirde birçok üniversite öğrencisi uygun bir öğün bulmakta zorlanıyor. bi'sofra bu iki sorunu bir araya getirerek gıda israfını paylaşım kültürüne dönüştürür.</p>
          <div className="flex gap-4">
            <button onClick={() => document.getElementById('ogrenciler-icin')?.scrollIntoView({ behavior: 'smooth' })} className="bg-green-700 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-green-800 transition">Öğrenciler İçin</button>
            <button onClick={() => document.getElementById('oteller-icin')?.scrollIntoView({ behavior: 'smooth' })} className="bg-amber-100 text-green-900 px-8 py-3 rounded-full font-semibold text-lg hover:bg-amber-200 transition">Oteller İçin</button>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-green-100 p-8 rounded-3xl text-green-800">
          <Soup className="w-12 h-12 text-green-600 mb-6" />
          <h2 className="text-3xl font-bold text-green-900 mb-6">Bir Gelenekten İlham</h2>
          <p className="mb-6">bi'sofra fikri, Osmanlı döneminde toplumun ihtiyaç sahiplerine yemek sunan <strong>imarethanelerden</strong> ilham alır. İmarethaneler, yolculara, öğrencilere ve ihtiyaç sahiplerine ücretsiz yemek sunan sosyal kurumlar olarak yüzyıllar boyunca önemli bir dayanışma sistemi oluşturmuştur. bi'sofra bu kültürü modern teknoloji ile yeniden yorumlayarak günümüz şehirlerinde oluşan gıda fazlasını öğrencilerle buluşturmayı amaçlar.</p>
          <h3 className="font-bold mb-2">Amaç:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>gıda israfını azaltmak</li>
            <li>öğrencileri desteklemek</li>
            <li>paylaşım kültürünü büyütmek</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
