import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Privacy() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center mb-8 text-blue-400 hover:text-blue-300 transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Retour
        </button>

        <div className="bg-slate-800 rounded-2xl p-8 shadow-2xl">
          <h1 className="text-4xl font-bold text-white mb-8">Politique de confidentialité</h1>
          
          <div className="space-y-8 text-slate-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
              <p className="leading-relaxed">
                Chez Helix Terminal, nous prenons votre vie privée au sérieux. Cette politique de confidentialité explique 
                comment nous collectons, utilisons, stockons et protégeons vos informations personnelles lorsque vous utilisez notre plateforme.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Informations que nous collectons</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Informations d'inscription</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Nom et prénom</li>
                    <li>Adresse e-mail</li>
                    <li>Mot de passe (chiffré)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Données d'utilisation</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Historique de navigation sur la plateforme</li>
                    <li>Préférences de trading et d'analyse</li>
                    <li>Données de performance (anonymisées)</li>
                    <li>Logs techniques pour la sécurité</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Comment nous utilisons vos données</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Fournir et améliorer nos services d'analyse de marché</li>
                <li>Personnaliser votre expérience utilisateur</li>
                <li>Envoyer des notifications importantes sur le service</li>
                <li>Améliorer nos algorithmes d'IA (données anonymisées uniquement)</li>
                <li>Assurer la sécurité et prévenir la fraude</li>
                <li>Respecter nos obligations légales</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Protection de vos données</h2>
              <div className="bg-blue-900/20 border border-blue-700 rounded-lg p-6 mb-4">
                <h3 className="text-lg font-medium text-blue-300 mb-3">🔒 Sécurité de niveau bancaire</h3>
                <ul className="list-disc list-inside space-y-2 text-blue-100">
                  <li>Chiffrement AES-256 pour toutes les données sensibles</li>
                  <li>Authentification multi-facteurs (2FA)</li>
                  <li>Surveillance continue des menaces</li>
                  <li>Conformité SOC 2 Type II</li>
                  <li>Audits de sécurité réguliers</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Partage des données</h2>
              <p className="leading-relaxed mb-4">
                <strong className="text-green-400">Nous ne vendons jamais vos données personnelles.</strong> Nous ne partageons vos informations que dans les cas suivants :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Avec votre consentement explicite</li>
                <li>Pour respecter une obligation légale</li>
                <li>Avec nos prestataires de services (sous contrat strict de confidentialité)</li>
                <li>En cas de fusion ou acquisition (avec notification préalable)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Vos droits (RGPD)</h2>
              <p className="leading-relaxed mb-4">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Droit d'accès :</strong> Consulter vos données personnelles</li>
                <li><strong>Droit de rectification :</strong> Corriger vos informations</li>
                <li><strong>Droit à l'effacement :</strong> Supprimer votre compte et vos données</li>
                <li><strong>Droit à la portabilité :</strong> Exporter vos données</li>
                <li><strong>Droit d'opposition :</strong> Refuser certains traitements</li>
                <li><strong>Droit de limitation :</strong> Restreindre l'utilisation de vos données</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Cookies et technologies similaires</h2>
              <p className="leading-relaxed mb-4">
                Nous utilisons des cookies essentiels pour le fonctionnement de la plateforme :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Cookies de session :</strong> Maintenir votre connexion</li>
                <li><strong>Cookies de préférences :</strong> Sauvegarder vos paramètres</li>
                <li><strong>Cookies de sécurité :</strong> Prévenir les attaques</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Vous pouvez gérer vos préférences de cookies dans les paramètres de votre navigateur.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Conservation des données</h2>
              <p className="leading-relaxed">
                Nous conservons vos données personnelles uniquement le temps nécessaire aux finalités pour lesquelles elles ont été collectées :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Données de compte : Jusqu'à la suppression de votre compte</li>
                <li>Données d'utilisation : 3 ans maximum</li>
                <li>Logs de sécurité : 1 an maximum</li>
                <li>Données anonymisées : Peuvent être conservées indéfiniment</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">9. Transferts internationaux</h2>
              <p className="leading-relaxed">
                Vos données sont principalement stockées dans l'Union Européenne. En cas de transfert vers des pays tiers, 
                nous nous assurons que des garanties appropriées sont en place (clauses contractuelles types, décisions d'adéquation).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">10. Contact et réclamations</h2>
              <p className="leading-relaxed mb-4">
                Pour exercer vos droits ou pour toute question concernant cette politique :
              </p>
              <div className="bg-slate-700 rounded-lg p-4">
                <p className="mb-2"><strong>Délégué à la Protection des Données :</strong></p>
                <p className="text-blue-400">privacy@helixterminal.com</p>
                <p className="mt-4 text-sm text-slate-400">
                  Vous avez également le droit de déposer une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés).
                </p>
              </div>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-700">
            <p className="text-slate-500 text-sm">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}