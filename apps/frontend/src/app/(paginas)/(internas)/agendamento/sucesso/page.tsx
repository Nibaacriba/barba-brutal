"use client";

import { AgendadoComSucesso, Cabecalho } from "@/components";

export default function PaginaAgendamento() {
  return (
    <div className="flex flex-col bg-zinc-900">
      <Cabecalho
        titulo="Agendamento de Serviços"
        descricao="Seu horário está garantido e será um prazer te atender!"
      />
      <div className="container flex flex-col justify-around items-center py-10 gap-1">
        <AgendadoComSucesso />
      </div>
    </div>
  );
}
