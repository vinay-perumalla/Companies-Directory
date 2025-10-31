import React, { useState, useEffect } from 'react';
import { Loader2, AlertCircle } from 'lucide-react';
import Header from './components/Header';
import FilterSection from './components/FilterSection';
import CompanyCard from './components/CompanyCard';
import CompanyTable from './components/CompanyTable';
import EmptyState from './components/EmptyState';
import { fetchCompanies } from './services/api';
import { filterCompanies } from './utils/filterrUtils';

const App = () => {
  const [companies, setCompanies] = useState([]);
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [viewMode, setViewMode] = useState('card');
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  useEffect(() => {
    const loadCompanies = async () => {
      try {
        setLoading(true);
        const data = await fetchCompanies();
        setCompanies(data);
        setFilteredCompanies(data);
        setError(null);
      } catch (err) {
        setError('Failed to load companies. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    
    loadCompanies();
  }, []);

  useEffect(() => {
    const filtered = filterCompanies(companies, {
      searchTerm,
      selectedIndustry,
      selectedLocation
    });
    setFilteredCompanies(filtered);
  }, [searchTerm, selectedIndustry, selectedLocation, companies]);

  const industries = ['all', ...new Set(companies.map(c => c.industry))];
  const locations = ['all', ...new Set(companies.map(c => c.location))];

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedIndustry('all');
    setSelectedLocation('all');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600 text-lg">Loading companies...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <p className="text-gray-800 text-center text-lg">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header viewMode={viewMode} setViewMode={setViewMode} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <FilterSection
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedIndustry={selectedIndustry}
          setSelectedIndustry={setSelectedIndustry}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
          industries={industries}
          locations={locations}
          totalCompanies={companies.length}
          filteredCount={filteredCompanies.length}
          onReset={resetFilters}
        />

        {filteredCompanies.length === 0 ? (
          <EmptyState />
        ) : viewMode === 'card' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCompanies.map(company => (
              <CompanyCard key={company.id} company={company} />
            ))}
          </div>
        ) : (
          <CompanyTable companies={filteredCompanies} />
        )}
      </main>
    </div>
  );
};

export default App;