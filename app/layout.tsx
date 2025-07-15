import "../styles/globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Stroller Advisor",
  description: "Encontre o carrinho ideal para seu bebê.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt">
      <body className="font-sans bg-gray-50 text-[#1F2D3D]">
        {children}
      </body>
    </html>
  );
}
