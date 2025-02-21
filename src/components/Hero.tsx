import React from 'react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import ImageSlideshow from './ImageSlideshow';

const Hero = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const words = [t('hero.seen'), t('hero.heard'), t('hero.valued')];
  const [currentWord, setCurrentWord] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev: number) => (prev + 1) % words.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ImageSlideshow />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-6"
        >
          {t('hero.welcome')}
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="text-2xl md:text-4xl font-semibold mb-8 text-white drop-shadow-lg"
        >
          {t('hero.tagline')}{' '}
          <AnimatePresence mode="wait">
            <motion.span
              key={currentWord}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="inline-block text-secondary-400 font-bold"
            >
              {words[currentWord]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.6 }}
          className="text-lg md:text-xl text-white font-medium drop-shadow-lg mb-12 max-w-3xl mx-auto"
        >
          {t('hero.description')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => navigate('/services')}
            className="px-8 py-3 bg-gradient-to-r from-secondary-500 to-primary-500 text-white rounded-full hover:from-secondary-600 hover:to-primary-600 transform hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-xl font-medium"
          >
            {t('hero.explore')}
          </button>
          <button
            onClick={() => navigate('/contact')}
            className="px-8 py-3 bg-white/15 backdrop-blur-sm text-white rounded-full hover:bg-white/25 transform hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-xl border border-white/30 font-medium"
          >
            {t('hero.contact')}
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero