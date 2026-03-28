/**
 * Privacy Policy Page
 * @author Matteo Owona, Rouchda Yampen
 */

'use client';

import { useSession } from 'next-auth/react';
import { HeaderPublic } from '@/components/layout/header-public';
import { HeaderAuthenticated } from '@/components/layout/header-authenticated';
import { Footer } from '@/components/layout/footer';

export default function PrivacyPage() {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <HeaderAuthenticated userName={session.user?.name || undefined} />
      ) : (
        <HeaderPublic />
      )}

      <div className="min-h-screen py-20 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-black mb-8 text-gray-900 dark:text-gray-100">
            Politique de Confidentialité
          </h1>

          <div className="prose prose-lg max-w-none space-y-8 text-gray-700 dark:text-gray-300">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Dernière mise à jour : 16 décembre 2024
            </p>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">1. Introduction</h2>
              <p>
                Yowyob s&apos;engage à protéger la vie privée de ses utilisateurs. Cette politique
                de confidentialité explique comment nous collectons, utilisons et protégeons
                vos données personnelles.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">2. Données Collectées</h2>
              <p>Nous collectons les types de données suivants :</p>
              <ul className="space-y-2 ml-6 list-disc">
                <li><strong>Données d&apos;identification :</strong> nom, prénom, adresse email</li>
                <li><strong>Données de connexion :</strong> mot de passe (crypté), historique de connexion</li>
                <li><strong>Données de navigation :</strong> recherches effectuées, pages visitées</li>
                <li><strong>Données de localisation :</strong> position géographique (avec votre consentement)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">3. Utilisation des Données</h2>
              <p>Vos données sont utilisées pour :</p>
              <ul className="space-y-2 ml-6 list-disc">
                <li>Fournir et améliorer nos services</li>
                <li>Personnaliser votre expérience utilisateur</li>
                <li>Vous envoyer des notifications importantes</li>
                <li>Analyser l&apos;utilisation de la plateforme</li>
                <li>Prévenir la fraude et assurer la sécurité</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">4. Protection des Données</h2>
              <p>
                Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos
                données contre tout accès non autorisé, modification, divulgation ou destruction.
                Cela inclut :
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li>Cryptage des mots de passe</li>
                <li>Connexions sécurisées (HTTPS)</li>
                <li>Accès restreint aux données personnelles</li>
                <li>Audits de sécurité réguliers</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">5. Partage des Données</h2>
              <p>
                Nous ne vendons jamais vos données personnelles. Nous pouvons les partager
                uniquement dans les cas suivants :
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li>Avec votre consentement explicite</li>
                <li>Pour se conformer à la loi</li>
                <li>Avec des prestataires de services (hébergement, analytics)</li>
                <li>En cas de fusion ou acquisition de l&apos;entreprise</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">6. Vos Droits</h2>
              <p>Vous disposez des droits suivants :</p>
              <ul className="space-y-2 ml-6 list-disc">
                <li><strong>Droit d&apos;accès :</strong> consulter vos données personnelles</li>
                <li><strong>Droit de rectification :</strong> corriger vos données</li>
                <li><strong>Droit à l&apos;effacement :</strong> supprimer votre compte et vos données</li>
                <li><strong>Droit à la portabilité :</strong> récupérer vos données</li>
                <li><strong>Droit d&apos;opposition :</strong> refuser certains traitements</li>
              </ul>
              <p className="mt-4">
                Pour exercer ces droits, contactez-nous à{' '}
                <a href="mailto:privacy@yowyob.com" className="text-blue-600 hover:text-blue-800 font-semibold">
                  privacy@yowyob.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">7. Cookies</h2>
              <p>
                Nous utilisons des cookies pour améliorer votre expérience. Vous pouvez
                désactiver les cookies dans les paramètres de votre navigateur, mais cela
                peut affecter certaines fonctionnalités.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">8. Modifications</h2>
              <p>
                Nous pouvons mettre à jour cette politique de confidentialité. Les modifications
                importantes vous seront notifiées par email ou via notre plateforme.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">9. Contact</h2>
              <p>
                Pour toute question concernant cette politique, contactez-nous à{' '}
                <a href="mailto:privacy@yowyob.com" className="text-blue-600 hover:text-blue-800 font-semibold">
                  privacy@yowyob.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>


    </>
  );
}
