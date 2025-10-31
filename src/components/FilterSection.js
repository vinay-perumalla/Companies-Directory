import React from 'react';
import { Search } from 'lucide-react';

const FilterSection = ({
  searchTerm,
  setSearchTerm,
  selectedIndustry,
  setSelectedIndustry,
  selectedLocation,
  setSelectedLocation,
  industries,
  locations,
  totalCompanies,
  filteredCount,
  onReset
}) => {
  const hasActiveFilters = searchTerm || selectedIndustry !== 'all' || selectedLocation !== 'all';

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Search Input */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Search Companies
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by name or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Industry Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Industry
          </label>
          <select
            value={selectedIndustry}
            onChange={(e) => setSelectedIndustry(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {industries.map(industry => (
              <option key={industry} value={industry}>
                {industry === 'all' ? 'All Industries' : industry}
              </option>
            ))}
          </select>
        </div>

        {/* Location Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Location
          </label>
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {locations.map(location => (
              <option key={location} value={location}>
                {location === 'all' ? 'All Locations' : location}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Filter Summary */}
      <div className="mt-4 flex items-center justify-between">
        <p className="text-sm text-gray-600">
          Showing <span className="font-semibold">{filteredCount}</span> of{' '}
          <span className="font-semibold">{totalCompanies}</span> companies
        </p>
        {hasActiveFilters && (
          <button
            onClick={onReset}
            className="text-sm text-blue-600 hover:text-blue-800 font-medium"
          >
            Reset Filters
          </button>
        )}
      </div>
    </div>
  );
};

export default FilterSection;