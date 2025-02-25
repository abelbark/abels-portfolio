import { github, discord, linkedin } from "../../public/assets/leftover-icons";

const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-center items-center flex-wrap gap-5">

      <div className="flex items-center gap-3">
          <a href="https://github.com/abelbark" className="social-icon">
            <img src={github} alt="github" className="w-1/2 h-1/2" />
          </a>
          <a href="https://discordapp.com/users/746196727664476254" className="social-icon">
            <img src={discord} alt="discord" className="w-1/2 h-1/2" />
          </a>
          <a href="https://www.linkedin.com/in/abel-abarca-29623b2b2/" className="social-icon">
            <img src={linkedin} alt="instagram" className="w-1/2 h-1/2" />
          </a>
      </div>

    </footer>
  );
};

export default Footer;
