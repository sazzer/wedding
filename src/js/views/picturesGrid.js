import React from 'react';
import Reflux from 'reflux';
import {PicturesStore} from '../stores/picturesStore';

export const PicturesGrid = React.createClass({
    mixins: [
        Reflux.connect(PicturesStore, "pictures")
    ],
    render: function() {
        const pictures = this.state.pictures;
        const picturesList = pictures.map((p) => <li>{p.title}</li>);

        return <ul>{picturesList}</ul>;
    }
});
