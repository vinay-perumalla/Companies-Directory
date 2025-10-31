import React from 'react';
import { Briefcase, MapPin, Users } from 'lucide-react';

const CompanyCard = ({ company }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2"></div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{company.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{company.description}</p>
        
        <div className="space-y-2">
          <div className="flex items-center text-gray-700">
            <Briefcase className="w-4 h-4 mr-2 text-blue-600" />
            <span className="text-sm">{company.industry}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <MapPin className="w-4 h-4 mr-2 text-blue-600" />
            <span className="text-sm">{company.location}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <Users className="w-4 h-4 mr-2 text-blue-600" />
            <span className="text-sm">{company.employees} employees</span>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-500">Founded in {company.founded}</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;