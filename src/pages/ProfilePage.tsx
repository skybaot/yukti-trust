import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Settings, Bell, Shield, Key, Heart, Calendar, Edit2 } from 'lucide-react';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+91 98765 43210',
    location: 'Mumbai, India',
    bio: 'Passionate about making a difference in the community.',
    interests: ['Volunteering', 'Education', 'Healthcare'],
    notifications: {
      email: true,
      push: false,
      sms: true
    },
    privacy: {
      profileVisibility: 'public',
      showEmail: false,
      showPhone: true
    }
  });

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'privacy', label: 'Privacy', icon: Shield },
    { id: 'security', label: 'Security', icon: Key }
  ];

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save the data to your backend
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="space-y-6">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-primary-400 to-secondary-400 mx-auto mb-4">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="absolute bottom-0 right-1/2 transform translate-x-16 bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
                aria-label="Edit profile"
              >
                <Edit2 className="w-4 h-4 text-primary-600" />
              </button>
            </div>

            {isEditing ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4"
              >
                <input
                  type="text"
                  value={profileData.name}
                  onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                  className="w-full p-2 border border-primary-200 rounded-md focus:ring-2 focus:ring-primary-400"
                  aria-label="Full name"
                  placeholder="Enter your full name"
                />
                <textarea
                  value={profileData.bio}
                  onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                  className="w-full p-2 border border-primary-200 rounded-md focus:ring-2 focus:ring-primary-400"
                  rows={3}
                  aria-label="Biography"
                  placeholder="Tell us about yourself"
                />
                <button
                  onClick={handleSave}
                  className="w-full py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-md hover:from-primary-600 hover:to-secondary-600 transition-all duration-200"
                >
                  Save Changes
                </button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center space-y-4"
              >
                <h2 className="text-2xl font-bold text-primary-900">{profileData.name}</h2>
                <p className="text-primary-700">{profileData.bio}</p>
                <div className="flex justify-center space-x-4">
                  <div className="flex items-center text-primary-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Joined 2024</span>
                  </div>
                  <div className="flex items-center text-primary-600">
                    <Heart className="w-4 h-4 mr-2" />
                    <span>10 Events</span>
                  </div>
                </div>
              </motion.div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold mb-4 text-primary-900">Contact Information</h3>
                <div className="space-y-2 text-primary-700">
                  <p>Email: {profileData.email}</p>
                  <p>Phone: {profileData.phone}</p>
                  <p>Location: {profileData.location}</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-secondary-50 to-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold mb-4 text-primary-900">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {profileData.interests.map((interest) => (
                    <span
                      key={interest}
                      className="px-3 py-1 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full text-primary-700 text-sm"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'settings':
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold mb-4 text-primary-900">Account Settings</h3>
              // Remove the duplicate form elements in the profile section and keep them only in their respective sections
              
              // In the settings section
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-primary-700 mb-2" htmlFor="language-select">
                    Language
                  </label>
                  <select 
                    id="language-select"
                    className="w-full p-2 border border-primary-200 rounded-md"
                    aria-label="Select language"
                  >
                    <option value="en">English</option>
                    <option value="hi">Hindi</option>
                    <option value="gu">Gujarati</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary-700 mb-2" htmlFor="timezone-select">
                    Time Zone
                  </label>
                  <select 
                    id="timezone-select"
                    className="w-full p-2 border border-primary-200 rounded-md"
                    aria-label="Select time zone"
                  >
                    <option value="IST">IST (UTC+5:30)</option>
                    <option value="UTC">UTC</option>
                    <option value="EST">EST</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        );

      case 'notifications':
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold mb-4 text-primary-900">Notification Preferences</h3>
              <div className="space-y-4">
                {Object.entries(profileData.notifications).map(([notificationKey, notificationValue]) => (
                  <div key={notificationKey} className="flex items-center justify-between">
                    <span className="text-primary-700 capitalize">{notificationKey} Notifications</span>
                    <label className="relative inline-flex items-center cursor-pointer" htmlFor={`notification-${notificationKey}`}>
                      <input
                        type="checkbox"
                        checked={notificationValue}
                        onChange={() => {
                          setProfileData({
                            ...profileData,
                            notifications: {
                              ...profileData.notifications,
                              [notificationKey]: !notificationValue
                            }
                          });
                        }}
                        className="sr-only peer"
                        aria-label={`${notificationKey} notifications`}
                        id={`notification-${notificationKey}`}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'privacy':
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold mb-4 text-primary-900">Privacy Settings</h3>
              <div className="space-y-4">
                {Object.entries(profileData.privacy).map(([privacyKey, privacyValue]) => (
                  <div key={privacyKey} className="flex items-center justify-between">
                    <span className="text-primary-700 capitalize">
                      {privacyKey.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                    <label className="relative inline-flex items-center cursor-pointer" htmlFor={`privacy-${privacyKey}`}>
                      <input
                        type="checkbox"
                        checked={privacyValue === true || privacyValue === 'public'}
                        onChange={() => {
                          setProfileData({
                            ...profileData,
                            privacy: {
                              ...profileData.privacy,
                              [privacyKey]: privacyValue === true ? false : true
                            }
                          });
                        }}
                        className="sr-only peer"
                        aria-label={`${privacyKey.replace(/([A-Z])/g, ' $1').trim()} setting`}
                        id={`privacy-${privacyKey}`}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'security':
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold mb-4 text-primary-900">Security Settings</h3>
              <div className="space-y-4">
                <button className="w-full py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-md hover:from-primary-600 hover:to-secondary-600 transition-all duration-200">
                  Change Password
                </button>
                <button className="w-full py-2 border border-primary-200 text-primary-700 rounded-md hover:bg-primary-50 transition-all duration-200">
                  Enable Two-Factor Authentication
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <nav className="space-y-1">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                        activeTab === tab.id
                          ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white'
                          : 'text-primary-700 hover:bg-primary-50'
                      }`}
                    >
                      <Icon className="w-5 h-5 mr-3" />
                      {tab.label}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-xl shadow-md p-6">
              {renderTabContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;