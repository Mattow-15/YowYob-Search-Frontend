/**
 * Search Results List component
 * @author Matteo Owona, Rouchda Yampen
 * @date 2024-12-06
 */

'use client';

import React from 'react';
import { ResultCard } from './result-card';
import { CardSkeleton } from '@/components/ui/skeleton';

interface ResultsListProps {
  items: Array<{
    id: string;
    name: string;
    description: string;
    type: 'product' | 'service' | 'shop';
    price?: number;
    images: string[];
    shop: {
      name: string;
      address: string;
    };
    tags?: string[];
    location?: {
      lat: number;
      lng: number;
    };
  }>;
  loading?: boolean;
  onItemClick?: (id: string) => void;
}

export const ResultsList: React.FC<ResultsListProps> = ({
  items,
  loading = false,
  onItemClick,
}) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <CardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
          <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          Aucun résultat trouvé
        </h3>
        <p className="text-gray-600">
          Essayez d&apos;ajuster vos filtres ou votre recherche
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
      {items.map((item) => (
        <ResultCard key={item.id} item={item} onClick={onItemClick} />
      ))}
    </div>
  );
};