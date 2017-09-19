import 'lazysizes';

const Site = (function Site() {
  // Lazyloading images
  const images = function () {
    // Listen for the lazyloaded event
    document.addEventListener('lazyloaded', (e) => {
      const parent = e.target.parentNode;

      // Only if the parentNode has the loading class name
      if (parent.classList.contains('loading')) {
        // Remove the loading class from the parent wrapper
        parent.classList.remove('loading');
        // Add a class to show the image has loaded
        parent.classList.add('image-loaded');
      }
    });
  }

  return {
    init: function init() {
      // Initialise things
      images();
    }
  }
});
