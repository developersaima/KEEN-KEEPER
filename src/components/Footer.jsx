import React from "react";
import { Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-20 bg-[#244d3f] w-full text-center text-white">
      <h1 className="md:pt-10 text-5xl font-medium">
        Keen<span className="text-white">Keeper</span>
      </h1>

      <p className="text-white/80 my-4 max-w-3xl mx-auto px-4 md:px-0">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>

      <div>
        <strong className="text-sm font-medium">Social Links</strong>

        <div className="flex gap-4 items-center justify-center mt-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black hover:bg-[#1f3f34] hover:text-white border transition-all duration-150 hover:-translate-y-1"
            title="GitHub"
          >
            <Globe size={18} />
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black hover:bg-[#1f3f34] hover:text-white border transition-all duration-150 hover:-translate-y-1"
            title="Facebook"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.3 0-1.7.8-1.7 1.6V12H17l-.4 3h-2.8v7A10 10 0 0 0 22 12z" />
            </svg>
          </a>

          <a
            href="https://x.com"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black hover:bg-[#1f3f34] hover:text-white border transition-all duration-150 hover:-translate-y-1"
            title="X"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.244 2H21l-6.56 7.5L22 22h-6.828l-5.35-6.99L3.9 22H1l7.06-8.06L2 2h6.828l4.84 6.32L18.244 2z" />
            </svg>
          </a>
        </div>

        <div className="border-t border-[#225946] mt-10 pt-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
          <p className="text-white/50 text-sm">
            © 2026 KeenKeeper. All rights reserved.
          </p>

          <ul className="flex gap-6 text-white/50 text-sm">
            <li className="hover:underline cursor-pointer">Privacy</li>
            <li className="hover:underline cursor-pointer">Terms</li>
            <li className="hover:underline cursor-pointer">Cookies</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;