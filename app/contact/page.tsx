"use client";
import {
  Github,
  Mail,
  Twitter,
  Calendar,
  MapPin,
  FileText,
} from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

export default function Contact() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container px-4 mx-auto py-20">
        {/* Informations Personnelles */}
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-white mb-8">
            À propos de moi
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 backdrop-blur">
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="w-5 h-5 text-zinc-400" />
                <span className="text-zinc-400">Date de naissance</span>
              </div>
              <p className="text-white text-lg">7 novembre 2003</p>
            </div>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 backdrop-blur">
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="w-5 h-5 text-zinc-400" />
                <span className="text-zinc-400">Localisation</span>
              </div>
              <p className="text-white text-lg">Strasbourg</p>
            </div>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 backdrop-blur">
              <div className="flex items-center gap-3 mb-2">
                <FileText className="w-5 h-5 text-zinc-400" />
                <span className="text-zinc-400">Permis</span>
              </div>
              <p className="text-white text-lg">Permis B</p>
            </div>
          </div>
        </div>

        {/* Timeline Parcours */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-white mb-12">Parcours</h2>
          <div className="space-y-2">
            {/* Mastère */}
            <div className="flex gap-6 relative">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-zinc-400 rounded-full border-4 border-zinc-900"></div>
                <div className="w-1 h-48 bg-zinc-800 my-2"></div>
              </div>
              <div className="pb-8">
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 backdrop-blur">
                  <h3 className="text-xl font-bold text-white mb-1">
                    Mastère Expert en Développement Web FullStack
                  </h3>
                  <p className="text-zinc-400 mb-3">Strasbourg Ynov Campus</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-sm bg-zinc-800/50 text-zinc-300 px-3 py-1 rounded">
                      2024 - 2026
                    </span>
                    <span className="text-sm bg-zinc-800/50 text-zinc-300 px-3 py-1 rounded">
                      Alternance chez Atos
                    </span>
                  </div>
                  <p className="text-zinc-300 text-sm">
                    Formation spécialisée en développement web fullstack avec
                    expérience en alternance
                  </p>
                </div>
              </div>
            </div>

            {/* BUT Informatique */}
            <div className="flex gap-6 relative">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-zinc-400 rounded-full border-4 border-zinc-900"></div>
                <div className="w-1 h-48 bg-zinc-800 my-2"></div>
              </div>
              <div className="pb-8">
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 backdrop-blur">
                  <h3 className="text-xl font-bold text-white mb-1">
                    BUT Informatique
                  </h3>
                  <p className="text-zinc-400 mb-3">
                    IUT Robert Schuman, Illkirch-Graffenstaden
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-sm bg-zinc-800/50 text-zinc-300 px-3 py-1 rounded">
                      2021 - 2024
                    </span>
                  </div>
                  <ul className="text-zinc-300 text-sm space-y-2">
                    <li>• Stage : 11 avril 2023 - 23 juin 2023</li>
                    <li>• Alternance : septembre 2023 - septembre 2024</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* BAC */}
            <div className="flex gap-6 relative">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-zinc-400 rounded-full border-4 border-zinc-900"></div>
              </div>
              <div>
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 backdrop-blur">
                  <h3 className="text-xl font-bold text-white mb-1">
                    Baccalauréat Mathématiques & Physique-Chimie
                  </h3>
                  <p className="text-zinc-400 mb-3">
                    Lycée Robert Schuman, Haguenau
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm bg-zinc-800/50 text-zinc-300 px-3 py-1 rounded">
                      Obtenu 2021 - Mention Assez Bien
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Compétences Techniques */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12">
            Compétences Techniques
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Java */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 backdrop-blur hover:border-zinc-700 transition-colors">
              <div className="aspect-square bg-zinc-800/50 rounded-lg mb-4 flex items-center justify-center">
                <img
                  src="/logos/java-icon.svg"
                  alt="Java"
                  className="w-12 h-12"
                />
              </div>
              <h4 className="font-semibold text-white mb-1">Java</h4>
              <p className="text-sm text-zinc-400">Spring Framework</p>
            </div>

            {/* PHP */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 backdrop-blur hover:border-zinc-700 transition-colors">
              <div className="aspect-square bg-zinc-800/50 rounded-lg mb-4 flex items-center justify-center">
                <img src="/logos/php.svg" alt="PHP" className="w-12 h-12" />
              </div>
              <h4 className="font-semibold text-white mb-1">PHP</h4>
              <p className="text-sm text-zinc-400">Laravel, Symfony</p>
            </div>

            {/* JavaScript */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 backdrop-blur hover:border-zinc-700 transition-colors">
              <div className="aspect-square bg-zinc-800/50 rounded-lg mb-4 flex items-center justify-center">
                <img
                  src="/logos/javascript-icon.svg"
                  alt="JavaScript"
                  className="w-12 h-12"
                />
              </div>
              <h4 className="font-semibold text-white mb-1">JavaScript</h4>
              <p className="text-sm text-zinc-400">
                React, Next, Nuxt, Vue, Angular, Node
              </p>
            </div>

            {/* HTML & CSS */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 backdrop-blur hover:border-zinc-700 transition-colors">
              <div className="aspect-square bg-zinc-800/50 rounded-lg mb-4 flex items-center justify-center">
                <img
                  src="/logos/html-icon.svg"
                  alt="HTML"
                  className="w-12 h-12"
                />
                <img
                  src="/logos/css-icon.svg"
                  alt="CSS"
                  className="w-12 h-12"
                />
              </div>
              <h4 className="font-semibold text-white mb-1">HTML & CSS</h4>
              <p className="text-sm text-zinc-400">Web Standards</p>
            </div>

            {/* Python */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 backdrop-blur hover:border-zinc-700 transition-colors">
              <div className="aspect-square bg-zinc-800/50 rounded-lg mb-4 flex items-center justify-center">
                <img
                  src="/logos/python-icon.svg"
                  alt="Python"
                  className="w-12 h-12"
                />
              </div>
              <h4 className="font-semibold text-white mb-1">Python</h4>
              <p className="text-sm text-zinc-400">Scripting & Data</p>
            </div>

			{/* SQL */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 backdrop-blur hover:border-zinc-700 transition-colors">
              <div className="aspect-square bg-zinc-800/50 rounded-lg mb-4 flex items-center justify-center">
                <img
                  src="/logos/sql-icon.svg"
                  alt="SQL"
                  className="w-12 h-12"
                />
              </div>
              <h4 className="font-semibold text-white mb-1">SQL</h4>
              <p className="text-sm text-zinc-400">Database Design & Querying</p>
            </div>

			{/* Git & CI/CD */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 backdrop-blur hover:border-zinc-700 transition-colors">
              <div className="aspect-square bg-zinc-800/50 rounded-lg mb-4 flex items-center justify-center">
                <img
                  src="/logos/github-icon.svg"
                  alt="GitHub"
                  className="w-12 h-12 bg-white rounded-full p-1"
                />
                <img
                  src="/logos/gitlab-icon.svg"
                  alt="GitLab"
                  className="w-12 h-12"
                />
              </div>
              <h4 className="font-semibold text-white mb-1">Git & CI/CD</h4>
              <p className="text-sm text-zinc-400">Version Control & Automation</p>
            </div>

			{/* Docker & Kubernetes */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 backdrop-blur hover:border-zinc-700 transition-colors">
              <div className="aspect-square bg-zinc-800/50 rounded-lg mb-4 flex items-center justify-center">
                <img
                  src="/logos/docker-icon.svg"
                  alt="Docker"
                  className="w-12 h-12"
                />
                <img
                  src="/logos/kubernetes-icon.svg"
                  alt="Kubernetes"
                  className="w-12 h-12"
                />
              </div>
              <h4 className="font-semibold text-white mb-1">Docker & Kubernetes</h4>
              <p className="text-sm text-zinc-400">Containerization & Orchestration</p>
            </div>

			{/* C# / .NET */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 backdrop-blur hover:border-zinc-700 transition-colors">
              <div className="aspect-square bg-zinc-800/50 rounded-lg mb-4 flex items-center justify-center">
                <img
                  src="/logos/dotnet-icon.svg"
                  alt="C#"
                  className="w-12 h-12"
                />
              </div>
              <h4 className="font-semibold text-white mb-1">C# / .NET</h4>
              <p className="text-sm text-zinc-400">Backend Development</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
