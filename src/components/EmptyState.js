import React from 'react';
import { Building2 } from 'lucide-react';

const EmptyState = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-12 text-center">
      <Building2 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-gray-700 mb-2">No companies found</h3>
      <p className="text-gray-500">Try adjusting your filters to see more results</p>
    </div>
  );
};

export default EmptyState;