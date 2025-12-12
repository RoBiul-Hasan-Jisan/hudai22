import { 
  Heart, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Download,
  Shield,
  Users,
  Globe
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Pregnancy Tracker', href: '#pregnancy-tracker' },
    { name: 'Nutrition Guide', href: '#nutrition' },
    { name: 'Care Section', href: '#care' },
    { name: 'Rural Health', href: '#rural-health' },
    { name: 'Daily Tips', href: '#daily-tips' },
    { name: 'Body Changes', href: '#body-changes' },
  ];

  const resources = [
    { name: 'Emergency Numbers', href: '#' },
    { name: 'Hospital Locator', href: '#' },
    { name: 'Vaccination Schedule', href: '#' },
    { name: 'Download App', href: '#', icon: <Download className="w-4 h-4" /> },
    { name: 'Privacy Policy', href: '#', icon: <Shield className="w-4 h-4" /> },
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
    { icon: <Youtube className="w-5 h-5" />, href: '#', label: 'YouTube' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      {/* Top Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">MatraCare</h2>
                <p className="text-gray-400 text-sm">Mother & Child Wellness Platform</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Empowering mothers with evidence-based pregnancy tracking, nutrition guidance, 
              and healthcare support for rural communities.
            </p>
            <div className="flex gap-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 bg-gray-800 rounded-lg hover:bg-purple-600 transition-colors"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Users className="w-5 h-5" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-purple-300 transition-colors flex items-center gap-2 text-left w-full"
                  >
                    <span className="w-1 h-1 bg-purple-500 rounded-full"></span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Globe className="w-5 h-5" />
              Resources
            </h3>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <a
                    href={resource.href}
                    className="text-gray-300 hover:text-purple-300 transition-colors flex items-center gap-2"
                  >
                    {resource.icon && (
                      <span className="text-purple-400">{resource.icon}</span>
                    )}
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-purple-400 mt-1" />
                <div>
                  <p className="font-medium">Emergency Helpline</p>
                  <p className="text-gray-300">104 (Toll-Free)</p>
                  <p className="text-gray-300">+91-11-23978046</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-purple-400 mt-1" />
                <div>
                  <p className="font-medium">Email Support</p>
                  <p className="text-gray-300">support@matracare.in</p>
                  <p className="text-gray-300">emergency@matracare.in</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-purple-400 mt-1" />
                <div>
                  <p className="font-medium">Headquarters</p>
                  <p className="text-gray-300">Online,Ban</p>
                  <p className="text-gray-300">Available Pan offline</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} MatraCare. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Developed with ❤️ for mothers across World
              </p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Government Initiative Badge */}
      <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="p-1 bg-white rounded">
                <div className="w-6 h-6 bg-gradient-to-r from-green-600 to-orange-500 rounded"></div>
              </div>
              <span className="text-sm">
                In collaboration with <strong>National Health Mission</strong>
              </span>
            </div>
            <div className="text-xs text-gray-300">
               Health & Family Welfare
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;