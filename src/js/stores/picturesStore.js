import Reflux from 'reflux';

const pictures = [
    {
        file: "JG0001.jpg",
        title: "Hairdresser 1",
        details: {
            people: ["Julia", "Aaron"],
            tags: "Hairdresser",
            location: "Home"
        }
    }, {
        file: "JG0002.jpg",
        title: "Hairdresser 2",
        details: {
            people: ["Julia", "Aaron"],
            tags: "Hairdresser",
            location: "Home"
        }
    }, {
        file: "JG0003.jpg",
        title: "Hairdresser 3",
        details: {
            people: ["Julia", "Aaron"],
            tags: "Hairdresser",
            location: "Home"
        }
    }

];

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
