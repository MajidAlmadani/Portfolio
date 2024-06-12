import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';

const socialMediaLinks = [
    { href: 'https://linkedin.com', icon: FaLinkedin },
    { href: 'https://github.com', icon: FaGithub },
    { href: 'https://youtube.com', icon: FaYoutube },
    { href: 'https://twitter.com', icon: FaTwitter },
    { href: 'https://instagram.com', icon: FaInstagram },
];

const SocialMediaLinks = () => (
    <motion.div
        className="flex space-x-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
    >
        {socialMediaLinks.map(({ href, icon: Icon }) => (
            <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
            >
                <Icon className="text-2xl md:text-3xl hover:text-blue-400 transition duration-300" />
            </motion.a>
        ))}
    </motion.div>
);

export default SocialMediaLinks;
