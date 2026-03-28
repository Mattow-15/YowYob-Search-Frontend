import React from 'react';
import { Badge } from '@/components/ui/badge';
import { SearchResult } from '@/types/search';

interface ResultListItemProps {
    item: SearchResult;
    onClick?: (item: SearchResult) => void;
}

export const ResultListItem: React.FC<ResultListItemProps> = ({ item, onClick }) => {
    // Generate a display URL or breadcrumb
    const displayUrl = item.detailsUrl && item.detailsUrl.startsWith('http')
        ? item.detailsUrl.replace('https://', '').replace('http://', '').split('/')[0]
        : `yowyob.com › ${item.category || item.type} › ${item.id.substring(0, 8)}`;

    return (
        <div
            className="group flex flex-col sm:flex-row gap-4 py-6 border-b border-gray-100 dark:border-gray-800 transition-all cursor-pointer hover:bg-gray-50/50 dark:hover:bg-gray-800/30 px-4 rounded-2xl"
            onClick={() => onClick?.(item)}
        >
            <div className="flex-1 min-w-0">
                {/* Source / Breadcrumb */}
                <div className="flex items-center gap-2 mb-1 text-sm text-gray-600 dark:text-gray-400">
                    <div className="w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-[10px] font-bold">
                        {item.type.charAt(0).toUpperCase()}
                    </div>
                    <span className="truncate">{displayUrl}</span>
                </div>

                {/* Clickable Title (Blue style) */}
                <h3 className="text-xl font-medium text-blue-700 dark:text-blue-400 group-hover:underline mb-1">
                    {item.name}
                </h3>

                {/* Description / Snippet */}
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-2 mb-2 max-w-2xl">
                    {item.description}
                </p>

                {/* Metadata Row */}
                <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 dark:text-gray-500">
                    {item.price && (
                        <span className="font-semibold text-gray-900 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">
                            {new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'XAF', minimumFractionDigits: 0 }).format(item.price)}
                        </span>
                    )}
                    <span className="flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {item.city || item.shop.address}
                    </span>
                    {item.rating > 0 && (
                        <span className="flex items-center gap-1 text-yellow-600 dark:text-yellow-500">
                            ★ {item.rating.toFixed(1)}
                        </span>
                    )}
                    <Badge variant="default" className="text-[10px] uppercase tracking-wider h-4 border border-gray-200 dark:border-gray-700 bg-transparent shadow-none">
                        {item.type}
                    </Badge>
                </div>
            </div>

            {/* Discreet Image on the right */}
            {item.images && item.images.length > 0 && (
                <div className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                </div>
            )}
        </div>
    );
};
