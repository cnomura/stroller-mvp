import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-medium mb-6">Encontre o carrinho ideal para seu bebê em 3 passos</h1>
      <Link href="/quiz" className="rounded-xl bg-primary px-6 py-3 text-white font-medium hover:bg-primary-dark transition">
        Começar recomendações
      </Link>
      <footer className="mt-8 text-sm text-gray-500">
        <Link href="/privacidade" className="mr-4 hover:underline">Privacidade</Link>
        <Link href="/termos" className="hover:underline">Termos</Link>
      </footer>
    </main>
  );
}
