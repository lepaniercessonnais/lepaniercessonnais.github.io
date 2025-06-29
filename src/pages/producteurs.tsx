import Layout from '../components/Layout';

const producteurs = [
  {
    id: 1,
    nom: "Ferme des Trois Chênes",
    proprietaire: "Marie et Pierre Dubois",
    specialite: "Légumes bio",
    description: "Cultivateurs passionnés depuis 15 ans, nous produisons une grande variété de légumes de saison selon les principes de l'agriculture biologique.",
    produits: ["Tomates", "Carottes", "Salades", "Courgettes", "Poivrons"],
    localisation: "Cesson-Sévigné",
    image: "🌱"
  },
  {
    id: 2,
    nom: "Verger du Petit Moulin",
    proprietaire: "Jean-Luc Martin",
    specialite: "Fruits",
    description: "Notre verger de 5 hectares produit des pommes, poires et prunes selon des méthodes traditionnelles respectueuses de l'environnement.",
    produits: ["Pommes", "Poires", "Prunes", "Cerises", "Fraises"],
    localisation: "Rennes",
    image: "🍎"
  },
  {
    id: 3,
    nom: "Ferme de la Vache Heureuse",
    proprietaire: "Sophie et Marc Leclerc",
    specialite: "Produits laitiers",
    description: "Nos vaches pâturent en liberté et produisent un lait de qualité exceptionnelle transformé en fromages et yaourts artisanaux.",
    produits: ["Lait", "Fromages", "Yaourts", "Beurre", "Crème"],
    localisation: "Bruz",
    image: "🐄"
  },
  {
    id: 4,
    nom: "Jardin des Herbes",
    proprietaire: "Claire Moreau",
    specialite: "Herbes aromatiques",
    description: "Spécialisée dans la culture d'herbes aromatiques et médicinales, je propose des produits frais et séchés de grande qualité.",
    produits: ["Basilic", "Thym", "Romarin", "Menthe", "Sauge"],
    localisation: "Cesson-Sévigné",
    image: "🌿"
  },
  {
    id: 5,
    nom: "Boulangerie du Terroir",
    proprietaire: "Antoine et Lucie Bernard",
    specialite: "Pain et pâtisseries",
    description: "Nous utilisons uniquement des farines locales et des levains naturels pour créer des pains et pâtisseries authentiques.",
    produits: ["Pain complet", "Baguettes", "Croissants", "Brioches", "Gâteaux"],
    localisation: "Rennes",
    image: "🥖"
  },
  {
    id: 6,
    nom: "Miel de la Forêt",
    proprietaire: "Robert Durand",
    specialite: "Miel et produits de la ruche",
    description: "Apiculteur passionné, je récolte différents types de miel selon les saisons et les floraisons de nos forêts bretonnes.",
    produits: ["Miel d'acacia", "Miel de châtaignier", "Pollen", "Propolis", "Gelée royale"],
    localisation: "Bain-de-Bretagne",
    image: "🍯"
  }
];

const produitsSaisonniers = [
  {
    saison: "Printemps",
    produits: ["Asperges", "Radis", "Petits pois", "Fraises", "Rhubarbe"]
  },
  {
    saison: "Été",
    produits: ["Tomates", "Courgettes", "Poivrons", "Pêches", "Abricots"]
  },
  {
    saison: "Automne",
    produits: ["Potirons", "Champignons", "Pommes", "Poires", "Noix"]
  },
  {
    saison: "Hiver",
    produits: ["Carottes", "Poireaux", "Choux", "Pommes de terre", "Oranges"]
  }
];

export default function ProducteursPage() {
  return (
    <Layout>
      <div className="bg-green-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Nos Producteurs Partenaires
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les agriculteurs passionnés qui fournissent nos paniers 
              avec des produits frais, locaux et de qualité.
            </p>
          </div>

          {/* Grille des producteurs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {producteurs.map((producteur) => (
              <div key={producteur.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="text-4xl mb-4 text-center">{producteur.image}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{producteur.nom}</h3>
                  <p className="text-green-600 font-semibold mb-2">{producteur.proprietaire}</p>
                  <p className="text-sm text-gray-500 mb-3">{producteur.localisation}</p>
                  <p className="text-gray-700 mb-4">{producteur.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Spécialité : {producteur.specialite}</h4>
                    <div className="flex flex-wrap gap-2">
                      {producteur.produits.map((produit, index) => (
                        <span
                          key={index}
                          className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full"
                        >
                          {produit}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Produits de saison */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Nos Produits de Saison
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {produitsSaisonniers.map((saison, index) => (
                <div key={index} className="text-center">
                  <div className="bg-green-100 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-green-800 mb-4">{saison.saison}</h3>
                    <ul className="space-y-2">
                      {saison.produits.map((produit, prodIndex) => (
                        <li key={prodIndex} className="text-gray-700">
                          {produit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Qualité et engagement */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Notre Engagement Qualité
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                    ✓
                  </div>
                  <span className="text-gray-700">Produits 100% locaux et de saison</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                    ✓
                  </div>
                  <span className="text-gray-700">Agriculture biologique ou raisonnée</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                    ✓
                  </div>
                  <span className="text-gray-700">Récolte à maturité optimale</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                    ✓
                  </div>
                  <span className="text-gray-700">Distribution dans les 24h après récolte</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Visitez nos Producteurs
              </h3>
              <p className="text-gray-700 mb-6">
                Nous organisons régulièrement des visites de fermes pour permettre 
                à nos adhérents de rencontrer les producteurs et découvrir leurs méthodes de travail.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Prochaine visite :</h4>
                <p className="text-green-700">
                  Ferme des Trois Chênes - Samedi 15 juin 2024 à 14h
                </p>
                <p className="text-sm text-green-600 mt-2">
                  Inscription obligatoire via notre formulaire de contact
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Rejoignez notre réseau
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              En adhérant à notre AMAP, vous soutenez directement ces producteurs 
              locaux et accédez à leurs produits exceptionnels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Adhérer à l'AMAP
              </a>
              <a
                href="/fonctionnement"
                className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors"
              >
                Découvrir nos paniers
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 