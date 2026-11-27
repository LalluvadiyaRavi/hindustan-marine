import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cpu, 
  Layers, 
  Zap, 
  Settings2, 
  Cog, 
  Package, 
  ArrowRight 
} from 'lucide-react';
import { categories } from '../../data/categories';
import { SectionHeading } from '../common/SectionHeading';

export const CategoryGrid: React.FC = () => {
  // Filter out 'all' category for the grid cards
  const displayCategories = categories.filter((c) => c.slug !== 'all');

  const getCategoryIcon = (slug: string) => {
    switch (slug) {
      case 'electronic-components':
        return <Cpu className="w-5 h-5 text-tech-orange" />;
      case 'industrial-components':
        return <Layers className="w-5 h-5 text-tech-cyan" />;
      case 'electrical-parts':
        return <Zap className="w-5 h-5 text-amber-500" />;
      case 'automation-parts':
        return <Settings2 className="w-5 h-5 text-emerald-600" />;
      case 'machine-parts':
        return <Cog className="w-5 h-5 text-marine-700" />;
      default:
        return <Package className="w-5 h-5 text-slate-600" />;
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with View All Link */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            badge="Product Catalogue // Categories"
            title="Explore Product Categories"
            subtitle="Browse parts and industrial components. Select any category to view available items or send a direct inquiry."
          />

          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-marine-900 hover:text-tech-orange transition-colors shrink-0"
          >
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4 text-tech-orange" />
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayCategories.map((category) => (
            <Link
              key={category.id}
              to={`/products?category=${category.slug}`}
              className="bg-slate-50 rounded-xl border border-slate-200 p-6 hover:border-slate-300 hover:bg-white hover:shadow-tech-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-xs group-hover:border-slate-300 transition-colors">
                    {getCategoryIcon(category.slug)}
                  </div>
                  {category.badge && (
                    <span className="font-mono text-[10px] text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                      {category.badge}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-base font-bold text-marine-900 font-heading group-hover:text-tech-orange transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                    {category.description || 'Industrial parts and component supply.'}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-medium text-slate-500 group-hover:text-marine-900">
                <span>Browse Category</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-tech-orange group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};
