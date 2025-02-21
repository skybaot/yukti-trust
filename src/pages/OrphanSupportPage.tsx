import React from 'react';
// Similar structure as DifferentlyAbledPage but with orphan support specific content
import { motion } from 'framer-motion';
import { School, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const OrphanSupportPage = () => {
  const { t } = useTranslation();

  const serviceDetails = {
    icon: School,
    title: t('services.orphans.title', 'Orphan Support Services'),
    description: t('services.orphans.description', 'Nurturing young lives with education, care, and opportunities.'),
    details: [
      { text: t('services.orphans.details.education', 'Educational support and scholarships'), link: '/education' },
      { text: t('services.orphans.details.mental', 'Mental health and counseling services'), link: '/mental-health' },
      { text: t('services.orphans.details.skills', 'Skill development programs'), link: '/skills' },
      { text: t('services.orphans.details.adoption', 'Adoption support and guidance'), link: '/adoption' },
      { text: t('services.orphans.details.recreation', 'Recreational activities and events'), link: '/recreation' },
      { text: t('services.orphans.details.career', 'Career guidance and mentorship'), link: '/career-guidance' }
    ],
    image: '/images/services/orphan-support.jpg'
  };

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link
          to="/"
          className="inline-flex items-center text-secondary-600 hover:text-secondary-700 mb-8 font-poppins"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          {t('common.backToHome', 'Back to Home')}
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex items-center mb-6">
              <School className="text-secondary-600 w-12 h-12 mr-4" />
              <h1 className="text-4xl font-bold font-poppins">{serviceDetails.title}</h1>
            </div>
            <p className="text-xl text-primary-600 mb-8 font-roboto">{serviceDetails.description}</p>
            
            <div className="bg-primary-50 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-6 font-poppins">
                {t('services.whatWeOffer', 'What We Offer')}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {serviceDetails.details.map((detail, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={detail.link}
                      className="group flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-primary-100 hover:border-secondary-400"
                    >
                      <button className="text-primary-700 font-roboto group-hover:text-secondary-600 transition-colors duration-300">
                        {detail.text}
                      </button>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            <button className="w-full bg-secondary-600 text-white py-3 px-6 rounded-lg hover:bg-secondary-700 transition-all duration-300 font-poppins hover:shadow-lg">
              {t('services.getStarted', 'Get Started')}
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative h-[600px]"
          >
            <img
              src={serviceDetails.image}
              alt={serviceDetails.title}
              className="rounded-xl shadow-xl w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-secondary-600/20 rounded-xl" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OrphanSupportPage;