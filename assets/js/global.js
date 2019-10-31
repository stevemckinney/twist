import Headroom from 'headroom.js';
import 'lazysizes';

const Site = (function Site() {
  // Lazyloading images
  const images = function images() {
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

  // Apply headroom to the header
  const header = () => {
    const el = document.querySelector('.header');
    const options = {
      tolerance: {
        up: 12,
        down: 12
      },
      classes: {
        initial: 'header',
        pinned: 'header-pinned',
        unpinned: 'header-unpinned',
        top: 'header-top',
        notTop: 'header-not-top',
        bottom: 'header-bottom',
        notBottom: 'header-not-bottom'
      },
      onUnpin: function onUnpin() {
        if (isSearchVisible()) {
          this.elem.classList.remove(this.classes.unpinned);
          this.elem.classList.add(this.classes.pinned);
        }
        else {
          this.elem.classList.add(this.classes.unpinned);
          this.elem.classList.remove(this.classes.pinned);
        }
      }
    };
    const h = new Headroom(el, options);

    h.init();
  }

  return {
    init: function init() {
      // Initialise things
      images();
    }
  }
}());

Site.init();
