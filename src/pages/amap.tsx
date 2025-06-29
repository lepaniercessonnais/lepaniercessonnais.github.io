import Layout from '../components/Layout';

export default function AmapPage() {
  return (
    <Layout>
      <div className="bg-green-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Qu'est-ce qu'une AMAP ?
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              L'Association pour le Maintien d'une Agriculture Paysanne (AMAP) est un partenariat 
              entre consommateurs et producteurs locaux basé sur la confiance et la solidarité.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Notre Mission
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Le Panier Cessonnais s'engage à soutenir une agriculture paysanne, 
                respectueuse de l'environnement et socialement équitable. Nous créons 
                un lien direct entre les consommateurs et les producteurs locaux.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Notre objectif est de garantir un revenu stable aux agriculteurs tout 
                en offrant aux consommateurs des produits frais, de saison et de qualité.
              </p>
              <div className="bg-green-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-3">
                  Nos Valeurs
                </h3>
                <ul className="space-y-2 text-green-700">
                  <li>• Agriculture durable et respectueuse de l'environnement</li>
                  <li>• Solidarité entre producteurs et consommateurs</li>
                  <li>• Transparence dans nos pratiques</li>
                  <li>• Soutien à l'économie locale</li>
                </ul>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Comment fonctionne notre AMAP ?
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Engagement</h4>
                    <p className="text-gray-600">
                      Les consommateurs s'engagent à acheter régulièrement les produits 
                      des agriculteurs partenaires.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Production</h4>
                    <p className="text-gray-600">
                      Les producteurs cultivent selon des méthodes respectueuses 
                      de l'environnement et de la biodiversité.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Distribution</h4>
                    <p className="text-gray-600">
                      Les paniers sont préparés et distribués chaque semaine 
                      dans un point de retrait convivial.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Notre Histoire
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2018</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Création</h3>
                <p className="text-gray-600">
                  Fondation de l'AMAP Le Panier Cessonnais par un groupe 
                  de citoyens engagés pour une alimentation locale.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2020</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Expansion</h3>
                <p className="text-gray-600">
                  Développement du réseau de producteurs et augmentation 
                  du nombre d'adhérents consommateurs.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2024</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Aujourd'hui</h3>
                <p className="text-gray-600">
                  Plus de 50 familles adhérentes et 8 producteurs partenaires 
                  pour une alimentation locale et durable.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Rejoignez notre AMAP
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              En adhérant à notre AMAP, vous soutenez l'agriculture locale 
              et accédez à des produits frais et de qualité toute l'année.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Nous contacter
              </a>
              <a
                href="/fonctionnement"
                className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors"
              >
                En savoir plus
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 