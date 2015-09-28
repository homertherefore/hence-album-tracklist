'use strict';
/**
 * @module hence-album-tracklist
 */

import Hence from 'hence-component-framework';

/**
 * HenceAlbumTracklist Component
 * @constructor
 */
let HenceAlbumTracklist = Hence.Ui({
  /********************************************************************************************************************
   * Initialization
   ********************************************************************************************************************/
  is: 'hence-album-tracklist',
  properties: {
    title: String,
    subtitle: String,
    image: String,
    totalTracks: Number
  },

  /*********************************************************************************************************************
   * Event Listeners
   ********************************************************************************************************************/

  /**
   * When working with listeners, if their target element doesn’t exist on the DOM you get a very basic nonspecific
   * error 'Uncaught TypeError: Invalid value used as weak map key’!  Make sure to review the listeners you set up
   * against you DOM elements. By default listeners look for IDs on elements so ‘myButton.tap’ will watch click/touches
   * on a #myButton element in the component
   */
  listeners: {
  },


  /*********************************************************************************************************************
   * Element DOM Hooks
   ********************************************************************************************************************/

  attached() {

  },

  /*********************************************************************************************************************
   * Element Behaviour
   ********************************************************************************************************************/

  behaviors: []
});

export default HenceAlbumTracklist;
