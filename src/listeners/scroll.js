'use strict';

import { debounce } from '../handlers/debounce.js';
import {checkSlide} from '../handlers/checkSlide.js';

/**
 * @name change separator
 * calls handler that changes the mirror-art's separator
 */
window.addEventListener('scroll', debounce(checkSlide));
