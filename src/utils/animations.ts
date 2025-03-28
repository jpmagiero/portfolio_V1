
// Custom animations helper functions
export const animateOnScroll = () => {
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  animateElements.forEach(element => {
    observer.observe(element);
  });
  
  return () => {
    animateElements.forEach(element => {
      observer.unobserve(element);
    });
  };
};

// Staggered animation helper
export const staggerAnimation = (elements: NodeListOf<Element>, animationClass: string, delay = 100) => {
  elements.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add(animationClass);
    }, index * delay);
  });
};
