// src/javascript/useIntersectionObserver.js
import { useEffect, useRef } from "react";

// Custom hook for handling intersection observer
export const useIntersectionObserver = (options = {}) => {
  const elementRefs = useRef([]);

  const addToRefs = (el) => {
    if (el && !elementRefs.current.includes(el)) {
      elementRefs.current.push(el);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          // Uncomment if you want to remove the class when not in view
          // entry.target.classList.remove("show");
        }
      });
    }, options);

    const elements = elementRefs.current;
    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, [options]);

  return { addToRefs };
};
