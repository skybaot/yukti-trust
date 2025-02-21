import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('contact.title')}</h2>
          <p className="text-gray-600">
            {t('contact.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-purple-50 p-8 rounded-xl"
          >
            <div className="flex items-center mb-6">
              <Mail className="text-purple-600 mr-4" size={24} />
              <div>
                <h3 className="text-lg font-semibold">{t('contact.form.email')}</h3>
                <a href="mailto:vyasyuktidipak@gmail.com" className="text-purple-600 hover:text-purple-700">
                  vyasyuktidipak@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <Phone className="text-purple-600 mr-4" size={24} />
              <div>
                <h3 className="text-lg font-semibold">{t('contact.form.phone')}</h3>
                <a href="tel:+919638444942" className="text-purple-600 hover:text-purple-700">
                  +91 96384 44942
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                {t('contact.form.name')}
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                {t('contact.form.email')}
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                {t('contact.form.message')}
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors duration-200"
            >
              {t('contact.form.send')}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;