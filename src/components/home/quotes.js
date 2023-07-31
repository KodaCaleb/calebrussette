import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Quotes() {
  const quotes = [
    `"Most Likely to Inspire Future Coders" - University of Texas`,
    "Certified Full-Stack Web Developer - Edx",
    "Certified Full-Stack Web Developer - University of Texas",
    `"Caleb was was a integral part of our team!" - Valiant Health`,
  ];

  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  const [isSwitching, setIsSwitching] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsSwitching(true);
      setTimeout(() => {
        setCurrentQuote((oldQuote) => {
          const nextIndex = (quotes.indexOf(oldQuote) + 1) % quotes.length;
          return quotes[nextIndex];
        });
        setIsSwitching(false);
      }, 2000);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-1/2 self-end mb-4 h-24 hidden sm:flex text-themeWhite  flex-row justify-end overflow-hidden">
      <div className="w-1/2 font-extralight justify-center flex  overflow-hidden ">
        <AnimatePresence>
          {!isSwitching && (
            <motion.h1
              key={currentQuote}
              className="self-center italic quotes-section"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 1 }}
            >
              {currentQuote}
            </motion.h1>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
