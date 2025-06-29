import Layout from '../components/Layout';

const actualites = [
  {
    id: 1,
    titre: "Nouvelle saison printemps-été 2024",
    date: "15 mars 2024",
    categorie: "Saison",
    image: "🌱",
    resume: "La nouvelle saison printemps-été débute le 3 avril avec de nouveaux producteurs et des produits encore plus variés.",
    contenu: "Nous sommes ravis d'annoncer le début de notre nouvelle saison printemps-été 2024. Cette année, nous accueillons deux nouveaux producteurs : la Ferme des Trois Chênes pour les légumes bio et le Jardin des Herbes pour les herbes aromatiques. Nos paniers seront encore plus variés avec des produits de saison frais et locaux. Les inscriptions sont ouvertes jusqu'au 25 mars.",
    tags: ["Nouvelle saison", "Nouveaux producteurs", "Inscriptions"]
  },
  {
    id: 2,
    titre: "Visite de la Ferme de la Vache Heureuse",
    date: "8 mars 2024",
    categorie: "Visite",
    image: "🐄",
    resume: "Retour sur notre visite de la ferme laitière qui a ravi petits et grands avec ses vaches en liberté.",
    contenu: "Samedi dernier, une vingtaine d'adhérents ont visité la Ferme de la Vache Heureuse à Bruz. Sophie et Marc Leclerc nous ont fait découvrir leur exploitation où les vaches pâturent en liberté et produisent un lait exceptionnel. Les enfants ont pu participer à la traite et déguster les fromages frais. Une belle journée qui renforce les liens entre producteurs et consommateurs.",
    tags: ["Visite de ferme", "Produits laitiers", "Famille"]
  },
  {
    id: 3,
    titre: "Atelier cuisine : Recettes de saison",
    date: "1 mars 2024",
    categorie: "Atelier",
    image: "👨‍🍳",
    resume: "Notre atelier cuisine mensuel a permis de découvrir de délicieuses recettes avec les légumes d'hiver.",
    contenu: "L'atelier cuisine de février a été un succès ! Avec les légumes de saison (poireaux, carottes, choux), nous avons préparé une soupe paysanne, un gratin de légumes et un cake aux légumes. L'occasion d'échanger des recettes et de découvrir de nouvelles façons de cuisiner nos produits locaux. Le prochain atelier aura lieu le 5 avril sur le thème des herbes aromatiques.",
    tags: ["Atelier cuisine", "Recettes", "Légumes de saison"]
  },
  {
    id: 4,
    titre: "Assemblée générale 2024",
    date: "20 février 2024",
    categorie: "Événement",
    image: "📋",
    resume: "L'assemblée générale annuelle a permis de faire le bilan de l'année 2023 et de voter les orientations 2024.",
    contenu: "Notre assemblée générale s'est tenue le 20 février avec une forte participation. Le bilan 2023 est très positif : 52 familles adhérentes, 6 producteurs partenaires, et plus de 2000 paniers distribués. Les projets 2024 incluent l'accueil de nouveaux producteurs, l'organisation de plus d'événements conviviaux et la mise en place d'un système de commande en ligne.",
    tags: ["Assemblée générale", "Bilan 2023", "Projets 2024"]
  },
  {
    id: 5,
    titre: "Nouveau point de distribution",
    date: "15 février 2024",
    categorie: "Organisation",
    image: "📍",
    resume: "Nous déménageons notre point de distribution vers la nouvelle salle des associations.",
    contenu: "À partir du 1er mars, notre point de distribution se tiendra dans la nouvelle salle des associations, Place de l'Église à Cesson-Sévigné. Cette salle plus spacieuse nous permettra d'améliorer l'organisation et le confort des distributions. Les horaires restent les mêmes : mercredi de 17h à 19h. Un plan d'accès sera disponible sur notre site.",
    tags: ["Point de distribution", "Déménagement", "Organisation"]
  },
  {
    id: 6,
    titre: "Fête des récoltes 2023",
    date: "10 octobre 2023",
    categorie: "Événement",
    image: "🎉",
    resume: "La fête des récoltes a réuni plus de 80 personnes pour célébrer une belle saison.",
    contenu: "Notre traditionnelle fête des récoltes a eu lieu le 10 octobre dans le parc de la mairie. Plus de 80 personnes ont partagé un repas convivial avec les produits de nos producteurs. Au programme : dégustation de fromages, présentation des récoltes, jeux pour enfants et musique traditionnelle. Un moment fort de notre communauté qui renforce les liens entre tous les acteurs de notre AMAP.",
    tags: ["Fête des récoltes", "Convivialité", "Communauté"]
  }
];

const categories = ["Toutes", "Saison", "Visite", "Atelier", "Événement", "Organisation"];

export default function ActualitesPage() {
  return (
    <Layout>
      <div className="bg-green-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Actualités
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Suivez l'actualité de notre AMAP, découvrez nos événements, 
              nos visites de fermes et les dernières nouvelles de nos producteurs.
            </p>
          </div>

          {/* Filtres par catégorie */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((categorie) => (
                <button
                  key={categorie}
                  className="px-4 py-2 rounded-full bg-white text-gray-700 hover:bg-green-600 hover:text-white transition-colors border border-gray-300"
                >
                  {categorie}
                </button>
              ))}
            </div>
          </div>

          {/* Grille des actualités */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {actualites.map((actualite) => (
              <article key={actualite.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="text-4xl mb-4 text-center">{actualite.image}</div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                      {actualite.categorie}
                    </span>
                    <span className="text-sm text-gray-500">{actualite.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {actualite.titre}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {actualite.resume}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {actualite.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <button className="text-green-600 hover:text-green-800 font-semibold">
                    Lire la suite →
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Restez informés
              </h2>
              <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                Recevez nos actualités directement dans votre boîte mail. 
                Inscrivez-vous à notre newsletter mensuelle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                />
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  S'inscrire
                </button>
              </div>
            </div>
          </div>

          {/* Événements à venir */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Événements à venir
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Visite de la Ferme des Trois Chênes
                </h3>
                <p className="text-green-600 font-semibold mb-2">Samedi 15 juin 2024 - 14h</p>
                <p className="text-gray-600 mb-3">
                  Découvrez la culture des légumes bio avec Marie et Pierre Dubois.
                </p>
                <button className="text-green-600 hover:text-green-800 font-semibold">
                  S'inscrire →
                </button>
              </div>
              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Atelier cuisine : Herbes aromatiques
                </h3>
                <p className="text-green-600 font-semibold mb-2">Vendredi 5 avril 2024 - 19h</p>
                <p className="text-gray-600 mb-3">
                  Apprenez à cuisiner avec les herbes aromatiques de Claire Moreau.
                </p>
                <button className="text-green-600 hover:text-green-800 font-semibold">
                  S'inscrire →
                </button>
              </div>
            </div>
          </div>

          {/* Archives */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Archives
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Retrouvez tous nos articles précédents et l'historique de nos activités.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors">
                2024
              </button>
              <button className="px-6 py-3 bg-white text-gray-700 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors border border-gray-300">
                2023
              </button>
              <button className="px-6 py-3 bg-white text-gray-700 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors border border-gray-300">
                2022
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 