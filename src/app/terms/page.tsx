/**
 * Terms of Service Page
 * @author Matteo Owona, Rouchda Yampen
 */

'use client';

import { useSession } from 'next-auth/react';
import { HeaderPublic } from '@/components/layout/header-public';
import { HeaderAuthenticated } from '@/components/layout/header-authenticated';
import { Footer } from '@/components/layout/footer';

export default function TermsPage() {
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
            Conditions d&apos;Utilisation
          </h1>

          <div className="prose prose-lg max-w-none space-y-8 text-gray-700 dark:text-gray-300">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Dernière mise à jour : 16 décembre 2024
            </p>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">1. Acceptation des Conditions</h2>
              <p>
                En accédant et en utilisant Yowyob, vous acceptez d&apos;être lié par ces conditions
                d&apos;utilisation. Si vous n&apos;acceptez pas ces conditions, veuillez ne pas utiliser
                notre service.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">2. Description du Service</h2>
              <p>
                Yowyob est un moteur de recherche local permettant de découvrir des produits,
                services et commerces. Nous nous efforçons de fournir des informations précises,
                mais ne garantissons pas l&apos;exactitude de toutes les données.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">3. Compte Utilisateur</h2>
              <p>Pour utiliser certaines fonctionnalités, vous devez créer un compte. Vous vous engagez à :</p>
              <ul className="space-y-2 ml-6 list-disc">
                <li>Fournir des informations exactes et à jour</li>
                <li>Maintenir la sécurité de votre mot de passe</li>
                <li>Ne pas partager votre compte avec d&apos;autres personnes</li>
                <li>Nous informer immédiatement de toute utilisation non autorisée</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">4. Utilisation Acceptable</h2>
              <p>Vous vous engagez à ne pas :</p>
              <ul className="space-y-2 ml-6 list-disc">
                <li>Utiliser le service à des fins illégales</li>
                <li>Publier du contenu offensant, diffamatoire ou frauduleux</li>
                <li>Tenter d&apos;accéder à des systèmes non autorisés</li>
                <li>Utiliser des robots ou scripts automatisés sans autorisation</li>
                <li>Collecter des données personnelles d&apos;autres utilisateurs</li>
                <li>Interférer avec le fonctionnement normal du service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">5. Contenu Utilisateur</h2>
              <p>
                Vous conservez vos droits sur le contenu que vous publiez. En publiant du contenu,
                vous nous accordez une licence mondiale, non exclusive, pour l&apos;utiliser, le reproduire
                et le distribuer dans le cadre de notre service.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">6. Propriété Intellectuelle</h2>
              <p>
                Tous les éléments de Yowyob (logo, design, code, contenu) sont protégés par les
                droits d&apos;auteur et autres lois sur la propriété intellectuelle. Vous ne pouvez pas
                les utiliser sans notre autorisation écrite.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">7. Limitation de Responsabilité</h2>
              <p>
                Yowyob est fourni &quot;tel quel&quot;. Nous ne garantissons pas que le service sera
                ininterrompu, sans erreur ou exempt de virus. Nous ne sommes pas responsables
                des dommages directs, indirects ou consécutifs résultant de votre utilisation.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">8. Résiliation</h2>
              <p>
                Nous nous réservons le droit de suspendre ou de résilier votre compte à tout moment,
                notamment en cas de violation de ces conditions. Vous pouvez également supprimer
                votre compte à tout moment depuis vos paramètres.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">9. Modifications des Conditions</h2>
              <p>
                Nous pouvons modifier ces conditions à tout moment. Les modifications importantes
                vous seront notifiées par email ou via notre plateforme. Votre utilisation continue
                du service constitue votre acceptation des nouvelles conditions.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">10. Droit Applicable</h2>
              <p>
                Ces conditions sont régies par les lois du Cameroun. Tout litige sera soumis à
                la juridiction exclusive des tribunaux de Yaoundé.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">11. Contact</h2>
              <p>
                Pour toute question concernant ces conditions, contactez-nous à{' '}
                <a href="mailto:legal@yowyob.com" className="text-blue-600 hover:text-blue-800 font-semibold">
                  legal@yowyob.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>


    </>
  );
}
