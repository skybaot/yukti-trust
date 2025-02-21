import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface StatItem {
  number: string;
  label: string;
}

const Stats = () => {
  const { t } = useTranslation();
  
  const stats: StatItem[] = [
    { number: t('stats.livesCount'), label: t('stats.lives') },
    { number: t('stats.communitiesCount'), label: t('stats.communities') },
    { number: t('stats.supportCount'), label: t('stats.support') }
  ];

  return (
    <div className="bg-gradient-to-r from-primary-50 via-white to-secondary-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="text-center bg-gradient-to-br from-white to-primary-50 p-8 rounded-xl shadow-lg border border-primary-100"
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-secondary-500 to-primary-500 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-primary-700 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;