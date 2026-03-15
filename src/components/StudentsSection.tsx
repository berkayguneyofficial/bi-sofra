import { motion } from "motion/react";
import { MapPin, Bell, ShieldCheck } from "lucide-react";

export default function StudentsSection() {
  const features = [
    { icon: MapPin, title: "Yakındaki Yemek Noktaları", desc: "Platform, bulunduğun konuma göre sana en yakın yemek noktalarını gösterir." },
    { icon: Bell, title: "Bildirim Sistemi", desc: "Yeni yemek paylaşımları olduğunda anında haberdar olabilirsin." },
    { icon: ShieldCheck, title: "Düzenli ve Güvenli Sistem", desc: "Platform, yemek paylaşımının düzenli ve etik şekilde yapılmasını sağlar." },
  ];
  return (
    <section id="ogrenciler-icin" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-green-900 mb-6">Öğrenciler İçin</h2>
        <p className="text-xl text-green-800 mb-12 max-w-3xl">bi'sofra, üniversite öğrencilerinin şehirlerinde oluşan gıda fazlasına erişmesini sağlayan ücretsiz bir dayanışma platformudur. Students can use the platform to discover nearby food opportunities in a simple and respectful system.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div key={i} whileHover={{ y: -5 }} className="bg-white p-8 rounded-3xl shadow-sm border border-green-100">
              <f.icon className="w-10 h-10 text-green-600 mb-6" />
              <h3 className="text-2xl font-bold text-green-900 mb-4">{f.title}</h3>
              <p className="text-green-800">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
