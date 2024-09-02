import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { ReactNode } from "react";
import "./ui.css";

interface HeaderProps {
  children: ReactNode;
}

export const Header = ({ children }: HeaderProps) => {
  return (
    <header className="header">
      <div className="logo">
        <h1 className="text-2xl">Memory Card</h1>
      </div>
      {children}
    </header>
  );
};

export const Footer = () => {
  return (
    <footer className="flex flex-wrap pt-4 pb-4 flex-col bg-slate-800 container mx-auto px-4 max-w-3xl rounded ">
      <p className="text-white text-center">Developed by Gabriel Muller</p>
      <p className="flex gap-4 text-white items-center justify-center">
        <a target="_blank" href="https://www.linkedin.com/in/mullergabriel/">
          <LinkedInLogoIcon width={32} height={32} />
        </a>
        <a
          target="_blank"
          href="https://github.com/egabii/front-end-assessment"
        >
          <GitHubLogoIcon width={32} height={32} />
        </a>
      </p>
    </footer>
  );
};

export default { Footer, Header };
