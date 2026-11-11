import { FaXTwitter, FaInstagram, FaDiscord } from 'react-icons/fa6';
import LogoImg from '../assets/images/Logo.png';

export const navbarData = {
  logo: LogoImg,
  links: [
    { id: 1, name: "About us", path: "/about" },
    { id: 2, name: "Tokenomics", path: "/tokenomics" },
    { id: 3, name: "How to buy?", path: "/how-to-buy" },
  ],
  socials: [
    { id: 1, icon: FaXTwitter, url: "#" },
    { id: 2, icon: FaInstagram, url: "#" },
    { id: 3, icon: FaDiscord, url: "#" },
  ]
};