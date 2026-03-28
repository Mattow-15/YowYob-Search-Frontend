/**
 * Search Result Card component
 * @author Matteo Owona, Rouchda Yampen
 * @date 2024-12-06
 */

'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ResultCardProps {
  item: {
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
    location?: {
      lat: number;
      lng: number;
    };
    tags?: string[];
    detailsUrl?: string;
  };
  onClick?: (item: any) => void;
}

export const ResultCard: React.FC<ResultCardProps> = ({ item, onClick }) => {
  const typeColors = {
    product: 'info',
    service: 'success',
    shop: 'warning',
  } as const;

  const typeLabels = {
    product: 'Produit',
    service: 'Service',
    shop: 'Commerce',
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'XAF',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div
      className="cursor-pointer h-full group"
      onClick={() => onClick?.(item)}
    >
      <Card className="hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 overflow-hidden bg-white dark:bg-gray-800 h-full flex flex-col border-gray-100 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-2xl">
        {/* Image */}
        {item.images.length > 0 && (
          <div className="relative h-48 w-full bg-gray-100 dark:bg-gray-700 rounded-2xl overflow-hidden mb-4 flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.images[0]}
              alt={item.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-3 right-3">
              <Badge variant={typeColors[item.type]}>
                {typeLabels[item.type]}
              </Badge>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="space-y-3 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {item.name}
          </h3>

          <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 flex-shrink-0">
            {item.description}
          </p>

          {/* Price */}
          {item.price && (
            <div className="text-2xl font-black gradient-text flex-shrink-0">
              {formatPrice(item.price)}
            </div>
          )}

          {/* Spacer to push shop info to bottom */}
          <div className="flex-1"></div>

          {/* Shop Info */}
          <div className="pt-3 border-t border-gray-100 dark:border-gray-700 space-y-1 flex-shrink-0">
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span className="font-semibold text-gray-800 dark:text-gray-200">{item.shop.name}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="line-clamp-1">{item.shop.address}</span>
            </div>
          </div>

          {/* Tags */}
          {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 flex-shrink-0">
              {item.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};