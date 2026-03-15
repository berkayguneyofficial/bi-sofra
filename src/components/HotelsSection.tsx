import { Trash2, Leaf, Users } from "lucide-react";

export default function HotelsSection() {
  const features = [
    { icon: Trash2, title: "Gıda İsrafını Azaltın", desc: "Her gün oluşan fazla yemekleri çöpe gitmeden değerlendirin." },
    { icon: Leaf, title: "Sürdürülebilirlik Katkısı", desc: "Platform sürdürülebilir turizm ve sosyal sorumluluk hedeflerine katkı sağlar." },
    { icon: Users, title: "Toplumsal Etki", desc: "Yerel üniversite öğrencilerine destek olarak güçlü bir sosyal etki oluşturabilirsiniz." },
  ];
  return (
    <section id="oteller-icin" className="py-20 px-6 bg-green-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-green-900 mb-6">Oteller İçin</h2>
        <p className="text-xl text-green-800 mb-12 max-w-3xl">bi'sofra otellerin mutfaklarında oluşan gıda fazlasını sosyal faydaya dönüştürmelerine yardımcı olur. Platform sayesinde oteller hem gıda israfını azaltabilir hem de yerel öğrencilere destek olabilir.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-green-100">
              <f.icon className="w-10 h-10 text-green-600 mb-6" />
              <h3 className="text-2xl font-bold text-green-900 mb-4">{f.title}</h3>
              <p className="text-green-800">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
