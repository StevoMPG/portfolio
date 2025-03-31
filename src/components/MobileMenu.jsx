import { useTranslation } from "../hooks/useTranslation";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const { t } = useTranslation();
  
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.95)] z-40 flex flex-col items-center justify-center
                     transition-all duration-300 ease-in-out

                     ${
                       menuOpen
                         ? "h-screen opacity-100 pointer-events-auto"
                         : "h-0 opacity-0 pointer-events-none"
                     }
                   `}
    >
      <div className="w-full max-w-md px-6">
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
          aria-label="Close Menu"
        >
          &times;
        </button>

        <div className="flex flex-col items-center w-full">
          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                      ${
                        menuOpen
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-5"
                      }        
              `}
          >
            {t.navbar.home}
          </a>
          <a
            href="#technologies"
            onClick={() => setMenuOpen(false)}
            className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
              ${
                menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }        
            `}
          >
            {t.navbar.technologies}
          </a>
          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
              ${
                menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }        
            `}
          >
            {t.navbar.projects}
          </a>
          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
              ${
                menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }        
            `}
          >
            {t.navbar.about}
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
              ${
                menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }        
            `}
          >
            {t.navbar.contact}
          </a>
          
          <div className={`mt-4 transform transition-transform duration-300
              ${
                menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
          >
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
};
