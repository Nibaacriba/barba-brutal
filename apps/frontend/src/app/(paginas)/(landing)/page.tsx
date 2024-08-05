"use client";

import {
  ContainerComBackground,
  NossosClientes,
  NossosProfissionais,
  NossosServicos,
  TituloSlogan,
} from "@/components";

export default function Landing() {
  return (
    <div>
      <TituloSlogan />
      <ContainerComBackground imagem="/banners/servicos.webp">
        <NossosServicos />
      </ContainerComBackground>
      <ContainerComBackground imagem="/banners/profissionais.webp">
        <NossosProfissionais />
      </ContainerComBackground>
      <ContainerComBackground imagem="/banners/clientes.webp">
        <NossosClientes />
      </ContainerComBackground>
    </div>
  );
}
