import { RevealOnScroll } from "../RevealOnScroll";
import photo from "../../assets/photo.webp";
import { homeConstants } from "../../constants";

export const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <RevealOnScroll>
        <div className="container max-w-5xl mx-auto border-b border-neutral-900 pb-4 lg:mb-35 z-10">
          <div className="flex flex-col items-center text-center">
            <div className="w-full flex justify-center mb-6">
              <img
                src={photo}
                alt={homeConstants.photoAlt}
                className={homeConstants.photoClass}
              />
            </div>
            <h1 className={homeConstants.titleClass}>
              {homeConstants.title}
            </h1>
            <h2 className={homeConstants.subtitleClass}>
              {homeConstants.subtitle}
            </h2>
            <p className={homeConstants.descriptionClass}>
              {homeConstants.description}
            </p>
            
            <div className={homeConstants.socialContainerClass}>
              {homeConstants.socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.color} transition-colors duration-300`}
                  aria-label={social.name}
                >
                  <social.icon size={social.size} />
                </a>
              ))}
            </div>
          </div>
        </div>  
      </RevealOnScroll>
    </section>
  );
};