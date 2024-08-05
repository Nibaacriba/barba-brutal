"use client";
import Image from "next/image";
import Link from "next/link";
import MenuSuperior from "@/components/shared/MenuSuperior";
import { twMerge } from "tailwind-merge";

export default function TituloSlogan() {
  return (
    <div className="py-10 relative h-[700px]">
      <Image
        src="/banners/principal.webp"
        fill
        alt="Barbearia"
        className="object-cover"
      />
      <div
        className={twMerge(
          "absolute top-0 left-0 w-full h-full",
          "bg-black/80  from-black/30 via-black/90 to-black/30",
          "flex flex-col items-center",
          "md:bg-transparent md:bg-gradient-to-r"
        )}
      >
        <MenuSuperior />
        <div
          className={twMerge(
            "container gap-5 z-50",
            "flex-1 flex flex-col justify-center items-center"
          )}
        >
          <h1 className="flex flex-col items-center">
            <span
              className={twMerge(
                "text-2xl font-thin tracking-wider",
                "sm:text-3xl",
                "md:text-4xl",
                "lg:text-5xl"
              )}
            >
              Transformações
            </span>
            <span
              className={twMerge(
                "text-gradient text-5xl font-black pb-2",
                "sm:text-6xl",
                "md:text-7xl",
                "lg:text-8xl"
              )}
            >
              Lendárias
            </span>
          </h1>
          <p
            className={twMerge(
              "w-96 text-center text-zinc-400 text-base font-extralight",
              "sm:text-lg"
            )}
          >
            🤘 Seu estilo é o nosso rock! 🤘
          </p>
          <Link
            href="/agendamento"
            className={twMerge(
              "py-2 px-4 rounded-md",
              "text-white font-semibold text-base",
              "bg-gradient-to-r from-green-500 to-green-600 ",
              "hover:from-green-600 hover:to-green-700",
              "md:text-lg"
            )}
          >
            Agendar Agora
          </Link>
        </div>
      </div>
    </div>
  );
}
