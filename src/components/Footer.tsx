import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="flex h-8 w-full flex-row items-center justify-center gap-2">
      <p>Copyright © Laszlo Kis 2023</p>
      <a
        className="flex items-center justify-center text-xl text-gray-950 hover:text-neutral-400"
        href="https://github.com/ev0clu"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
    </footer>
  );
};

export default Footer;
