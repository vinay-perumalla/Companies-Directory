import React from 'react';
import { Building2 } from 'lucide-react';

const Header = ({ viewMode, setViewMode }) => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Building2 className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Companies Directory</h1>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('card')}
              className={`px-4 py-2 rounded-lg transition ${
                viewMode === 'card' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Cards
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`px-4 py-2 rounded-lg transition ${
                viewMode === 'table' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Table
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;