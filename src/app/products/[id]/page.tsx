'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { HeaderPublic } from '@/components/layout/header-public';
import { HeaderAuthenticated } from '@/components/layout/header-authenticated';
import { Footer } from '@/components/layout/footer';
import { useSession } from 'next-auth/react';
import { httpClient } from '@/lib/api/http-client';
import { API_ENDPOINTS } from '@/lib/constants/api-endpoints';

interface ProductDetail {
  id: string;
  name: string;
  description: string;
  price: number;
  type: 'product' | 'service' | 'shop';
  category: string;
  city: string;
  rating: number;
  images: string[];
  shop: {
    name: string;
    address: string;
  };
  tags: string[];
}

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { data: session } = useSession();
  const [product, setProduct] = useState<ProductDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsLoading(true);
        const id = params.id as string;

        // Utiliser l'endpoint correct pour récupérer un produit
        const response = await httpClient.get<any>(API_ENDPOINTS.PRODUCT_DETAIL(id));

        if (response && response.success && response.data) {
          const mappedProduct: ProductDetail = {
            ...response.data,
            type: (response.data.type?.toLowerCase() === 'listing' ? 'product' : response.data.type?.toLowerCase()) || 'product',
            images: response.data.images || ['https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?w=800'],
            shop: response.data.shop || { name: 'Commerçant local', address: response.data.city || 'Ville' },
            tags: response.data.tags || [response.data.category].filter(Boolean) || [],
          };
          setProduct(mappedProduct);
        } else {
          setError('Produit non trouvé');
        }
      } catch (err) {
        console.error('Erreur lors du chargement du produit:', err);
        setError('Erreur lors du chargement du produit');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [params.id]);

  const handleGoBack = () => {
    router.back();
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'XAF',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const typeLabels = {
    product: 'Produit',
    service: 'Service',
    shop: 'Commerce',
  };

  return (
    <>
      {session ? (
        <HeaderAuthenticated userName={session.user?.name || undefined} />
      ) : (
        <HeaderPublic />
      )}

      <div className="min-h-screen py-8 px-4 md:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <button
            onClick={handleGoBack}
            className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-6 font-semibold"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour
          </button>

          {isLoading && (
            <div className="text-center py-20">
              <div className="inline-block">
                <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
              <p className="mt-4 text-gray-600 dark:text-gray-400">Chargement...</p>
            </div>
          )}

          {error && (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 text-center">
              <p className="text-red-700 dark:text-red-400 font-semibold">{error}</p>
              <button
                onClick={handleGoBack}
                className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Retourner à la recherche
              </button>
            </div>
          )}

          {product && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Images Section */}
              <div className="space-y-4">
                <div className="relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={product.images[selectedImage]}
                    alt={product.name}
                    className="w-full h-96 object-cover"
                  />
                </div>

                {product.images.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto">
                    {product.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-colors ${selectedImage === index
                            ? 'border-blue-500'
                            : 'border-gray-200 dark:border-gray-700'
                          }`}
                      >
                        <img src={image} alt={`${product.name} ${index}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Details Section */}
              <div className="space-y-6">
                {/* Type Badge */}
                <div>
                  <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold">
                    {typeLabels[product.type]}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
                  {product.name}
                </h1>

                {/* Rating */}
                {product.rating > 0 && (
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${i < Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                            }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-gray-600 dark:text-gray-400">{product.rating.toFixed(1)}/5</span>
                  </div>
                )}

                {/* Price */}
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-white">
                  <p className="text-sm font-semibold opacity-90">Prix</p>
                  <p className="text-4xl font-black">{formatPrice(product.price)}</p>
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3">Description</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Category and Tags */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3">Catégories</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Shop Info */}
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 space-y-3">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Vendeur</h3>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Nom du commerce</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">{product.shop.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Adresse</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">{product.shop.address}</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-3 pt-6">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                    Contacter le vendeur
                  </button>
                  <button className="w-full border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 font-bold py-3 px-6 rounded-lg transition-colors">
                    Ajouter aux favoris
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>


    </>
  );
}
