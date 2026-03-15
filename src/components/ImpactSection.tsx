import { motion } from "motion/react";
export default function ImpactSection() {
  return (
    <section className="py-20 px-6 bg-green-900 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Her Paylaşılan Öğün Bir Fark Yaratır</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { label: "Kurtarılan Yemek", value: "10,000+" },
            { label: "Desteklenen Öğrenci", value: "5,000+" },
            { label: "Katılan Otel", value: "50+" },
            { label: "Azaltılan İsraf", value: "5 ton" },
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
              <div className="text-5xl font-bold text-green-400 mb-2">{item.value}</div>
              <div className="text-green-100">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
