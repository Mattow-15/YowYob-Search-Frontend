/**
 * About Page
 * @author Matteo Owona, Rouchda Yampen
 */

'use client';

import { useSession } from 'next-auth/react';
import { HeaderPublic } from '@/components/layout/header-public';
import { HeaderAuthenticated } from '@/components/layout/header-authenticated';
import Link from 'next/link';

export default function AboutPage() {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <HeaderAuthenticated userName={session.user?.name || undefined} />
      ) : (
        <HeaderPublic />
      )}

      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px]"></div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-black mb-6 text-gray-900 dark:text-gray-100">
              À propos de <span className="text-blue-600">Yowyob</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Le moteur de recherche qui connecte votre communauté locale
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
              <div>
                <h2 className="text-4xl font-black mb-6 text-gray-900 dark:text-gray-100">
                  Notre Mission
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  Yowyob est un moteur de recherche local conçu pour connecter les utilisateurs
                  aux commerces, services et produits de leur région. Notre mission est de
                  faciliter la découverte et l&apos;accès aux ressources locales tout en soutenant
                  l&apos;économie de proximité.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Nous croyons en un écosystème où chaque commerce local a sa chance de briller
                  et où chaque utilisateur peut facilement trouver ce qu&apos;il cherche près de chez lui.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl p-8 flex items-center justify-center">
                  <svg className="w-full h-full text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Histoire Section */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="order-2 md:order-1">
                <div className="aspect-square bg-gradient-to-br from-purple-100 dark:from-purple-900 to-pink-100 dark:to-pink-900 rounded-3xl p-8 flex items-center justify-center">
                  <svg className="w-full h-full text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-4xl font-black mb-6 text-gray-900 dark:text-gray-100">
                  Notre Histoire
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  Yowyob est née de la
                  volonté de créer une plateforme qui valorise le commerce local et facilite
                  les échanges entre consommateurs et commerçants.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  Partant du constat qu&apos;il était difficile de trouver des informations fiables
                  sur les commerces de proximité, nous avons développé une solution moderne,
                  intuitive et accessible à tous.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Valeurs Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-black mb-4 text-center text-gray-900 dark:text-gray-100">
              Nos Valeurs
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-16 max-w-2xl mx-auto">
              Les principes qui guident notre action au quotidien
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Valeur 1 */}
              <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-400 hover:shadow-lg transition-all">
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">Transparence</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Nous vérifions tous les commerces et services référencés pour garantir
                  des informations fiables et à jour.
                </p>
              </div>

              {/* Valeur 2 */}
              <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl border border-gray-200 dark:border-gray-600 hover:border-cyan-300 dark:hover:border-cyan-400 hover:shadow-lg transition-all">
                <div className="w-14 h-14 bg-cyan-100 dark:bg-cyan-900 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">Proximité</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Nous favorisons les échanges locaux et de proximité pour renforcer
                  le tissu économique de nos communautés.
                </p>
              </div>

              {/* Valeur 3 */}
              <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl border border-gray-200 dark:border-gray-600 hover:border-purple-300 dark:hover:border-purple-400 hover:shadow-lg transition-all">
                <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">Innovation</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Nous utilisons les dernières technologies pour améliorer constamment
                  l&apos;expérience utilisateur.
                </p>
              </div>

              {/* Valeur 4 */}
              <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl border border-gray-200 dark:border-gray-600 hover:border-pink-300 dark:hover:border-pink-400 hover:shadow-lg transition-all">
                <div className="w-14 h-14 bg-pink-100 dark:bg-pink-900 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-pink-600 dark:text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">Accessibilité</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Notre plateforme est gratuite et accessible à tous, sans discrimination.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Équipe Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-black mb-6 text-gray-900 dark:text-gray-100">
              Notre Équipe
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4 leading-relaxed max-w-2xl mx-auto">
              Yowyob est un <span className="font-bold text-blue-600 dark:text-blue-400">projet académique</span> développé par des étudiants en 4e année de Génie Informatique.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-16 leading-relaxed max-w-2xl mx-auto">
              Sous la supervision de nos encadrants, nous travaillons ensemble pour appliquer nos connaissances
              en développement logiciel, architecture système et gestion de projet.
            </p>

            {/* Encadrants Section */}
            <div className="mb-16">
              <h3 className="text-2xl font-black mb-8 text-gray-900 dark:text-gray-100">Encadrants</h3>
              <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-12">
                {/* Dr Djotio */}
                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl border border-yellow-300 dark:border-yellow-800 hover:shadow-lg transition-all">
                  <div className="w-24 h-24 bg-gradient-to-br from-yellow-500 to-amber-400 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-3xl font-black">
                    DT
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Dr Djotio Thomas</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-semibold mb-1">Professeur / Responsable du Projet</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">Génie Informatique</p>
                </div>

                {/* Dr Kutche */}
                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl border border-teal-300 dark:border-teal-800 hover:shadow-lg transition-all">
                  <div className="w-24 h-24 bg-gradient-to-br from-teal-500 to-cyan-400 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-3xl font-black">
                    DK
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Dr Kutche</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-semibold mb-1">Assistant / Encadrant Technique</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">Support & Architecture</p>
                </div>
              </div>
            </div>

            {/* Étudiants Section */}
            <h3 className="text-2xl font-black mb-8 text-gray-900 dark:text-gray-100">Équipe Développement (4e année Génie Informatique)</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Matteo Owona */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl border border-blue-200 dark:border-blue-900 hover:shadow-lg transition-all">
                <div className="w-28 h-28 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-black">
                  MO
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Matteo Jordan Owona Nguini</h3>
                <p className="text-xs text-gray-500 dark:text-gray-500">Architecture & Backend</p>
              </div>

              {/* Rouchda Yampen */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl border border-purple-200 dark:border-purple-900 hover:shadow-lg transition-all">
                <div className="w-28 h-28 bg-gradient-to-br from-purple-500 to-pink-400 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-black">
                  RY
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Rouchda Rachida Yampen Njempou</h3>
                <p className="text-xs text-gray-500 dark:text-gray-500">Frontend & API Integration</p>
              </div>

              {/* Rolain Tchapet */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl border border-blue-200 dark:border-blue-900 hover:shadow-lg transition-all">
                <div className="w-28 h-28 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-black">
                  RT
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Rolain Tchapet</h3>
                <p className="text-xs text-gray-500 dark:text-gray-500">Microservices & Database</p>
              </div>

              {/* Heudep Brusly */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl border border-purple-200 dark:border-purple-900 hover:shadow-lg transition-all">
                <div className="w-28 h-28 bg-gradient-to-br from-purple-500 to-pink-400 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-black">
                  HB
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Heudep Brusly</h3>
                <p className="text-xs text-gray-500 dark:text-gray-500">Infrastructure & Deployment</p>
              </div>

              {/* Freddy Ela Foe */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl border border-green-200 dark:border-green-900 hover:shadow-lg transition-all">
                <div className="w-28 h-28 bg-gradient-to-br from-green-500 to-emerald-400 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-black">
                  FE
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Frédéric Théophile Ela Foe</h3>
                <p className="text-xs text-gray-500 dark:text-gray-500">UI Components & Styling</p>
              </div>

              {/* Freddy Nzungang */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl border border-orange-200 dark:border-orange-900 hover:shadow-lg transition-all">
                <div className="w-28 h-28 bg-gradient-to-br from-orange-500 to-red-400 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-black">
                  FN
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Freddy Nzungang</h3>
                <p className="text-xs text-gray-500 dark:text-gray-500">Design & User Experience</p>
              </div>

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-900 dark:to-cyan-800">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-black mb-6 text-white dark:text-gray-100">
              Contactez-nous
            </h2>
            <p className="text-xl text-white/90 dark:text-white/80 mb-8">
              Vous avez des questions, des suggestions ou souhaitez en savoir plus ?
              <br />
              N&apos;hésitez pas à nous contacter !
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/contact">
                <button className="px-8 py-4 bg-white dark:bg-gray-100 text-blue-600 dark:text-blue-900 font-bold rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-200 transition-all shadow-lg hover:shadow-xl">
                  Nous contacter
                </button>
              </Link>
              {!session && (
                <Link href="/auth">
                  <button className="px-8 py-4 bg-transparent text-white font-bold rounded-2xl border-2 border-white hover:bg-white/10 dark:hover:bg-white/20 transition-all">
                    Rejoindre Yowyob
                  </button>
                </Link>
              )}
            </div>
          </div>
        </section>
      </div>


    </>
  );
}