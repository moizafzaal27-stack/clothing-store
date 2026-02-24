import { useState } from 'react';
import { CartProvider } from '@/context/CartContext';
import { Header } from '@/sections/Header';
import { Hero } from '@/sections/Hero';
import { ProductGrid } from '@/sections/ProductGrid';
import { CartDrawer } from '@/sections/CartDrawer';
import { Checkout } from '@/sections/Checkout';
import { Footer } from '@/sections/Footer';
import './App.css';

function App() {
  const [showCheckout, setShowCheckout] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        {showCheckout ? (
          <Checkout onBack={() => setShowCheckout(false)} />
        ) : (
          <>
            <Header />
            <main>
              <Hero />
              <ProductGrid />
            </main>
            <Footer />
          </>
        )}
        <CartDrawer onCheckout={() => setShowCheckout(true)} />
      </div>
    </CartProvider>
  );
}

export default App;
