import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { createRedisClient } from "@/lib/redis";
import { Eye } from "lucide-react";

export const dynamic = "force-dynamic";
export default async function ProjectsPage() {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projets
          </h2>
          <p className="mt-4 text-zinc-400">
            Voici une sélection de projets sur lesquels j'ai travaillé (très
            souvent en groupe), mettant en avant mes compétences.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          <Card>
            <article className="relative w-full h-full p-4 md:p-8">
              <div className="flex items-center justify-between gap-2">
                <div className="text-xs text-zinc-100">
                  <time dateTime={new Date("05/07/2026").toISOString()}>
                    {Intl.DateTimeFormat(undefined, {
                      dateStyle: "medium",
                    }).format(new Date("05/07/2026"))}
                  </time>
                </div>
              </div>
              <h2
                id="featured-post"
                className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
              >
                Mon Portfolio
              </h2>
              <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                Un recueil de tous mes projets, mettant en avant mes compétences
                et réalisations dans le domaine du développement web.
              </p>
            </article>
          </Card>

          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
            <Card>
              <a
                href="https://www.go-match.fr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <article className="relative w-full h-full p-4 md:p-8">
                  <img
                    src="/logo-go-match.png"
                    alt="Logo GoMatch"
                    className="absolute top-4 right-4 h-12 w-auto rounded-full bg-white/10 p-2"
                  />
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-xs text-zinc-100">
                      <time dateTime={new Date("05/07/2026").toISOString()}>
                        {Intl.DateTimeFormat(undefined, {
                          dateStyle: "medium",
                        }).format(new Date("05/07/2026"))}
                      </time>
                    </div>
                  </div>
                  <h2
                    id="featured-post"
                    className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                  >
                    GoMatch!
                  </h2>
                  <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                    Une application de mise en relation entre joueurs de
                    babyfoot afin de jouer ensemble et de grimper dans le
                    classement. Cette application a été développée durant les
                    YDAYS Ynov en M2 Développement Web.
                  </p>
                </article>
              </a>
            </Card>
          </div>
        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          <div className="grid grid-cols-1 gap-4">
            <Card>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                    <time dateTime={new Date("05/07/2026").toISOString()}>
                      {Intl.DateTimeFormat(undefined, {
                        dateStyle: "medium",
                      }).format(new Date("05/07/2026"))}
                    </time>
                  </div>
                </div>
                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  Qwizzy
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  Projet WebServices développé en M2 Développement Web à Ynov.
                  Si vous êtes curieux d'en savoir plus et de tester
                  l'application pour vous-même, vous pouvez consultez ces liens
                  :
                  <ul className="list-disc list-inside mt-2">
                    <li>
                      <a
                        href="https://github.com/L1nkiZ/Qwizzy_Env"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        Documentation du projet Qwizzy
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/L1nkiZ/Qwizzy_Front"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        Code source Frontend sur GitHub
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/L1nkiZ/Qwizzy_Back"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        Code source Backend sur GitHub
                      </a>
                    </li>
                  </ul>
                </p>
              </article>
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <Card>
              <a
                href="https://sallemate.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <article className="relative w-full h-full p-4 md:p-8">
                  <img
                    src="/sallemate-logo.png"
                    alt="Logo Sallemate"
                    className="absolute top-4 right-4 h-12 w-auto rounded-full bg-white/10 p-2"
                  />
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-xs text-zinc-100">
                      <time dateTime={new Date("05/07/2026").toISOString()}>
                        {Intl.DateTimeFormat(undefined, {
                          dateStyle: "medium",
                        }).format(new Date("05/07/2026"))}
                      </time>
                    </div>
                  </div>
                  <h2
                    id="featured-post"
                    className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                  >
                    Sallemate
                  </h2>
                  <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                    Application de réservation de salles. Projet réalisé pendant
                    le M2 Développement Web à Ynov. Le site est encore en ligne
                    mais ne fonctionne plus, cependant vous pouvez consulter le
                    code source sur GitHub :
                    <li>
                      <a
                        href="https://gitlab.com/sallematetana"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        Code source sur GitLab
                      </a>
                    </li>
                  </p>
                </article>
              </a>
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-4"></div>
        </div>
      </div>
    </div>
  );
}
