/**
 * Filters companies based on search term, industry, and location
 * @param {Array} companies - Array of company objects
 * @param {Object} filters - Filter criteria
 * @param {string} filters.searchTerm - Search term for name/description
 * @param {string} filters.selectedIndustry - Selected industry filter
 * @param {string} filters.selectedLocation - Selected location filter
 * @returns {Array} Filtered array of companies
 */
export const filterCompanies = (companies, filters) => {
  const { searchTerm, selectedIndustry, selectedLocation } = filters;
  let filtered = [...companies];

  // Apply search filter
  if (searchTerm) {
    filtered = filtered.filter(company =>
      company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  // Apply industry filter
  if (selectedIndustry !== 'all') {
    filtered = filtered.filter(company => company.industry === selectedIndustry);
  }

  // Apply location filter
  if (selectedLocation !== 'all') {
    filtered = filtered.filter(company => company.location === selectedLocation);
  }

  return filtered;
};