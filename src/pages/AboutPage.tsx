import React from 'react';
// Remove unused imports and add proper type definitions
import { motion } from 'framer-motion';
import { Heart, Users, Brain, Sparkles, Smile as Family } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Import fonts
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';

// Add interface for special groups
interface SpecialGroup {
  title: string;
  services: string[];
}

const AboutPage = () => {
  const { t } = useTranslation();

  const specialGroups: SpecialGroup[] = [
    {
      title: t('about.specialGroups.differently-abled.title'),
      services: t('about.specialGroups.differently-abled.services', { returnObjects: true }) as string[]
    },
    {
      title: t('about.specialGroups.elders.title'),
      services: t('about.specialGroups.elders.services', { returnObjects: true }) as string[]
    },
    {
      title: t('about.specialGroups.orphans.title'),
      services: t('about.specialGroups.orphans.services', { returnObjects: true }) as string[]
    }
  ];

  const missionGoals = [
    {
      icon: Users,
      title: t('about.mission.goals.differently-abled'),
      description: t('about.mission.goals.differently-abled-desc')
    },
    {
      icon: Heart,
      title: t('about.mission.goals.elders'),
      description: t('about.mission.goals.elders-desc')
    },
    {
      icon: Brain,
      title: t('about.mission.goals.orphans'),
      description: t('about.mission.goals.orphans-desc')
    },
    {
      icon: Family,
      title: t('about.mission.goals.community'),
      description: t('about.mission.goals.community-desc')
    },
    {
      icon: Sparkles,
      title: t('about.mission.goals.world'),
      description: t('about.mission.goals.world-desc')
    }
  ];

  return (
    <div className="pt-16 font-sans">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <img 
              src="public\images\brands\logo.svg.webp" 
              alt="Yukti Trust Logo" 
              className="w-48 h-48 mx-auto mb-8"
            />
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-8">
              {t('about.title')}
            </h1>
            <p className="text-2xl font-light leading-relaxed text-primary-800 max-w-3xl mx-auto">
              {t('about.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold tracking-tight mb-8 text-primary-900">Our Story</h2>
              <p className="text-lg leading-relaxed text-primary-700 mb-6">
                {t('about.story.content')}
              </p>
              <p className="text-lg leading-relaxed text-primary-700">
                {t('about.story.birth')}
              </p>
            </div>
            <div className="relative">
              <img
                src="public\images\brands\commitment.webp"
                alt="Community Support"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-secondary-600/20 rounded-lg"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-gradient-to-b from-accent-50 via-white to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold tracking-tight mb-6 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Our Mission
            </h2>
            <p className="text-2xl font-light text-primary-800 max-w-3xl mx-auto">
              {t('about.mission.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {missionGoals.map((goal, index) => (
              <motion.div
                key={goal.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <goal.icon className="text-secondary-500 w-14 h-14 mb-6" />
                <h3 className="text-2xl font-semibold tracking-tight mb-4 text-primary-900">{goal.title}</h3>
                <p className="text-lg leading-relaxed text-primary-700">{goal.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Groups Section */}
      <section className="py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              {t('about.specialGroups.title')}
            </h2>
            <p className="text-primary-700">
              {t('about.specialGroups.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            // In the Special Groups section, update the service mapping with proper types
            {specialGroups.map((group, index) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gradient-to-br from-white to-primary-50 p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-6 text-primary-900">{group.title}</h3>
                <ul className="space-y-4">
                  {group.services.map((service: string, idx: number) => (
                    <li key={idx} className="flex items-start text-primary-700">
                      <span className="h-2 w-2 bg-secondary-500 rounded-full mr-3 mt-2"></span>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-24 bg-gradient-to-b from-white to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold tracking-tight mb-8 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              {t('about.why.title')}
            </h2>
            <p className="text-xl leading-relaxed text-primary-800 mb-10">
              {t('about.why.content')}
            </p>
            <p className="text-2xl font-semibold tracking-tight text-primary-900">
              {t('about.why.tagline')}
            </p>
            <p className="text-lg text-primary-700 mt-6">
              {t('about.why.join')} 💙✨
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;