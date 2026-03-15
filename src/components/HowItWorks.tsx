export default function HowItWorks() {
  return (
    <section id="nasil-calisir" className="py-20 px-6 bg-green-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-green-900 mb-12">Nasıl Çalışır?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-sm">
            <h3 className="text-2xl font-bold text-green-900 mb-4">1. Oteller bildirir</h3>
            <p className="text-green-800">Oteller gün sonunda kalan yemek miktarını platforma bildirir.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm">
            <h3 className="text-2xl font-bold text-green-900 mb-4">2. Sistem analiz eder</h3>
            <p className="text-green-800">Platform talebi ve konumu analiz ederek en uygun eşleşmeleri belirler.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm">
            <h3 className="text-2xl font-bold text-green-900 mb-4">3. Yemek paylaşılır</h3>
            <p className="text-green-800">Yemekler belirlenen noktalar üzerinden öğrencilere ulaştırılır.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
