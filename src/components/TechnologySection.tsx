export default function TechnologySection() {
  return (
    <section id="teknoloji" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-green-900 mb-12">Akıllı Gıda Paylaşım Altyapısı</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-green-50 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-green-900 mb-4">Food Surplus Prediction Algorithm</h3>
            <p className="text-green-800">Oteller doluluk oranı, mutfak üretim verileri, etkinlik bilgileri ve tahmini yemek üretimi verilerini sisteme girer. Sistem bu verileri analiz ederek gelecek günlerde oluşabilecek yemek fazlasını tahmin eder.</p>
          </div>
          <div className="bg-green-50 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-green-900 mb-4">Smart Matching Algorithm</h3>
            <p className="text-green-800">Platform öğrencileri en uygun yemek kaynakları ile eşleştirir. Algoritma mesafe, yemek miktarı, talep yoğunluğu ve zaman faktörlerini değerlendirerek yemeklerin hızlı ve verimli şekilde dağıtılmasını sağlar.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
