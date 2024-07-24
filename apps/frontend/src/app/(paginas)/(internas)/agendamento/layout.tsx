import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Barba Brutal - Agendamento",
  description:
    "Faça seu agendamento na barbearia mais Rock N' Roll de São Paulo!",
};

export default function AgendamentoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        {metadata.title && <title>{String(metadata.title)}</title>}
        {metadata.description && (
          <meta name="description" content={metadata.description} />
        )}
      </Head>
      <div>{children}</div>
    </>
  );
}
