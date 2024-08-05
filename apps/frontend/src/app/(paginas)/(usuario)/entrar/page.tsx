"use client";

import { FormUsuario } from "@/components";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <FormUsuario />
    </Suspense>
  );
}
