// Remove React import as it's not needed
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Services from '../components/Services';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Users, HandHeart, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section with overlay gradient */}
        <div className="relative">
          <div className="relative h-screen">
            <img
              src="https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
              alt="Hero Background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-secondary-900/80"></div>
            <Hero />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        </div>

        <div className="grid gap-32 relative">
          {/* About Us Section */}
          <section className="relative py-32 bg-white">
            <div className="absolute inset-0 bg-primary-50/50"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              <motion.div className="text-center mb-20">
                <h2 className="text-4xl font-bold tracking-tight mb-6 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent font-poppins">
                  {t('home.welcome.title', 'Welcome to Yukti Trust')}
                </h2>
                <p className="text-2xl font-light text-primary-800 max-w-3xl mx-auto font-roboto">
                  {t('home.welcome.subtitle', 'Building Bridges of Care, Support, and Hope in Our Community')}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <motion.div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/brands/commitment.webp"
                    alt="Yukti Trust Commitment"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-transparent"></div>
                </motion.div>
                
                <motion.div className="bg-white/95 backdrop-blur-sm p-10 rounded-2xl shadow-xl border border-primary-100">
                  <h3 className="text-3xl font-bold tracking-tight mb-6 text-primary-900 font-poppins">
                    Our Commitment
                  </h3>
                  <p className="text-lg leading-relaxed text-primary-700 mb-6 font-roboto">
                    At Yukti Trust, we believe in the power of compassionate care and community support. Our mission is to create positive change by:
                  </p>
                  <ul className="space-y-4 mb-6 font-roboto">
                    <li className="flex items-start">
                      <Users className="w-6 h-6 text-secondary-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-primary-700">Supporting differently-abled individuals through inclusive programs and opportunities</span>
                    </li>
                    <li className="flex items-start">
                      <Heart className="w-6 h-6 text-secondary-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-primary-700">Providing care and companionship to elderly citizens in our community</span>
                    </li>
                    <li className="flex items-start">
                      <HandHeart className="w-6 h-6 text-secondary-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-primary-700">Creating nurturing environments for orphaned children to thrive and grow</span>
                    </li>
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href="/about"
                      className="inline-flex items-center justify-center px-6 py-3 bg-secondary-500 text-white rounded-lg hover:bg-secondary-600 hover:shadow-lg transition-all duration-300 font-poppins"
                    >
                      Learn More
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                    <a 
                      href="/contact"
                      className="inline-flex items-center justify-center px-6 py-3 border-2 border-secondary-500 text-secondary-600 rounded-lg hover:bg-secondary-50 hover:shadow-md transition-all duration-300 font-poppins"
                    >
                      Contact Us
                      <Phone className="w-5 h-5 ml-2" />
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Services Section with curved edges */}
          <section className="relative py-32 bg-gradient-to-b from-white via-primary-50 to-white">
            <div className="absolute inset-x-0 top-0 h-32 bg-white" style={{ clipPath: 'ellipse(70% 100% at 50% 0%)' }}></div>
            <div className="relative">
              <Services />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-32 bg-white" style={{ clipPath: 'ellipse(70% 100% at 50% 100%)' }}></div>
          </section>

          {/* Impact Statistics Section */}
          <section className="relative py-32 bg-white">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-50/50 to-secondary-50/50"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold tracking-tight mb-6 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent font-poppins">
                  {t('home.impact.title', 'Our Impact in Numbers')}
                </h2>
                <p className="text-2xl font-light text-primary-800 max-w-3xl mx-auto font-roboto">
                  {t('home.impact.subtitle', 'Every number represents a life touched, a story changed, and hope renewed')}
                </p>
              </motion.div>
              <Stats />
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-center mt-12 text-lg text-primary-700 max-w-3xl mx-auto font-roboto"
              >
                {t('home.impact.description', 'Join us in making a difference. Together, we can create lasting positive change in our community.')}
              </motion.p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default HomePage;