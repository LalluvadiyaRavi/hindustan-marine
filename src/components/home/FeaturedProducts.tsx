import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { products } from '../../data/products';
import { ProductCard } from '../products/ProductCard';

export const FeaturedProducts: React.FC = () => {
  const featuredList = products.slice(0, 6);

  return (
    <section className="py-16 sm:py-24 bg-surface-warm border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs uppercase font-bold tracking-wider text-accent-orange">
              Product Overview
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal-900 font-heading">
              Featured Components & Machine Spares
            </h2>
            <p className="text-base text-charcoal-600 leading-relaxed font-normal">
              A sample of the electronic and industrial components we supply. Click on any item for details or request an instant quotation on WhatsApp.
            </p>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-marine-900 hover:text-accent-orange transition-colors shrink-0"
          >
            <span>View Full Catalogue</span>
            <ArrowRight className="w-4 h-4 text-accent-orange" />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredList.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
};
