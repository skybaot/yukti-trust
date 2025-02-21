import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { School, Heart, Users } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  motivation: string;
  image: string;
}

const Services = () => {
  const { t } = useTranslation();

  const services: Service[] = [
    {
      id: 'differently-abled',
      icon: Users,
      title: t('services.differently-abled.title'),
      description: t('services.differently-abled.description'),
      motivation: 'Empowering through employment opportunities, vocational training, and inclusive workplace support.',
      image: '/images/brands/jobs.webp'
    },
    {
      id: 'elders',
      icon: Heart,
      title: t('services.elders.title'),
      description: t('services.elders.description'),
      motivation: 'Professional elder care with support services, healthcare assistance, and dignified living environments.',
      image: '/images/brands/elder care.webp'
    },
    {
      id: 'orphans',
      icon: School,
      title: t('services.orphans.title'),
      description: t('services.orphans.description'),
      motivation: 'Access to quality education, healthcare, and a loving, nurturing environment for every child.',
      image: '/images/brands/orphans.webp'
    },
    {
      id: 'volunteers',
      icon: Heart,
      title: t('services.volunteers.title'),
      description: t('services.volunteers.description'),
      motivation: 'Join our mission to create positive change through dedicated service and compassionate care.',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
    }
  ];

  return (
    <section className="section-container">
      <div className="section-content">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent font-poppins">
            {t('services.title', 'Our Services & Impact')}
          </h2>
          <p className="text-xl text-primary-700 max-w-3xl mx-auto font-roboto">
            {t('services.description', 'Discover how we\'re making a difference in our community through dedicated service and compassionate care.')}
          </p>
        </motion.div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className={`p-8 rounded-2xl bg-gradient-to-br from-white to-primary-50 shadow-lg ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <service.icon className="w-16 h-16 text-secondary-500 mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-primary-900 font-poppins">{service.title}</h3>
                <p className="text-lg text-primary-700 mb-6 font-roboto">{service.description}</p>
                <div className="p-4 bg-white/80 rounded-lg border border-primary-100">
                  <p className="text-primary-800 italic font-roboto">{service.motivation}</p>
                </div>
              </div>
              <motion.div
                className="relative h-[300px] rounded-2xl overflow-hidden shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent"></div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;