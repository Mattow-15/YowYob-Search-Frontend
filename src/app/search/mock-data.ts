
import { SearchResult } from '@/types/search';

export const MOCK_RESULTS: SearchResult[] = [
    // PRODUCTS (Téléphones, Nourriture, etc.)
    {
        id: '1',
        name: 'Samsung Galaxy S24 Ultra',
        description: 'Smartphone haut de gamme avec IA intégrée, 256Go de stockage, Gris Titane.',
        price: 850000,
        type: 'product',
        category: 'High-Tech',
        city: 'Yaoundé',
        rating: 4.8,
        images: ['https://images.unsplash.com/photo-1610945265078-d86f3d297df2?w=500'],
        shop: {
            name: 'Samsung Experience Store',
            address: 'Bastos, Yaoundé'
        },
        location: { lat: 3.8480, lng: 11.5021 },
        tags: ['Smartphone', 'Android', 'Samsung']
    },
    {
        id: '2',
        name: 'Menu Burger King XL',
        description: 'Double Whopper avec frites et boisson géante. Livraison disponible.',
        price: 5500,
        type: 'product',
        category: 'Restauration',
        city: 'Yaoundé',
        rating: 4.5,
        images: ['https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500'],
        shop: {
            name: 'Burger King Bastos',
            address: 'Bastos, Yaoundé'
        },
        location: { lat: 3.8612, lng: 11.5154 },
        tags: ['Fast Food', 'Burger', 'Livraison']
    },
    {
        id: '3',
        name: 'Nike Air Jordan 1',
        description: 'Sneakers authentiques, édition limitée. Toutes pointures disponibles.',
        price: 45000,
        type: 'product',
        category: 'Mode',
        city: 'Yaoundé',
        rating: 4.9,
        images: ['https://images.unsplash.com/photo-1552346154-21d32810aba3?w=500'],
        shop: {
            name: 'City Sport',
            address: 'Mvan, Yaoundé'
        },
        location: { lat: 3.8345, lng: 11.5178 },
        tags: ['Mode', 'Chaussures', 'Sport']
    },

    // SERVICES (Garage, Station Service, Coiffeur)
    {
        id: '4',
        name: 'Garage Auto Expert',
        description: 'Mécanique générale, diagnostic électronique, tôlerie et peinture.',
        price: 0,
        type: 'service',
        category: 'Automobile',
        city: 'Yaoundé',
        rating: 4.7,
        images: ['https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=500'],
        shop: {
            name: 'Garage Auto Expert',
            address: 'Mvog-Mbi, Yaoundé'
        },
        location: { lat: 3.8540, lng: 11.5230 },
        tags: ['Garage', 'Réparation', 'Auto']
    },
    {
        id: '5',
        name: 'TotalEnergies Station',
        description: 'Carburant, boutique, lavage auto et entretien rapide. Ouvert 24/7.',
        price: 0,
        type: 'service',
        category: 'Station Service',
        city: 'Yaoundé',
        rating: 4.6,
        images: ['https://images.unsplash.com/photo-1632823471465-412d92bb0d1d?w=500'],
        shop: {
            name: 'Station Total Melen',
            address: 'Melen, Yaoundé'
        },
        location: { lat: 3.8721, lng: 11.4985 },
        tags: ['Essence', 'Lavage', 'Boutique']
    },
    {
        id: '6',
        name: 'Salon de Coiffure Prestige',
        description: 'Coupe homme, femme, soins du visage et manucure. Sur rendez-vous.',
        price: 5000,
        type: 'service',
        category: 'Bien-être',
        city: 'Yaoundé',
        rating: 4.8,
        images: ['https://images.unsplash.com/photo-1560066984-12186d30b435?w=500'],
        shop: {
            name: 'Prestige Coiffure',
            address: 'Omnisport, Yaoundé'
        },
        location: { lat: 3.8820, lng: 11.5300 },
        tags: ['Coiffure', 'Beauté', 'Soins']
    },

    // SHOPS (Boutique, Supermarché, Centre Commercial)
    {
        id: '7',
        name: 'Supermarché Casino',
        description: 'Grand choix de produits alimentaires, frais, hygiène et maison.',
        price: 0,
        type: 'shop',
        category: 'Supermarché',
        city: 'Yaoundé',
        rating: 4.4,
        images: ['https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=500'],
        shop: {
            name: 'Casino Mvog-Mbi',
            address: 'Mvog-Mbi, Yaoundé'
        },
        location: { lat: 3.8560, lng: 11.5250 },
        tags: ['Alimentation', 'Courses', 'Supermarché']
    },
    {
        id: '8',
        name: 'PLAYCE Yaoundé',
        description: 'Centre commercial moderne avec Carrefour, boutiques de mode et food court.',
        price: 0,
        type: 'shop',
        category: 'Centre Commercial',
        city: 'Yaoundé',
        rating: 4.7,
        images: ['https://images.unsplash.com/photo-1519567241046-7f570eee3d9f?w=500'],
        shop: {
            name: 'PLAYCE',
            address: 'Warda, Yaoundé'
        },
        location: { lat: 3.8650, lng: 11.5100 },
        tags: ['Shopping', 'Mall', 'Divertissement']
    },
    {
        id: '9',
        name: 'Boutique Zara',
        description: 'Mode femme, homme et enfants. Dernières collections disponibles.',
        price: 0,
        type: 'shop',
        category: 'Boutique',
        city: 'Yaoundé',
        rating: 4.5,
        images: ['https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500'],
        shop: {
            name: 'Zara Official',
            address: 'Hilton Hotel, Yaoundé'
        },
        location: { lat: 3.8630, lng: 11.5140 },
        tags: ['Vêtements', 'Mode', 'Tendance']
    }
];
