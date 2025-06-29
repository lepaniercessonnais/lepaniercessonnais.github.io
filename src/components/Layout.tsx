import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
     
      <main className="flex-grow">
        {children}
      </main>
      <footer className="relative bg-gradient-to-br from-green-50 via-green-100 to-green-200 py-12">
        {/* Effet de grain */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        {/* Dégradé supplémentaire */}
        <div className="absolute inset-0 bg-gradient-to-t from-green-100/30 via-transparent to-green-50/20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-800 font-display">Le Panier Cessonnais</h3>
              <p className="text-green-700 font-body">
                Association pour le Maintien d'une Agriculture Paysanne
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-800 font-display">Contact</h3>
              <p className="text-green-700 font-body">
                Email: lepaniercessonnais@gmail.com<br />
                Téléphone: 01 23 45 67 89
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-800 font-display">Suivez-nous</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-green-700 hover:text-green-800 transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-green-700 hover:text-green-800 transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.875-.385-.875-.875s.385-.875.875-.875.875.385.875.875-.385.875-.875.875zm-7.83 12.435c-2.026 0-3.744-.875-5.025-2.156C2.573 16.405 1.698 14.687 1.698 12.661s.875-3.744 2.156-5.025c1.281-1.281 2.999-2.156 5.025-2.156s3.744.875 5.025 2.156c1.281 1.281 2.156 2.999 2.156 5.025s-.875 3.744-2.156 5.025c-1.281 1.281-2.999 2.156-5.025 2.156z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-green-200 text-center text-green-700 font-body">
            <p>&copy; 2024 Le Panier Cessonnais. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 