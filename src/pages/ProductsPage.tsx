import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, Filter, SlidersHorizontal, X } from 'lucide-react';
import { products } from '../data/products';
import { categories } from '../data/categories';
import { ProductCard } from '../components/products/ProductCard';
import { EmptyState } from '../components/common/EmptyState';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';
import { usePageMeta } from '../hooks/usePageMeta';

export const ProductsPage: React.FC = () => {
  usePageMeta({
    title: 'Product Catalogue',
    description: 'Explore electronic components, machine parts, automation hardware, and industrial spares from Hindustan Marine in Bhavnagar, Gujarat.'
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || 'all';
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'default' | 'name-asc' | 'name-desc'>('default');

  // Handle Category selection
  const handleSelectCategory = (slug: string) => {
    if (slug === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', slug);
    }
    setSearchParams(searchParams);
  };

  // Filtered and Sorted Products
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Category Match
      let matchesCategory = true;
      if (activeCategory !== 'all') {
        const categoryObj = categories.find((c) => c.slug === activeCategory);
        if (categoryObj) {
          matchesCategory = product.category.toLowerCase() === categoryObj.name.toLowerCase();
        }
      }

      // Search Query Match (Name, Category, Model Number, Part Number, Tags, Description)
      let matchesSearch = true;
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesTags = product.tags && product.tags.some(tag => tag.toLowerCase().includes(query));
        
        matchesSearch =
          product.name.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query) ||
          (product.modelNumber && product.modelNumber.toLowerCase().includes(query)) ||
          (product.model && product.model.toLowerCase().includes(query)) ||
          (product.partNumber && product.partNumber.toLowerCase().includes(query)) ||
          (product.shortDescription && product.shortDescription.toLowerCase().includes(query)) ||
          (product.description && product.description.toLowerCase().includes(query)) ||
          Boolean(matchesTags);
      }

      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
      if (sortBy === 'name-desc') return b.name.localeCompare(a.name);
      return 0;
    });
  }, [activeCategory, searchQuery, sortBy]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSortBy('default');
    searchParams.delete('category');
    setSearchParams(searchParams);
  };

  const isFiltered = searchQuery.trim() !== '' || activeCategory !== 'all';

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Page Header Banner */}
      <div className="bg-marine-950 text-white border-b border-marine-800 py-12 sm:py-16 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-accent-orange">Products Catalogue</span>
          </div>

          <div className="max-w-3xl space-y-2">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-heading text-white">
              Product Catalogue
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
              Browse industrial electronic components, machine parts, automation hardware, and electrical items. Send instant inquiries for availability and quotations.
            </p>
          </div>
        </div>
      </div>

      {/* Main Catalog Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Controls Toolbar: Search, Filters & Sorting */}
        <div className="bg-white rounded-xl border border-surface-border p-4 sm:p-5 shadow-xs mb-8 space-y-4">
          
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full sm:max-w-md">
              <Search className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by name, category, model, part #, tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 rounded-lg border border-surface-border focus:outline-none focus:ring-2 focus:ring-marine-900 focus:border-marine-900 text-sm bg-surface-warm focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoal-400 hover:text-charcoal-700"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sorting & Count */}
            <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
              <div className="text-xs text-charcoal-500">
                <span className="font-semibold text-charcoal-900">{filteredProducts.length}</span> {filteredProducts.length === 1 ? 'Product' : 'Products'}
              </div>

              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-charcoal-400" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="text-xs border border-surface-border rounded-lg py-2 px-3 bg-white text-charcoal-700 focus:outline-none focus:ring-2 focus:ring-marine-900"
                >
                  <option value="default">Default Order</option>
                  <option value="name-asc">Name: A to Z</option>
                  <option value="name-desc">Name: Z to A</option>
                </select>

                {isFiltered && (
                  <button
                    type="button"
                    onClick={handleResetFilters}
                    className="text-xs text-accent-orange font-semibold hover:underline ml-1"
                  >
                    Reset
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Category Filter Chips */}
          <div className="pt-3 border-t border-surface-border/60">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              <span className="text-xs text-charcoal-400 shrink-0 mr-1 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> Category:
              </span>
              {categories.map((cat) => {
                const isSelected = activeCategory === cat.slug;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => handleSelectCategory(cat.slug)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium shrink-0 transition-all ${
                      isSelected
                        ? 'bg-marine-900 text-white font-semibold shadow-xs'
                        : 'bg-surface-warm text-charcoal-600 hover:bg-surface-soft hover:text-charcoal-900 border border-surface-border'
                    }`}
                  >
                    {cat.name}
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Product Grid / Empty State */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No Matching Products Found"
            description="No items match your current search and category combination. Try adjusting your keywords or reset the filters below."
            onReset={handleResetFilters}
          />
        )}

        {/* Custom Part Sourcing Assistance Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-white border border-surface-border shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-xs font-bold uppercase text-accent-orange">
              Custom Procurement
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-charcoal-900 font-heading">
              Don't see the specific component or machine part you need?
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-600 max-w-2xl leading-relaxed">
              We frequently source specialized, hard-to-find, or discontinued electronics and machinery parts through our Bhavnagar supply network. Send us your nameplate photo or part reference.
            </p>
          </div>

          <a
            href={getGeneralWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-lg bg-accent-orange text-white text-xs sm:text-sm font-semibold hover:bg-accent-orangeHover transition-colors shrink-0 shadow-xs"
          >
            Inquire for Custom Part &rarr;
          </a>
        </div>

      </div>

    </div>
  );
};
