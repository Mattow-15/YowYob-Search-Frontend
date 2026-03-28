/**
 * Search Filters component
 * @author Matteo Owona, Rouchda Yampen
 * @date 2024-12-06
 */

'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface SearchFiltersProps {
  onApplyFilters: (filters: FilterValues) => void;
  defaultFilters?: FilterValues;
}

export interface FilterValues {
  type?: 'all' | 'product' | 'service' | 'shop';
  sort_by?: 'relevance' | 'price' | 'distance' | 'date';
  sort_order?: 'asc' | 'desc';
  min_price?: number;
  max_price?: number;
  distance?: number;
}

export const SearchFilters: React.FC<SearchFiltersProps> = ({
  onApplyFilters,
  defaultFilters = {},
}) => {
  const [filters, setFilters] = useState<FilterValues>(defaultFilters);
  const [expanded, setExpanded] = useState(false);

  const handleApply = () => {
    onApplyFilters(filters);
  };

  const handleReset = () => {
    const resetFilters: FilterValues = {
      type: 'all',
      sort_by: 'relevance',
      sort_order: 'desc',
    };
    setFilters(resetFilters);
    onApplyFilters(resetFilters);
  };

  return (
    <Card className="p-6 space-y-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">Filtres</h3>
        <button
          onClick={() => setExpanded(!expanded)}
          className="md:hidden text-blue-600 dark:text-blue-400 font-semibold"
        >
          {expanded ? 'Masquer' : 'Afficher'}
        </button>
      </div>

      <div className={`space-y-6 ${expanded ? 'block' : 'hidden md:block'}`}>
        {/* Type Filter */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Type
          </label>
          <div className="space-y-2">
            {[
              { value: 'all', label: 'Tous' },
              { value: 'product', label: 'Produits' },
              { value: 'service', label: 'Services' },
              { value: 'shop', label: 'Commerces' },
            ].map((option) => (
              <label key={option.value} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="radio"
                  name="type"
                  value={option.value}
                  checked={filters.type === option.value}
                  onChange={(e) => setFilters({ ...filters, type: e.target.value as FilterValues['type'] })}
                  className="w-4 h-4 text-blue-600 dark:text-blue-400"
                />
                <span className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {option.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Sort By Filter */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Trier par
          </label>
          <select
            value={filters.sort_by || 'relevance'}
            onChange={(e) => setFilters({ ...filters, sort_by: e.target.value as FilterValues['sort_by'] })}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:border-blue-300 dark:focus:border-blue-500 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 outline-none transition-all"
          >
            <option value="relevance">Pertinence</option>
            <option value="price">Prix</option>
            <option value="distance">Distance</option>
            <option value="date">Date</option>
          </select>
        </div>

        {/* Sort Order */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Ordre
          </label>
          <div className="flex gap-2">
            <button
              onClick={() => setFilters({ ...filters, sort_order: 'asc' })}
              className={`flex-1 px-4 py-2 rounded-xl font-semibold transition-all ${filters.sort_order === 'asc'
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
            >
              Croissant
            </button>
            <button
              onClick={() => setFilters({ ...filters, sort_order: 'desc' })}
              className={`flex-1 px-4 py-2 rounded-xl font-semibold transition-all ${filters.sort_order === 'desc'
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
            >
              Décroissant
            </button>
          </div>
        </div>

        {/* Price Range */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Prix (FCFA)
          </label>
          <div className="space-y-2">
            <input
              type="number"
              placeholder="Prix minimum"
              value={filters.min_price || ''}
              onChange={(e) => setFilters({ ...filters, min_price: e.target.value ? Number(e.target.value) : undefined })}
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-300 dark:focus:border-blue-500 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 outline-none"
            />
            <input
              type="number"
              placeholder="Prix maximum"
              value={filters.max_price || ''}
              onChange={(e) => setFilters({ ...filters, max_price: e.target.value ? Number(e.target.value) : undefined })}
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-300 dark:focus:border-blue-500 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 outline-none"
            />
          </div>
        </div>

        {/* Distance */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Distance: {filters.distance || 30} km
          </label>
          <input
            type="range"
            min="1"
            max="100"
            value={filters.distance || 30}
            onChange={(e) => setFilters({ ...filters, distance: Number(e.target.value) })}
            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500 dark:accent-blue-400"
          />
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3 pt-4">
          <Button variant="primary" onClick={handleApply} fullWidth>
            Appliquer
          </Button>
          <Button variant="outline" onClick={handleReset} fullWidth>
            Réinitialiser
          </Button>
        </div>
      </div>
    </Card>
  );
};