import Layout from '../components/Layout';

const etapes = [
  {
    numero: 1,
    titre: "Adhésion",
    description: "Rejoignez notre AMAP en remplissant le formulaire d'adhésion et en payant la cotisation annuelle de 20€.",
    details: [
      "Formulaire d'adhésion en ligne ou sur place",
      "Cotisation annuelle de 20€ par foyer",
      "Signature du contrat d'engagement"
    ]
  },
  {
    numero: 2,
    titre: "Choix du panier",
    description: "Sélectionnez le type de panier qui vous convient selon vos besoins et votre budget.",
    details: [
      "Paniers de différentes tailles (petit, moyen, grand)",
      "Paniers spécialisés (légumes, fruits, produits laitiers)",
      "Paniers mixtes avec tous les produits"
    ]
  },
  {
    numero: 3,
    titre: "Engagement",
    description: "Vous vous engagez à récupérer votre panier chaque semaine pendant la saison choisie.",
    details: [
      "Engagement sur 6 mois minimum",
      "Récupération hebdomadaire obligatoire",
      "Possibilité de faire garder son panier par un autre adhérent"
    ]
  },
  {
    numero: 4,
    titre: "Distribution",
    description: "Récupérez votre panier chaque semaine au point de distribution.",
    details: [
      "Distribution tous les mercredis de 17h à 19h",
      "Point de distribution : Salle des associations de Cesson-Sévigné",
      "Présence obligatoire ou délégation à un autre adhérent"
    ]
  }
];

const typesPaniers = [
  {
    nom: "Petit Panier",
    prix: "15€",
    contenu: "Légumes pour 2-3 personnes",
    description: "Idéal pour les petits foyers ou les débutants"
  },
  {
    nom: "Panier Moyen",
    prix: "25€",
    contenu: "Légumes + fruits pour 3-4 personnes",
    description: "Le plus populaire, équilibré et varié"
  },
  {
    nom: "Grand Panier",
    prix: "35€",
    contenu: "Légumes + fruits + produits laitiers pour 4-6 personnes",
    description: "Pour les grandes familles ou les amateurs de produits frais"
  },
  {
    nom: "Panier Découverte",
    prix: "20€",
    contenu: "Sélection variée de produits de saison",
    description: "Parfait pour découvrir nos producteurs"
  }
];

const saisons = [
  {
    nom: "Saison Printemps-Été",
    periode: "Avril à Septembre",
    produits: ["Légumes primeurs", "Fruits d'été", "Herbes aromatiques", "Produits laitiers"]
  },
  {
    nom: "Saison Automne-Hiver",
    periode: "Octobre à Mars",
    produits: ["Légumes de garde", "Fruits d'automne", "Conserves", "Produits laitiers"]
  }
];

export default function FonctionnementPage() {
  return (
    <Layout>
      <div className="bg-green-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Comment ça marche ?
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez le fonctionnement de notre AMAP et comment rejoindre 
              notre communauté de consommateurs et producteurs locaux.
            </p>
          </div>

          {/* Étapes du fonctionnement */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Les étapes pour rejoindre notre AMAP
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {etapes.map((etape) => (
                <div key={etape.numero} className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4">
                      {etape.numero}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{etape.titre}</h3>
                  </div>
                  <p className="text-gray-700 mb-6">{etape.description}</p>
                  <ul className="space-y-2">
                    {etape.details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-green-100 text-green-600 rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 text-xs">
                          •
                        </div>
                        <span className="text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Types de paniers */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Nos Types de Paniers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {typesPaniers.map((panier, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{panier.nom}</h3>
                  <div className="text-3xl font-bold text-green-600 mb-4">{panier.prix}</div>
                  <p className="text-gray-700 mb-3 font-semibold">{panier.contenu}</p>
                  <p className="text-gray-600 text-sm">{panier.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Saisons */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Nos Saisons de Distribution
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {saisons.map((saison, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{saison.nom}</h3>
                  <p className="text-green-600 font-semibold mb-4">{saison.periode}</p>
                  <h4 className="font-semibold text-gray-900 mb-3">Produits inclus :</h4>
                  <ul className="space-y-2">
                    {saison.produits.map((produit, prodIndex) => (
                      <li key={prodIndex} className="flex items-center">
                        <div className="bg-green-100 text-green-600 rounded-full w-4 h-4 flex items-center justify-center mr-3 text-xs">
                          ✓
                        </div>
                        <span className="text-gray-700">{produit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Informations pratiques */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Informations Pratiques
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Horaires de distribution :</h4>
                  <p className="text-gray-700">Mercredi de 17h à 19h</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Lieu de distribution :</h4>
                  <p className="text-gray-700">Salle des associations<br />Place de l'Église<br />35510 Cesson-Sévigné</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Cotisation annuelle :</h4>
                  <p className="text-gray-700">20€ par foyer</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Engagement minimum :</h4>
                  <p className="text-gray-700">6 mois</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Règles et Bonnes Pratiques
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                    ✓
                  </div>
                  <span className="text-gray-700">Présence obligatoire ou délégation à un autre adhérent</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                    ✓
                  </div>
                  <span className="text-gray-700">Respect des horaires de distribution</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                    ✓
                  </div>
                  <span className="text-gray-700">Participation aux tâches de distribution (1 fois par mois)</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                    ✓
                  </div>
                  <span className="text-gray-700">Communication en cas d'absence</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                    ✓
                  </div>
                  <span className="text-gray-700">Respect des produits et du matériel</span>
                </li>
              </ul>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Questions Fréquentes
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Que faire si je ne peux pas récupérer mon panier ?
                </h3>
                <p className="text-gray-700">
                  Vous pouvez demander à un autre adhérent de récupérer votre panier. 
                  Une liste de contacts est disponible pour faciliter les échanges.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Puis-je changer de type de panier en cours de saison ?
                </h3>
                <p className="text-gray-700">
                  Oui, sous réserve de disponibilité. Contactez-nous au moins 2 semaines à l'avance.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Les produits sont-ils garantis bio ?
                </h3>
                <p className="text-gray-700">
                  Tous nos producteurs pratiquent une agriculture biologique ou raisonnée. 
                  Certains sont certifiés bio, d'autres en conversion.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Prêt à rejoindre notre AMAP ?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Rejoignez notre communauté et découvrez le plaisir de consommer 
              des produits frais et locaux tout en soutenant l'agriculture paysanne.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Adhérer maintenant
              </a>
              <a
                href="/producteurs"
                className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors"
              >
                Découvrir nos producteurs
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 