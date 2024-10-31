import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ProductGrid from './components/ProductGrid';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Categories />
      <ProductGrid />
      
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-green-800 text-white py-8"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Saveurs du Cameroun</h3>
              <p className="text-green-200">
                Votre marketplace de produits alimentaires<br />
                locaux camerounais de qualité.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Liens Rapides</h4>
              <ul className="space-y-2 text-green-200">
                {['À propos', 'Produits', 'Régions', 'Contact'].map((item) => (
                  <motion.li key={item} whileHover={{ x: 5 }}>
                    <a href="#" className="hover:text-white transition-colors">
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-green-200">
                <li>Email: contact@saveurscameroun.com</li>
                <li>Tél: +237 6XX XXX XXX</li>
                <li>Douala, Cameroun</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-green-700 text-center text-green-200">
            <p>&copy; 2024 Saveurs du Cameroun. Tous droits réservés.</p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}

export default App;