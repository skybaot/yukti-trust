import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const EldersPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <Heart className="w-16 h-16 mx-auto text-primary-500 mb-6" />
          <h1 className="text-4xl font-bold text-primary-900 mb-4">Elder Care Services</h1>
          <p className="text-xl text-primary-600 mb-8">Coming Soon</p>
          <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full" />
        </motion.div>
      </div>
    </div>
  );
};

export default EldersPage;