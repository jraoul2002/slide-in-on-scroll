'use strict';

const sliderImages = document.querySelectorAll('.slide-in');

/**
 * creates a mirror-image rendering of the user input and displays the growing artwork
 * @param {Event} event - triggered whenever a user releases a key in the input area
 */
export   function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};