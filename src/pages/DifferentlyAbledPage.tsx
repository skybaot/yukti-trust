import React from 'react';
import { motion } from 'framer-motion';
import { Users, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const DifferentlyAbledPage = () => {
  const { t } = useTranslation();

  const serviceDetails = {
    icon: Users,
    title: t('services.differentlyAbled.title', 'Differently-Abled Services'),
    description: t('services.differentlyAbled.description', 'Comprehensive support and resources for differently-abled individuals.'),
    details: [
      { text: t('services.differentlyAbled.details.jobs', 'Personalized job matching and career development'), link: '/careers' },
      { text: t('services.differentlyAbled.details.healthcare', 'Access to healthcare services and medical resources'), link: '/healthcare' },
      { text: t('services.differentlyAbled.details.policies', 'Information about policies and legal rights'), link: '/policies' },
      { text: t('services.differentlyAbled.details.support', 'Emotional support and counseling services'), link: '/counseling' },
      { text: t('services.differentlyAbled.details.tools', 'Accessibility tools and assistive technology'), link: '/tools' },
      { text: t('services.differentlyAbled.details.events', 'Community events and social activities'), link: '/events' }
    ],
    image: '/images/services/differently-abled.jpg'
  };

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link
          to="/"
          className="inline-flex items-center text-secondary-600 hover:text-secondary-700 mb-8"
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
              <Users className="text-secondary-600 w-12 h-12 mr-4" />
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
                      className="group flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-primary-100 hover:border-secondary-400"
                    >
                      <span className="h-2 w-2 bg-secondary-600 rounded-full mr-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                      <span className="text-primary-700 font-roboto group-hover:text-secondary-600 transition-colors duration-300">
                        {detail.text}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            <button className="w-full bg-secondary-600 text-white py-3 px-6 rounded-lg hover:bg-secondary-700 transition-colors duration-200 font-poppins">
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

export default DifferentlyAbledPage;