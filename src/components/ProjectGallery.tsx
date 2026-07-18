"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiImage } from "react-icons/fi";

interface ProjectGalleryProps {
  gallery: string[];
  title: string;
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 24 : -24,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -24 : 24,
    opacity: 0,
  }),
};

export default function ProjectGallery({ gallery, title }: ProjectGalleryProps) {
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);
  const hasImages = gallery.length > 0;
  const currentImage = hasImages ? gallery[index] : null;

  const goTo = (nextIndex: number, dir: number) => {
    const wrapped = (nextIndex + gallery.length) % gallery.length;
    setIndex([wrapped, dir]);
  };

  const goPrev = () => goTo(index - 1, -1);
  const goNext = () => goTo(index + 1, 1);

  // Keyboard arrow navigation while the gallery is mounted (i.e. modal is open)
  useEffect(() => {
    if (gallery.length <= 1) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, gallery.length]);

  return (
    <div className="relative w-full aspect-video max-h-[600px] overflow-hidden rounded-t-2xl bg-muted">
      {hasImages ? (
        <>
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.div
              key={currentImage}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src={currentImage as string}
                alt={`${title} screenshot ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 672px"
                loading="lazy"
                className="object-contain"
              />
            </motion.div>
          </AnimatePresence>

          {gallery.length > 1 && (
            <>
              {/* Prev / Next buttons */}
              <button
                onClick={goPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8
                           rounded-full bg-black/50 border border-white/10 text-white
                           hover:bg-black/70 hover:scale-110 transition-all duration-200"
                aria-label="Previous screenshot"
              >
                <FiChevronLeft size={16} />
              </button>
              <button
                onClick={goNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8
                           rounded-full bg-black/50 border border-white/10 text-white
                           hover:bg-black/70 hover:scale-110 transition-all duration-200"
                aria-label="Next screenshot"
              >
                <FiChevronRight size={16} />
              </button>

              {/* Dot indicators */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
                {gallery.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goTo(idx, idx > index ? 1 : -1)}
                    className={`h-1.5 rounded-full transition-all duration-200 ${
                      idx === index
                        ? "w-4 bg-white shadow-[0_0_8px_rgba(255,255,255,0.6)]"
                        : "w-1.5 bg-white/40 hover:bg-white/60"
                    }`}
                    aria-label={`Go to screenshot ${idx + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </>
      ) : (
        <div className="flex flex-col items-center justify-center gap-2 w-full h-full text-muted-foreground/60">
          <FiImage size={28} />
          <span className="text-xs font-medium">No screenshots available yet</span>
        </div>
      )}
    </div>
  );
}
