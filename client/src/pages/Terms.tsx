import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Terms() {
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
          <h1 className="text-4xl font-bold text-white mb-8">Conditions d'utilisation</h1>
          
          <div className="space-y-8 text-slate-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptation des conditions</h2>
              <p className="leading-relaxed">
                En accédant et en utilisant Helix Terminal, vous acceptez d'être lié par ces conditions d'utilisation. 
                Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Description du service</h2>
              <p className="leading-relaxed mb-4">
                Helix Terminal est une plateforme d'analyse de marché alimentée par l'intelligence artificielle qui fournit :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Analyses de marché en temps réel</li>
                <li>Insights basés sur l'IA pour le trading</li>
                <li>Outils de gestion de portefeuille</li>
                <li>Données de marché et graphiques avancés</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Utilisation acceptable</h2>
              <p className="leading-relaxed mb-4">
                Vous vous engagez à utiliser Helix Terminal uniquement à des fins légales et conformément à ces conditions. Il est interdit de :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Utiliser le service à des fins illégales ou non autorisées</li>
                <li>Tenter d'accéder aux systèmes ou données non autorisés</li>
                <li>Interférer avec le fonctionnement du service</li>
                <li>Partager vos identifiants de connexion avec des tiers</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Avertissement sur les risques financiers</h2>
              <p className="leading-relaxed">
                <strong className="text-yellow-400">AVERTISSEMENT IMPORTANT :</strong> Le trading et les investissements comportent des risques substantiels. 
                Les analyses et recommandations fournies par Helix Terminal sont à des fins informatives uniquement et ne constituent pas des conseils financiers. 
                Vous êtes seul responsable de vos décisions d'investissement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Propriété intellectuelle</h2>
              <p className="leading-relaxed">
                Tous les contenus, logiciels, et technologies de Helix Terminal sont protégés par des droits de propriété intellectuelle. 
                Vous ne pouvez pas copier, modifier, distribuer ou créer des œuvres dérivées sans autorisation écrite.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Limitation de responsabilité</h2>
              <p className="leading-relaxed">
                Helix Terminal ne sera pas responsable des pertes financières, dommages directs ou indirects résultant de l'utilisation 
                de notre service. Notre responsabilité est limitée au montant payé pour le service au cours des 12 derniers mois.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Modifications des conditions</h2>
              <p className="leading-relaxed">
                Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications seront effectives 
                dès leur publication sur cette page. Votre utilisation continue du service constitue votre acceptation des conditions modifiées.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Contact</h2>
              <p className="leading-relaxed">
                Pour toute question concernant ces conditions d'utilisation, veuillez nous contacter à :
                <br />
                <span className="text-blue-400">legal@helixterminal.com</span>
              </p>
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