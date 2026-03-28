import React from 'react';
import { cn } from '@/lib/utils';
import clsx from 'clsx';

export type SearchTab = 'all' | 'shop' | 'services' | 'products';

interface SearchTabsProps {
    activeTab: SearchTab;
    onTabChange: (tab: SearchTab) => void;
    className?: string;
}

export const SearchTabs: React.FC<SearchTabsProps> = ({
    activeTab,
    onTabChange,
    className,
}) => {
    const tabs: { id: SearchTab; label: string }[] = [
        { id: 'all', label: 'TOUT' },
        { id: 'shop', label: 'SHOP' },
        { id: 'services', label: 'SERVICES' },
        { id: 'products', label: 'PRODUITS' },
    ];

    return (
        <div className={cn("flex items-center gap-1 overflow-x-auto no-scrollbar", className)}>
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => onTabChange(tab.id)}
                    className={clsx(
                        "px-6 py-3 text-sm font-semibold whitespace-nowrap transition-all duration-200 uppercase tracking-wide border-b-2",
                        activeTab === tab.id
                            ? "text-blue-600 border-blue-600"
                            : "text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300"
                    )}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
};
