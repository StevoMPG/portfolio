import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';

export const ImageCarousel = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  if (!images || images.length === 0) return null;

  const openImage = (index) => {
    setCurrentIndex(index);
    setSelectedImage(images[index]);
    // Prevenir scroll del body cuando el modal está abierto
    document.body.style.overflow = 'hidden';
  };

  const closeImage = () => {
    setSelectedImage(null);
    // Restaurar scroll del body
    document.body.style.overflow = 'auto';
  };

  const navigate = (direction) => {
    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = images.length - 1;
    if (newIndex >= images.length) newIndex = 0;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  // Componente del Modal que se renderizará directamente en el body
  const Modal = () => {
    if (!selectedImage) return null;
    
    return createPortal(
      <motion.div
        className="fixed inset-0 bg-black/90 z-[9999] flex flex-col"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={closeImage}
      >
        {/* Header con botón de cerrar */}
        <div className="flex justify-end p-4">
          <button
            className="bg-black/50 text-white p-3 rounded-full hover:bg-black/80 transition-all duration-300 text-lg"
            onClick={(e) => {
              e.stopPropagation();
              closeImage();
            }}
          >
            ✕
          </button>
        </div>

        {/* Contenedor principal de la imagen */}
        <div className="flex-1 flex items-center justify-center p-4">
          <motion.img
            src={selectedImage}
            alt="Selected project"
            className="max-w-[90%] max-h-[80vh] object-contain"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>

        {/* Footer con contador y flechas */}
        {images.length > 1 && (
          <div className="flex justify-between items-center p-4">
            <motion.button
              className="bg-black/50 text-white p-3 rounded-full hover:bg-black/80 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.stopPropagation();
                navigate(-1);
              }}
            >
              &larr;
            </motion.button>
            
            <div className="bg-black/50 text-white px-4 py-2 rounded-full text-sm">
              {currentIndex + 1} / {images.length}
            </div>
            
            <motion.button
              className="bg-black/50 text-white p-3 rounded-full hover:bg-black/80 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.stopPropagation();
                navigate(1);
              }}
            >
              &rarr;
            </motion.button>
          </div>
        )}
      </motion.div>,
      document.body
    );
  };

  return (
    <div className="mt-4">
      {/* Mini carrusel */}
      <div className="relative overflow-hidden">
        <motion.div 
          ref={carouselRef}
          className="flex gap-3 py-2"
          drag="x"
          dragConstraints={{ right: 0, left: -(images.length * 112) + (carouselRef.current?.offsetWidth || 0) }}
          style={{ cursor: 'grab' }}
          whileTap={{ cursor: 'grabbing' }}
          dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
        >
          {images.map((img, index) => (
            <div key={index} className="flex-shrink-0">
              <motion.img
                src={img}
                alt={`Project image ${index + 1}`}
                className="h-24 w-24 rounded-md cursor-pointer object-cover border border-gray-700 hover:border-blue-400 transition-all duration-300"
                onClick={() => openImage(index)}
                whileHover={{ scale: 1.05, transition: { duration: 0.3, ease: "easeOut" } }}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Renderizar el modal a través de portal */}
      <AnimatePresence>
        {selectedImage && <Modal />}
      </AnimatePresence>
    </div>
  );
};