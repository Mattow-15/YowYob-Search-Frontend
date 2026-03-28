'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { HeaderPublic } from '@/components/layout/header-public';
import { HeaderAuthenticated } from '@/components/layout/header-authenticated';
import { MapContainer } from '@/components/map/map-container';
import { MOCK_RESULTS } from '@/app/search/mock-data';
import { useSearchStore } from '@/store';

export default function MapPage() {
  const { data: session } = useSession();
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const { addToHistory } = useSearchStore();

  // Filter results based on search query
  const filteredResults = searchQuery.trim()
    ? MOCK_RESULTS.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.shop.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    : MOCK_RESULTS;

  // Convert results to map markers
  const markers = filteredResults.map(item => ({
    id: item.id,
    position: [item.location.lat, item.location.lng] as [number, number],
    title: item.name,
    description: `${item.shop.name} - ${item.shop.address}`,
  }));

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      addToHistory(searchQuery.trim());
      setIsSearching(true);
      // Simulate search delay
      setTimeout(() => setIsSearching(false), 300);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch(e as any);
    }
  };

  return (
    <>
      {session ? (
        <HeaderAuthenticated userName={session.user?.name || undefined} />
      ) : (
        <HeaderPublic />
      )}

      <div className="min-h-screen p-8 bg-white dark:bg-gray-900">
        <h1 className="text-3xl font-bold mb-8 gradient-text">
          Carte Interactive
        </h1>

        {/* Map Container */}
        <div className="h-[600px] mb-8">
          <MapContainer markers={markers} />
        </div>

        {/* Search Bar Below Map */}
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSearch}>
            <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl shadow-blue-500/20 dark:shadow-blue-400/10 border border-blue-100 dark:border-gray-700 hover:shadow-3xl hover:shadow-blue-500/30 dark:hover:shadow-blue-400/20 transition-all duration-500">
              <div className="flex items-center gap-3 flex-1 px-4">
                <svg className="w-6 h-6 text-blue-500 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Rechercher sur la carte..."
                  className="flex-1 py-4 bg-transparent outline-none text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 text-lg"
                />
                {isSearching && (
                  <div className="spinner w-5 h-5"></div>
                )}
              </div>
              <button
                type="submit"
                className="p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl transition-all"
                title="Rechercher"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </form>

          {/* Results Counter */}
          {searchQuery.trim() && (
            <div className="mt-4 text-center">
              <p className="text-gray-600 dark:text-gray-400">
                <span className="font-bold text-blue-600 dark:text-blue-400">{filteredResults.length}</span> résultat{filteredResults.length > 1 ? 's' : ''} trouvé{filteredResults.length > 1 ? 's' : ''}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
