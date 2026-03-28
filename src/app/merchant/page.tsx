'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { HeaderAuthenticated } from '@/components/layout/header-authenticated';
import { Card } from '@/components/ui/card';
import { httpClient } from '@/lib/api/http-client';
import { API_ENDPOINTS } from '@/lib/constants/api-endpoints';
import { toast } from 'sonner';

export default function MerchantPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [listings, setListings] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const accessToken = (session as any)?.user?.accessToken;

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth');
    }
  }, [status, router]);

  useEffect(() => {
    const fetchMerchantData = async () => {
      if (session?.user?.id && accessToken) {
        try {
          setIsLoading(true);
          const headers = { Authorization: `Bearer ${accessToken}` };
          const data = await httpClient.get<any[]>(API_ENDPOINTS.LISTINGS_BY_SELLER(session.user.id), { headers });
          setListings(data || []);
        } catch (error) {
          console.error("Error fetching merchant listings", error);
          toast.error("Impossible de charger vos annonces.");
        } finally {
          setIsLoading(false);
        }
      }
    };
    if (session && accessToken) fetchMerchantData();
  }, [session, accessToken]);

  if (status === 'loading' || (status === 'authenticated' && isLoading)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="spinner w-12 h-12"></div>
      </div>
    );
  }

  return (
    <>
      <HeaderAuthenticated userName={session?.user?.name || undefined} />
      <div className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-black gradient-text">Espace Marchand</h1>
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-blue-500/30">
              + Ajouter une annonce
            </button>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card className="p-6">
              <p className="text-gray-500 dark:text-gray-400 text-sm font-bold uppercase mb-2">Total Annonces</p>
              <h3 className="text-3xl font-black text-gray-800 dark:text-gray-100">{listings.length}</h3>
            </Card>
            <Card className="p-6">
              <p className="text-gray-500 dark:text-gray-400 text-sm font-bold uppercase mb-2">Vues</p>
              <h3 className="text-3xl font-black text-gray-800 dark:text-gray-100">0</h3>
            </Card>
            <Card className="p-6">
              <p className="text-gray-500 dark:text-gray-400 text-sm font-bold uppercase mb-2">Ventes</p>
              <h3 className="text-3xl font-black text-gray-800 dark:text-gray-100">0 CFA</h3>
            </Card>
            <Card className="p-6">
              <p className="text-gray-500 dark:text-gray-400 text-sm font-bold uppercase mb-2">Note Moyenne</p>
              <h3 className="text-3xl font-black text-gray-800 dark:text-gray-100">5.0</h3>
            </Card>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">Mes Annonces</h2>
          {listings.length === 0 ? (
            <div className="text-center py-20 bg-white dark:bg-gray-800 rounded-3xl border-2 border-dashed border-gray-200 dark:border-gray-700">
              <p className="text-gray-500 dark:text-gray-400">Vous n'avez pas encore d'annonces.</p>
            </div>
          ) : (
            <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-3xl shadow-xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <th className="p-6 text-sm font-bold text-gray-500 uppercase">Annonce</th>
                    <th className="p-6 text-sm font-bold text-gray-500 uppercase">Catégorie</th>
                    <th className="p-6 text-sm font-bold text-gray-500 uppercase">Prix</th>
                    <th className="p-6 text-sm font-bold text-gray-500 uppercase">Status</th>
                    <th className="p-6 text-sm font-bold text-gray-500 uppercase">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {listings.map((listing) => (
                    <tr key={listing.id} className="border-b border-gray-50 dark:border-gray-700/50 hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                      <td className="p-6">
                        <div className="font-bold text-gray-800 dark:text-gray-100">{listing.title}</div>
                        <div className="text-xs text-gray-500 truncate max-w-[200px]">{listing.description}</div>
                      </td>
                      <td className="p-6">
                        <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold rounded-full uppercase">
                          {listing.category}
                        </span>
                      </td>
                      <td className="p-6 font-black text-gray-800 dark:text-gray-100">
                        {listing.price.toLocaleString()} CFA
                      </td>
                      <td className="p-6">
                        <span className="flex items-center gap-2 text-green-500 font-bold text-sm">
                          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                          Actif
                        </span>
                      </td>
                      <td className="p-6">
                        <button className="text-blue-500 hover:text-blue-700 font-bold text-sm">Modifier</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
}