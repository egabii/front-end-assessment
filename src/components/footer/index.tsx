import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export default function Footer() {
  return (
    <footer className="flex flex-wrap pt-4 pb-4 flex-col bg-slate-800 container mx-auto px-4 max-w-3xl rounded ">
      <p className="text-white text-center">Developed by Gabriel Muller</p>
      <p className="flex gap-4 text-white items-center justify-center">
        <span>
          <LinkedInLogoIcon width={32} height={32} />
        </span>
        <span>
          <GitHubLogoIcon width={32} height={32} />
        </span>
      </p>
    </footer>
  );
}
