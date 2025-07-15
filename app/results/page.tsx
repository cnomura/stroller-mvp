import Link from "next/link";

const mock = [
  { id: 1, name: "Cybex Orfeo", price: "€399", tags: ["Leveza", "Compacto"] },
  { id: 2, name: "Babyzen Yoyo2", price: "€499", tags: ["Viagem", "Leveza"] },
  { id: 3, name: "Bugaboo Bee6", price: "€699", tags: ["Compacto", "Postura"] },
];

export default function Results() {
  return (
    <main className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-2xl font-semibold mb-6">Melhores opções para você</h1>
      <div className="grid gap-4 md:grid-cols-3">
        {mock.map((s) => (
          <div key={s.id} className="rounded-xl bg-white p-4 shadow">
            <div className="aspect-video bg-gray-100 mb-4 rounded-lg" />
            <h2 className="font-medium mb-1">{s.name}</h2>
            <p className="text-primary font-semibold">{s.price}</p>
            <div className="mt-2 flex gap-2 flex-wrap">
              {s.tags.map(t => <span key={t} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">{t}</span>)}
            </div>
            <Link href="#" className="mt-4 inline-block text-sm text-primary hover:underline">Ver lojas →</Link>
          </div>
        ))}
      </div>
    </main>
  );
}
