"use client";

import { ProvedorSessao, ProvedorUsuario } from "@/data/contexts";

export default function Layout({ children }: any) {
  return (
    <ProvedorSessao>
      <ProvedorUsuario>{children}</ProvedorUsuario>
    </ProvedorSessao>
  );
}
