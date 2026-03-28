'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { HeaderAuthenticated } from '@/components/layout/header-authenticated';

import { ConditionalLayout } from '@/components/layout/conditional-layout';

export default function HomePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
    }
  }, [status, router]);

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

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Bonjour';
    if (hour < 18) return 'Bon après-midi';
    return 'Bonsoir';
  };

  return (
    <ConditionalLayout>

      <div className="min-h-screen bg-white dark:bg-gray-900">
        <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-white via-blue-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px]"></div>

          <div className="relative z-10 max-w-6xl mx-auto px-6 text-center w-full">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-300 mb-2">
                {getGreeting()},
              </h2>
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-gray-50">
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  {session?.user?.name || 'Utilisateur'}
                </span>
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
              Que souhaitez-vous rechercher aujourd&apos;hui ?
            </p>

            <div className="max-w-3xl mx-auto mb-8">
              <div className="relative flex items-center bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border-2 border-gray-200 dark:border-gray-700 p-2 hover:border-blue-400 dark:hover:border-blue-400 transition-all">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Rechercher des produits, services, commerces..."
                  className="flex-1 px-6 py-4 bg-transparent outline-none text-lg text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                />

                <button
                  onClick={handleSearch}
                  className="p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl transition-all"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/search">
                <button className="px-8 py-4 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 font-bold rounded-2xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-all">
                  Parcourir tout
                </button>
              </Link>
              <Link href="/map">
                <button className="px-8 py-4 bg-white text-gray-900 font-bold rounded-2xl border-2 border-gray-300 hover:border-gray-400 transition-all">
                  Voir la carte
                </button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-black text-center mb-16 text-gray-900">
              Découvrez nos fonctionnalités
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-blue-50 rounded-3xl hover:scale-105 transition-transform">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Recherche Rapide</h3>
                <p className="text-gray-600">
                  Trouvez instantanément ce que vous cherchez
                </p>
              </div>

              <div className="p-8 bg-cyan-50 rounded-3xl hover:scale-105 transition-transform">
                <div className="w-16 h-16 bg-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Géolocalisation</h3>
                <p className="text-gray-600">
                  Trouvez les commerces près de chez vous
                </p>
              </div>

              <div className="p-8 bg-purple-50 rounded-3xl hover:scale-105 transition-transform">
                <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">100% Vérifié</h3>
                <p className="text-gray-600">
                  Tous nos commerces sont vérifiés
                </p>
              </div>
            </div>
          </div>
        </section>


      </div>

    </ConditionalLayout>
  );
}