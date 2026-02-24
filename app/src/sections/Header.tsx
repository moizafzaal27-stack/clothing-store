import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';

export function Header() {
  const { totalItems, setIsCartOpen } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 
              className="text-2xl font-bold text-gray-900 cursor-pointer"
              onClick={() => window.location.reload()}
            >
              StyleHub
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Men</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Women</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Shoes</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Accessories</a>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-gray-700 hover:text-gray-900 transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-700"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3">
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Men</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Women</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Shoes</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Accessories</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
