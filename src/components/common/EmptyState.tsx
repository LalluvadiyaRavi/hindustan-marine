import React from 'react';
import { SearchX, RotateCcw } from 'lucide-react';
import { Button } from './Button';

interface EmptyStateProps {
  title?: string;
  description?: string;
  onReset?: () => void;
  actionText?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title = 'No Products Found',
  description = 'Try adjusting your search terms or selecting a different category from the filter above.',
  onReset,
  actionText = 'Reset Search & Filters',
}) => {
  return (
    <div className="text-center py-16 px-4 bg-white rounded-xl border border-slate-200 border-dashed max-w-lg mx-auto my-8">
      <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-slate-400 border border-slate-200">
        <SearchX className="w-7 h-7" />
      </div>
      <h3 className="text-lg font-bold text-marine-900 font-heading mb-2">
        {title}
      </h3>
      <p className="text-sm text-slate-500 max-w-sm mx-auto mb-6">
        {description}
      </p>
      {onReset && (
        <Button
          variant="outline"
          size="sm"
          onClick={onReset}
          icon={<RotateCcw className="w-4 h-4" />}
        >
          {actionText}
        </Button>
      )}
    </div>
  );
};
