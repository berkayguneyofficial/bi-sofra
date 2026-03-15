export default function AlgorithmHighlight() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-900 mb-6">Akıllı Altyapı</h2>
        <p className="text-xl text-green-800 mb-12 max-w-3xl mx-auto">bi'sofra yalnızca bir paylaşım platformu değildir. Arka planda çalışan akıllı algoritmalar sayesinde sistem daha verimli çalışır. Platform iki temel algoritma kullanır:</p>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-green-50 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-green-900 mb-4">Food Surplus Prediction Algorithm</h3>
            <p className="text-green-800">Otellerin mutfak verilerini analiz ederek oluşabilecek yemek fazlasını tahmin eder.</p>
          </div>
          <div className="bg-green-50 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-green-900 mb-4">Smart Matching Algorithm</h3>
            <p className="text-green-800">Öğrencileri en yakın ve uygun yemek kaynakları ile eşleştirir.</p>
          </div>
        </div>
        <button onClick={() => document.getElementById('teknoloji')?.scrollIntoView({ behavior: 'smooth' })} className="bg-green-700 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-green-800 transition">Daha Fazlasını Gör</button>
      </div>
    </section>
  );
}
