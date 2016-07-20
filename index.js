'use strict';

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    backgroundColor: '#393939',
    foregroundColor: '#e3e2e0',
    borderColor: '#393939',
    cursorColor: '#97979b',
    colors: [
      '#393939',
      '#f66153',
      '#a6e22e',
      '#fd971f',
      '#4ea1df',
      '#808dd3',
      '#82d2ec',
      '#e3e2e0',

      '#797979',
      '#f66153',
      '#a6e22e',
      '#e6db74',
      '#4ea1df',
      '#808dd3',
      '#82d2ec',
      '#e3e2e0'
    ],
    css: `
      ${config.css || ''}
      .tab_active:before {
        border-color: #494949;
        border-width: 2px;
      }
    `
  });
};
