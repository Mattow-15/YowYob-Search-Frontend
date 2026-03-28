/**
 * Pagination component
 * @author Matteo Owona, Rouchda Yampen
 * @date 2024-12-06
 */

'use client';

import React from 'react';

interface PaginationProps {
  current_page: number;
  total_pages: number;
  on_page_change: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  current_page,
  total_pages,
  on_page_change,
}) => {
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 7;

    if (total_pages <= maxVisible) {
      for (let i = 1; i <= total_pages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (current_page > 3) {
        pages.push('...');
      }

      const start = Math.max(2, current_page - 1);
      const end = Math.min(total_pages - 1, current_page + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (current_page < total_pages - 2) {
        pages.push('...');
      }

      pages.push(total_pages);
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <button
        onClick={() => on_page_change(current_page - 1)}
        disabled={current_page === 1}
        className="px-4 py-2 rounded-xl font-semibold bg-white border-2 border-gray-200 hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
      >
        Précédent
      </button>

      <div className="flex gap-2">
        {getPageNumbers().map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === 'number' && on_page_change(page)}
            disabled={page === '...'}
            className={`w-10 h-10 rounded-xl font-semibold transition-all ${
              page === current_page
                ? 'bg-blue-500 text-white shadow-lg scale-110'
                : page === '...'
                ? 'text-gray-400 cursor-default'
                : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        onClick={() => on_page_change(current_page + 1)}
        disabled={current_page === total_pages}
        className="px-4 py-2 rounded-xl font-semibold bg-white border-2 border-gray-200 hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
      >
        Suivant
      </button>
    </div>
  );
};