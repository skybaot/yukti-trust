import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Github, Linkedin, Twitter } from 'lucide-react';

// Import fonts
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';

interface TeamMember {
  id: string;
  image: string;
  name: string;
  role: string;
  bio: string;
  social: {
    linkedin: string;
    twitter: string;
    github: string;
  };
}

const TeamPage: React.FC = () => {
  const { t } = useTranslation();

  const teamMembers: TeamMember[] = [
    {
      id: 'yukti',
      image: 'https://img.freepik.com/free-vector/business-woman-working-laptop-cartoon-illustration_24797-2321.jpg',
      name: 'Yukti Vyas',
      role: 'CEO & Founder',
      bio: 'Leading Yukti Trust with a vision to create positive change in our community. Dedicated to empowering differently-abled individuals and providing comprehensive support services.',
      social: {
        linkedin: 'https://linkedin.com/in/yukti-vyas',
        twitter: 'https://twitter.com/yuktivyas',
        github: 'https://github.com/yuktivyas'
      }
    },
    {
      id: 'ujjwal',
      image: 'https://img.freepik.com/free-vector/programmer-working-web-development-code-engineer-coding-programming-languages-software-development-computer-technology-man-working-computer-screen-with-program-code_575670-1720.jpg',
      name: 'Ujjwal Sharma',
      role: 'Backend Team Lead',
      bio: 'Expert in database architecture and server-side development. Leading the backend team to build robust and scalable solutions for our digital infrastructure.',
      social: {
        linkedin: 'https://linkedin.com/in/ujjwal-sharma',
        twitter: 'https://twitter.com/ujjwalsharma',
        github: 'https://github.com/ujjwalsharma'
      }
    },
    {
      id: 'harshul',
      image: 'https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg',
      name: 'Harshul Baluni',
      role: 'Frontend Developer',
      bio: 'Creating engaging user interfaces and experiences. Bringing designs to life while barely staying alive himself.',
      social: {
        linkedin: 'https://linkedin.com/in/harshul-baluni',
        twitter: 'https://twitter.com/harshulbaluni',
        github: 'https://github.com/harshulbaluni'
      }
    },
    {
      id: 'ayush',
      image: 'https://img.freepik.com/free-vector/artificial-intelligence-concept-illustration_114360-7524.jpg',
      name: 'Ayush Thakkar',
      role: 'AI & ML Lead',
      bio: 'Driving innovation through artificial intelligence and machine learning solutions. Developing smart systems to enhance our service delivery.',
      social: {
        linkedin: 'https://linkedin.com/in/ayush-thakkar',
        twitter: 'https://twitter.com/ayushthakkar',
        github: 'https://github.com/ayushthakkar'
      }
    },
    {
      id: 'khushbu',
      image: 'https://img.freepik.com/free-vector/backend-development-concept-software-development-process-website-interface-improvement-programming-coding-it-profession-isolated-flat-vector-illustration_613284-1064.jpg',
      name: 'Khushbu',
      role: 'Backend Developer',
      bio: 'Contributing to the development of robust backend systems and APIs. Ensuring smooth data flow and system integration.',
      social: {
        linkedin: 'https://linkedin.com/in/khushbu',
        twitter: 'https://twitter.com/khushbu',
        github: 'https://github.com/khushbu'
      }
    }
  ];

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-6 font-sans">
              {t('team.title')}
            </h1>
            <p className="text-xl text-primary-800 max-w-3xl mx-auto font-body">
              {t('team.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="aspect-w-3 aspect-h-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary-900 mb-2 font-sans">
                    {member.name}
                  </h3>
                  <p className="text-secondary-600 mb-3 font-body">
                    {member.role}
                  </p>
                  <p className="text-primary-700 mb-4 font-body">
                    {member.bio}
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 transform hover:scale-110 transition-all duration-300"
                      title={`Visit ${member.name}'s LinkedIn profile`}
                      aria-label={`${member.name}'s LinkedIn profile`}
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 transform hover:scale-110 transition-all duration-300"
                      title={`Visit ${member.name}'s Twitter profile`}
                      aria-label={`${member.name}'s Twitter profile`}
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 transform hover:scale-110 transition-all duration-300"
                      title={`Visit ${member.name}'s GitHub profile`}
                      aria-label={`${member.name}'s GitHub profile`}
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Slider Section */}
      <section className="py-20 bg-gradient-to-b from-white to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent font-sans">
              Our Volunteers
            </h2>
            <p className="text-primary-700 font-body">
              Meet the amazing people who make it all possible.
            </p>
          </motion.div>

          <div className="flex overflow-x-auto space-x-8 pb-8 snap-x snap-mandatory scrollbar-hide">
            {Array.from({ length: 6 }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.3, delay: index * 0.1 } }}
                className="flex-shrink-0 w-48 h-48 bg-white rounded-full shadow-lg overflow-hidden snap-center transform hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <img
                  src={`https://images.unsplash.com/photo-${1580489944761 + index}-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80`}
                  alt={`Volunteer ${index + 1}`}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;