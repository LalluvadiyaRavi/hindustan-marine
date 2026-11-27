import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  MessageSquare, 
  ArrowLeft, 
  CheckCircle2, 
  FileText, 
  HelpCircle,
  Package,
  Send,
  ArrowRight
} from 'lucide-react';
import { products } from '../data/products';
import { getProductWhatsAppUrl } from '../utils/whatsapp';
import { ProductCard } from '../components/products/ProductCard';
import { usePageMeta } from '../hooks/usePageMeta';

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Find product by slug
  const product = products.find((p) => p.slug === slug);

  usePageMeta({
    title: product ? product.name : 'Product Details',
    description: product ? (product.shortDescription || product.description) : 'Product specification and quotation from Hindustan Marine.'
  });

  // If product not found
  if (!product) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 py-16 px-4">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl border border-surface-border text-center space-y-4 shadow-xs">
          <div className="w-14 h-14 rounded-xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mx-auto">
            <HelpCircle className="w-7 h-7" />
          </div>
          <h2 className="text-xl font-bold text-charcoal-900 font-heading">
            Product Not Located
          </h2>
          <p className="text-xs text-charcoal-600">
            The requested product catalogue item does not exist or has been updated.
          </p>
          <div className="pt-2">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-marine-900 text-white text-xs font-semibold hover:bg-marine-800 transition-colors shadow-xs"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Browse Product Catalogue</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const modelOrPart = product.modelNumber || product.model || product.partNumber || 'Details available on request';
  const whatsappUrl = getProductWhatsAppUrl(
    product.name,
    modelOrPart,
    product.category
  );

  // Related products
  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .concat(products.filter((p) => p.id !== product.id && p.category !== product.category))
    .slice(0, 3);

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Breadcrumb Navigation Bar */}
      <div className="bg-white border-b border-surface-border py-3 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-charcoal-500 overflow-x-auto">
          <Link to="/" className="hover:text-marine-900 shrink-0">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-marine-900 shrink-0">Products</Link>
          <span>/</span>
          <span className="text-charcoal-700 shrink-0">{product.category}</span>
          <span>/</span>
          <span className="text-marine-900 font-semibold truncate">{product.name}</span>
        </div>
      </div>

      {/* Main Product Overview Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        <div className="bg-white rounded-2xl border border-surface-border shadow-xs overflow-hidden mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 lg:p-10">
            
            {/* Left: Product Image / Schematic Area */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative h-72 sm:h-84 lg:h-96 bg-surface-soft rounded-xl border border-surface-border flex flex-col items-center justify-center p-6 text-center overflow-hidden">
                <div className="w-20 h-20 rounded-2xl bg-white border border-surface-border flex items-center justify-center shadow-xs text-marine-700 mb-3">
                  <Package className="w-10 h-10 text-marine-700" />
                </div>
                <div className="text-xs font-semibold text-charcoal-700">
                  {product.category}
                </div>
                <div className="text-[11px] text-charcoal-400 mt-1 max-w-xs">
                  {product.modelNumber || product.model || product.partNumber || 'Details available on request'}
                </div>
              </div>
            </div>

            {/* Right: Product Details & Inquiries */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-semibold text-accent-orange bg-accent-orangeLight px-2.5 py-0.5 rounded border border-orange-200">
                    {product.category}
                  </span>
                  {(product.modelNumber || product.model) && (
                    <span className="text-xs text-charcoal-600 bg-surface-soft px-2.5 py-0.5 rounded border border-surface-border">
                      Model: {product.modelNumber || product.model}
                    </span>
                  )}
                  {product.partNumber && (
                    <span className="text-xs text-charcoal-600 bg-surface-soft px-2.5 py-0.5 rounded border border-surface-border">
                      Part #: {product.partNumber}
                    </span>
                  )}
                </div>

                <h1 className="text-2xl sm:text-3xl font-extrabold text-charcoal-900 font-heading leading-tight">
                  {product.name}
                </h1>

                <p className="text-sm text-charcoal-600 leading-relaxed">
                  {product.shortDescription || product.description}
                </p>

                {/* Availability & Quotation Status Box */}
                <div className="bg-surface-warm p-4 rounded-xl border border-surface-border grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-charcoal-400 block text-[11px]">AVAILABILITY</span>
                    <span className="font-semibold text-charcoal-900 flex items-center gap-1.5 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      {product.inquiryAvailability || 'Inquire for Availability'}
                    </span>
                  </div>
                  <div>
                    <span className="text-charcoal-400 block text-[11px]">PRICING</span>
                    <span className="font-semibold text-accent-orange mt-0.5 block">
                      Quotation upon Request
                    </span>
                  </div>
                </div>

              </div>

              {/* Inquiry Action Box */}
              <div className="pt-6 border-t border-surface-border space-y-4">
                <div className="flex flex-col sm:flex-row gap-3 items-stretch">
                  {/* WhatsApp Instant Quote Button */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-accent-whatsapp hover:bg-accent-whatsappHover text-white text-sm font-bold shadow-xs transition-all"
                  >
                    <MessageSquare className="w-5 h-5 fill-white" />
                    <span>Inquire for Price via WhatsApp</span>
                  </a>

                  {/* Contact Page Link */}
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-marine-900 hover:bg-marine-800 text-white text-sm font-semibold transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send RFQ Form</span>
                  </Link>
                </div>

                <p className="text-[11px] text-charcoal-500 text-center">
                  Direct WhatsApp inquiries receive prompt confirmation of technical details, availability, and pricing.
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* Detailed Specifications & Applications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Specifications Table */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-surface-border">
              <FileText className="w-4 h-4 text-accent-orange" />
              <h2 className="text-base font-bold text-charcoal-900 font-heading">
                Technical Specifications
              </h2>
            </div>

            {product.specifications && product.specifications.length > 0 ? (
              <div className="bg-white rounded-xl border border-surface-border overflow-hidden shadow-xs">
                <table className="w-full text-xs text-left">
                  <tbody className="divide-y divide-surface-border/60">
                    {product.specifications.map((spec, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-surface-warm/50' : 'bg-white'}>
                        <td className="px-4 py-3 font-medium text-charcoal-500 w-1/3 border-r border-surface-border/60">
                          {spec.label}
                        </td>
                        <td className="px-4 py-3 text-charcoal-800 font-medium">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="bg-white p-6 rounded-xl border border-surface-border text-xs text-charcoal-500 text-center">
                Details available on request. Contact our team with your technical requirements.
              </div>
            )}
          </div>

          {/* Practical Applications & Description */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-surface-border">
              <Package className="w-4 h-4 text-marine-700" />
              <h2 className="text-base font-bold text-charcoal-900 font-heading">
                Applications & Sourcing Notes
              </h2>
            </div>

            <div className="bg-white rounded-xl border border-surface-border p-5 shadow-xs space-y-4">
              <p className="text-xs text-charcoal-600 leading-relaxed">
                {product.description || 'Suitable for marine and industrial maintenance and replacement.'}
              </p>

              {product.applications && product.applications.length > 0 ? (
                <div className="space-y-2 pt-2 border-t border-surface-border/60">
                  <span className="text-[11px] font-semibold text-charcoal-700 uppercase">
                    Key Applications:
                  </span>
                  <ul className="space-y-1.5 text-xs text-charcoal-600">
                    {product.applications.map((app, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="text-xs text-charcoal-400">
                  Details available on request.
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="space-y-6 pt-6 border-t border-surface-border">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs uppercase font-bold text-accent-orange">
                  Catalogue Recommendations
                </span>
                <h3 className="text-xl font-bold text-charcoal-900 font-heading">
                  Related Products & Components
                </h3>
              </div>

              <Link
                to="/products"
                className="text-xs font-semibold text-marine-900 hover:text-accent-orange transition-colors flex items-center gap-1"
              >
                <span>View Full Catalog</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((relProduct) => (
                <ProductCard key={relProduct.id} product={relProduct} />
              ))}
            </div>
          </div>
        )}

      </div>

    </div>
  );
};
