import Layout from '../components/Layout';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout>
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Fond avec effet de grain et dégradé */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-green-100 to-green-200">
          {/* Effet de grain plus subtil */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />
          {/* Dégradé supplémentaire */}
          <div className="absolute inset-0 bg-gradient-to-t from-green-100/30 via-transparent to-green-50/20" />
        </div>

        {/* Contenu principal - Layout en 2 colonnes */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
            
            {/* Colonne gauche - Texte */}
            <div className="text-left">
              {/* Titre principal avec deux polices différentes */}
              <h1 className="font-black text-green-800 mb-6 tracking-tight leading-tight">
                <span className="text-5xl md:text-6xl lg:text-7xl font-display">AMAP</span>
                <span className="text-2xl md:text-3xl lg:text-4xl"> - Le Panier Cessonnais</span>
              </h1>
              
              {/* Description */}
              <p className="text-lg md:text-xl text-green-800 mb-8 leading-relaxed max-w-lg font-body">
                Association pour le Maintien d'une Agriculture Paysanne
              </p>
              
              {/* Boutons d'action */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/producteurs"
                  className="bg-green-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center font-body"
                >
                  Découvrir nos producteurs
                </Link>
                <Link
                  href="/fonctionnement"
                  className="border-2 border-green-700 text-green-700 px-8 py-4 rounded-full font-semibold hover:bg-green-700 hover:text-white transition-all duration-300 transform hover:scale-105 text-center font-body"
                >
                  Comment ça marche ?
                </Link>
              </div>
            </div>

            {/* Colonne droite - Illustration */}
            <div className="flex justify-center lg:justify-end items-center">
              <div className="relative w-full max-w-md lg:max-w-lg">
                <Image
                  src="/images/illustration1.png"
                  alt="Illustration AMAP"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Indicateur de défilement */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center text-green-700">
            <span className="text-sm font-medium mb-2 font-body">Découvrir</span>
            <svg 
              className="w-6 h-6 animate-pulse" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Section suivante - À compléter plus tard */}
      <section className="min-h-screen py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">
              Prochaine section
            </h2>
            <p className="text-xl text-gray-600 font-body">
              Contenu à venir...
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
