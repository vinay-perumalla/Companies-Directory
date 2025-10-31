// Mock company data
const mockCompanies = [
  {
    id: 1,
    name: "Infosys Technologies",
    location: "Bengaluru, Karnataka",
    industry: "Information Technology",
    employees: 250000,
    founded: 1981,
    description: "Global leader in consulting, technology, and outsourcing solutions"
  },
  {
    id: 2,
    name: "Reliance Industries Limited",
    location: "Mumbai, Maharashtra",
    industry: "Energy & Petrochemicals",
    employees: 236000,
    founded: 1973,
    description: "India's largest private sector company with diversified businesses"
  },
  {
    id: 3,
    name: "Apollo Hospitals",
    location: "Chennai, Tamil Nadu",
    industry: "Healthcare",
    employees: 62000,
    founded: 1983,
    description: "Leading healthcare provider in India with hospitals and clinics"
  },
  {
    id: 4,
    name: "HDFC Bank",
    location: "Mumbai, Maharashtra",
    industry: "Finance & Banking",
    employees: 177000,
    founded: 1994,
    description: "Top private sector bank offering a wide range of financial services"
  },
  {
    id: 5,
    name: "Byju's Learning App",
    location: "Bengaluru, Karnataka",
    industry: "Education Technology",
    employees: 48000,
    founded: 2011,
    description: "India’s leading online education and learning platform"
  },
  {
    id: 6,
    name: "Flipkart Internet Pvt. Ltd.",
    location: "Bengaluru, Karnataka",
    industry: "E-commerce & Retail",
    employees: 30000,
    founded: 2007,
    description: "India's top e-commerce company offering products across categories"
  },
  {
    id: 7,
    name: "Tata Consultancy Services (TCS)",
    location: "Mumbai, Maharashtra",
    industry: "Information Technology",
    employees: 600000,
    founded: 1968,
    description: "One of the world's largest IT services and consulting companies"
  },
  {
    id: 8,
    name: "Zomato Limited",
    location: "Gurugram, Haryana",
    industry: "Food & Beverage",
    employees: 4000,
    founded: 2008,
    description: "Popular food delivery and restaurant discovery platform"
  },
  {
    id: 9,
    name: "Mahindra & Mahindra Ltd.",
    location: "Mumbai, Maharashtra",
    industry: "Automotive & Manufacturing",
    employees: 26000,
    founded: 1945,
    description: "Leading manufacturer of automobiles and farm equipment in India"
  },
  {
    id: 10,
    name: "Zee Entertainment Enterprises",
    location: "Noida, Uttar Pradesh",
    industry: "Media & Broadcasting",
    employees: 3500,
    founded: 1992,
    description: "Leading media and entertainment company with global presence"
  },
  {
    id: 11,
    name: "Wipro Limited",
    location: "Bengaluru, Karnataka",
    industry: "Information Technology",
    employees: 240000,
    founded: 1945,
    description: "IT services and consulting company offering global business solutions"
  },
  {
    id: 12,
    name: "Hindustan Unilever Limited (HUL)",
    location: "Mumbai, Maharashtra",
    industry: "Consumer Goods",
    employees: 21000,
    founded: 1933,
    description: "Leading FMCG company offering household and personal care products"
  },
  {
    id: 13,
    name: "Ola Cabs (ANI Technologies)",
    location: "Bengaluru, Karnataka",
    industry: "Transportation & Mobility",
    employees: 12000,
    founded: 2010,
    description: "App-based ride-sharing platform connecting drivers and passengers"
  },
  {
    id: 14,
    name: "Paytm (One97 Communications)",
    location: "Noida, Uttar Pradesh",
    industry: "Fintech",
    employees: 10000,
    founded: 2010,
    description: "India’s largest digital payments and financial services platform"
  },
  {
    id: 15,
    name: "Adani Group",
    location: "Ahmedabad, Gujarat",
    industry: "Infrastructure & Energy",
    employees: 23000,
    founded: 1988,
    description: "Diversified conglomerate with businesses in energy, ports, and logistics"
  },
  {
    id: 16,
    name: "Bharat Biotech",
    location: "Hyderabad, Telangana",
    industry: "Pharmaceuticals & Biotechnology",
    employees: 2000,
    founded: 1996,
    description: "Biotechnology company known for vaccine research and manufacturing"
  },
  {
    id: 17,
    name: "Freshworks Inc.",
    location: "Chennai, Tamil Nadu",
    industry: "Software as a Service (SaaS)",
    employees: 5000,
    founded: 2010,
    description: "Customer engagement and support software for global businesses"
  },
  {
    id: 18,
    name: "Nykaa (FSN E-Commerce)",
    location: "Mumbai, Maharashtra",
    industry: "E-commerce & Beauty",
    employees: 2500,
    founded: 2012,
    description: "Online beauty and fashion retail platform catering to Indian consumers"
  },
  {
    id: 19,
    name: "Swiggy",
    location: "Bengaluru, Karnataka",
    industry: "Food & Beverage",
    employees: 8000,
    founded: 2014,
    description: "Online food delivery and quick-commerce platform across Indian cities"
  },
  {
    id: 20,
    name: "JSW Steel Ltd.",
    location: "Mumbai, Maharashtra",
    industry: "Manufacturing & Steel",
    employees: 22000,
    founded: 1982,
    description: "Leading integrated steel manufacturing company in India"
  }
];


// /**
//  * Simulates an API call to fetch companies
//  * Replace this with actual API endpoint
//  * @returns {Promise<Array>} Array of company objects
//  */
export const fetchCompanies = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockCompanies);
    }, 800);
  });
};

