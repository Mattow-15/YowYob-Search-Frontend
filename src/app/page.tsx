/**
 * Public Homepage (Before Login)
 * @author Matteo Owona, Rouchda Yampen
 */

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { HeaderPublic } from '@/components/layout/header-public';
import { Footer } from '@/components/layout/footer';
import { ConditionalLayout } from '@/components/layout/conditional-layout';

export default function PublicHomePage() {
  const { data: session } = useSession();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <ConditionalLayout>

      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-white via-blue-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px]"></div>

          <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-gray-900 dark:text-gray-100">
              Trouvez tout ce dont
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                vous avez besoin
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
              Le moteur de recherche local qui connecte les commerçants,
              <br />
              services et produits près de chez vous
            </p>

            {/* Search Bar */}
            <div className="max-w-3xl mx-auto mb-8">
              <div className="relative flex items-center bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border-2 border-gray-200 dark:border-gray-700 p-2 hover:border-blue-400 dark:hover:border-blue-500 transition-all">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Rechercher des produits, services, commerces..."
                  className="flex-1 px-6 py-4 bg-transparent outline-none text-lg text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
                />

                {/* Icône de recherche cliquable */}
                <button
                  onClick={handleSearch}
                  className="p-4 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-all flex items-center justify-center"
                  title="Rechercher"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>


          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-black text-center mb-16 text-gray-900 dark:text-gray-100">
              Pourquoi choisir Yowyob ?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="p-8 bg-blue-50 dark:bg-gray-800 rounded-3xl hover:scale-105 transition-transform">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Recherche Rapide</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Trouvez instantanément ce que vous cherchez grâce à notre moteur de recherche intelligent
                </p>
              </div>

              {/* Feature 2 */}
              <div className="p-8 bg-cyan-50 dark:bg-gray-800 rounded-3xl hover:scale-105 transition-transform">
                <div className="w-16 h-16 bg-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Géolocalisation</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Découvrez les commerces et services à proximité avec notre carte interactive
                </p>
              </div>

              {/* Feature 3 */}
              <div className="p-8 bg-purple-50 dark:bg-gray-800 rounded-3xl hover:scale-105 transition-transform">
                <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">100% Vérifié</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Tous nos commerces et services sont vérifiés pour votre sécurité
                </p>
              </div>
            </div>
          </div>
        </section>



        {/* CTA Final */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Prêt à commencer ?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Rejoignez des milliers d&apos;utilisateurs satisfaits
            </p>
            {session ? (
              <Link href="/home">
                <button className="px-12 py-5 bg-white text-blue-600 font-bold rounded-2xl hover:bg-gray-100 transition-all text-lg">
                  Accéder à mon espace
                </button>
              </Link>
            ) : (
              <Link href="/auth">
                <button className="px-12 py-5 bg-white text-blue-600 font-bold rounded-2xl hover:bg-gray-100 transition-all text-lg">
                  Créer un compte gratuit
                </button>
              </Link>
            )}

          </div>

        </section>

      </div>

    </ConditionalLayout>
  );
}