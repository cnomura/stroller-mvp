"use client";
import { useState } from "react";
import Link from "next/link";

const steps = [
  "email",
  "born",
  "usage",
  "priorities",
  "budget",
  "extras",
  "style",
] as const;
type Step = typeof steps[number];

export default function Quiz() {
  const [stepIndex, setStepIndex] = useState(0);
  const step = steps[stepIndex];

  function next() {
    setStepIndex((i) => Math.min(i + 1, steps.length - 1));
  }
  function back() {
    setStepIndex((i) => Math.max(i - 1, 0));
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-6">
      <div className="w-full max-w-md">
        <p className="mb-4 text-sm text-gray-500">Passo {stepIndex + 1} de {steps.length}</p>
        <h2 className="text-xl font-semibold mb-4 capitalize">{step}</h2>
        {/* TODO: substituir por componentes de formulário reais */}
        <div className="h-40 flex items-center justify-center border border-dashed rounded-lg bg-white">
          Conteúdo do formulário ({step})
        </div>
        <div className="mt-6 flex justify-between">
          <button onClick={back} disabled={stepIndex===0} className="px-4 py-2 rounded-lg border disabled:opacity-30">
            Voltar
          </button>
          {stepIndex < steps.length - 1 ? (
            <button onClick={next} className="px-4 py-2 rounded-lg bg-primary text-white">
              Próximo
            </button>
          ) : (
            <Link href="/results" className="px-4 py-2 rounded-lg bg-primary text-white">
              Ver resultados
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
