import Reflux from 'reflux';
import pictures from '../data.json';

/**
 * Reflux Store that returns all of the pictures that are known
 */
export const PicturesStore = Reflux.createStore({
    /**
     * Initialise the Store
     */
    init: function() {

    },

    /**
     * Get the Initial State of the store
     * @return the initial list of all the pictures
     */
    getInitialState: function() {
        return pictures;
    }
});
