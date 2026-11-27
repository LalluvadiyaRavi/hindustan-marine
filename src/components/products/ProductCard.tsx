import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, ArrowRight, Package } from 'lucide-react';
import type { Product } from '../../types/product';
import { getProductWhatsAppUrl } from '../../utils/whatsapp';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const whatsappUrl = getProductWhatsAppUrl(product.name, product.model, product.category);

  return (
    <div className="bg-white rounded-xl border border-surface-border hover:border-surface-borderHover hover:shadow-elevated transition-all flex flex-col h-full overflow-hidden group">
      
      {/* Product Image / Visual Area */}
      <div className="relative h-44 bg-surface-soft border-b border-surface-border flex items-center justify-center p-4">
        <div className="w-14 h-14 rounded-xl bg-white border border-surface-border flex items-center justify-center shadow-xs text-marine-700 group-hover:scale-105 transition-transform">
          <Package className="w-7 h-7 text-marine-700" />
        </div>

        <span className="absolute top-3 left-3 text-[11px] font-medium text-charcoal-500 bg-white px-2 py-0.5 rounded border border-surface-border">
          {product.category}
        </span>
      </div>

      {/* Product Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <Link to={`/products/${product.slug}`} className="block group-hover:text-marine-700 transition-colors">
            <h3 className="text-base font-bold text-charcoal-900 font-heading line-clamp-1">
              {product.name}
            </h3>
          </Link>

          <p className="text-xs text-charcoal-600 line-clamp-2 leading-relaxed">
            {product.shortDescription || product.description}
          </p>
        </div>

        {/* Card Action Buttons */}
        <div className="pt-3 border-t border-surface-border/60 grid grid-cols-2 gap-2">
          <Link
            to={`/products/${product.slug}`}
            className="inline-flex items-center justify-center gap-1 px-3 py-2 rounded-lg border border-surface-border bg-surface-warm text-charcoal-700 hover:bg-surface-soft hover:text-charcoal-900 text-xs font-semibold transition-colors"
          >
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5 text-charcoal-400" />
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1 px-3 py-2 rounded-lg bg-accent-whatsapp text-white hover:bg-accent-whatsappHover text-xs font-semibold transition-colors shadow-xs"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-white" />
            <span>Inquire</span>
          </a>
        </div>
      </div>

    </div>
  );
};
