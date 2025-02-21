import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, School, HandHeart, ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ServicesPage = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    {
      id: 'differently-abled',
      icon: Users,
      title: t('services.differently-abled.title'),
      description: t('services.differently-abled.description'),
      category: 'support',
      features: [
        t('services.differently-abled.features.jobs'),
        t('services.differently-abled.features.healthcare'),
        t('services.differently-abled.features.policy'),
        t('services.differently-abled.features.emotional'),
        t('services.differently-abled.features.accessibility'),
        t('services.differently-abled.features.community')
      ],
      image: '/images/brands/jobs.webp'
    },
    {
      id: 'elders',
      icon: Heart,
      title: t('services.elders.title'),
      description: t('services.elders.description'),
      category: 'care',
      features: [
        t('services.elders.features.virtual'),
        t('services.elders.features.stories'),
        t('services.elders.features.healthcare'),
        t('services.elders.features.community'),
        t('services.elders.features.homes'),
        t('services.elders.features.activities')
      ],
      image: '/images/brands/elder care.webp'
    },
    {
      id: 'orphans',
      icon: School,
      title: t('services.orphans.title'),
      description: t('services.orphans.description'),
      category: 'education',
      features: [
        t('services.orphans.features.education'),
        t('services.orphans.features.support'),
        t('services.orphans.features.directory'),
        t('services.orphans.features.mentorship'),
        t('services.orphans.features.skills'),
        t('services.orphans.features.counseling')
      ],
      image: '/images/brands/orphans.webp'
    },
    {
      id: 'volunteers',
      icon: HandHeart,
      title: t('services.volunteers.title'),
      description: t('services.volunteers.description'),
      category: 'volunteer',
      features: [
        t('services.volunteers.features.opportunities'),
        t('services.volunteers.features.programs'),
        t('services.volunteers.features.events'),
        t('services.volunteers.features.impact'),
        t('services.volunteers.features.recognition'),
        t('services.volunteers.features.network')
      ],
      image: '/images/brands/volunteer.webp'
    }
  ];

  const categories = [
    { id: 'all', label: t('services.categories.all') },
    { id: 'support', label: t('services.categories.support') },
    { id: 'care', label: t('services.categories.care') },
    { id: 'education', label: t('services.categories.education') },
    { id: 'volunteer', label: t('services.categories.volunteer') }
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary-100 to-white overflow-hidden border-b-2 border-primary-200">
        <div className="absolute inset-0 bg-grid-primary-700/[0.05] bg-[size:20px_20px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
              {t('services.pageTitle')}
            </h1>
            <p className="text-xl text-primary-700 max-w-3xl mx-auto mb-12">
              {t('services.pageDescription')}
            </p>

            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary-400" />
                <input
                  type="text"
                  placeholder={t('services.searchPlaceholder')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-primary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 transition-all duration-300"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-white text-primary-600 hover:bg-primary-50'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-6">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-primary-100"
              >
                <div className="relative h-64 overflow-hidden border-b border-primary-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <service.icon className="absolute bottom-6 right-6 w-12 h-12 text-white" />
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-primary-900 mb-4 pb-4 border-b border-primary-100">
                    {service.title}
                  </h3>
                  <p className="text-primary-600 mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-primary-700">
                        <span className="h-2 w-2 bg-secondary-500 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={`/services/${service.id}`}
                    className="inline-flex items-center justify-between w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl group-hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <span>{t('services.learnMore')}</span>
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-4 mb-12 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-6 py-2 rounded-full transition-all duration-300 border ${
              selectedCategory === category.id
                ? 'bg-primary-600 text-white shadow-lg border-primary-600'
                : 'bg-white text-primary-600 hover:bg-primary-50 border-primary-200'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;