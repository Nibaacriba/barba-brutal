"use client";
import { ForcarUsuario, Pagina } from "@/components";
import { ProvedorAgendamento } from "@/data/contexts";

export default function Layout(props: any) {
  return (
    <ForcarUsuario>
      <ProvedorAgendamento>
        <Pagina>{props.children}</Pagina>
      </ProvedorAgendamento>
    </ForcarUsuario>
  );
}
