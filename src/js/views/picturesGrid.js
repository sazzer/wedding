import React from 'react';
import Reflux from 'reflux';
import {PicturesStore} from '../stores/picturesStore';
import {Thumbnail} from './thumbnail';

export const PicturesGrid = React.createClass({
    mixins: [
        Reflux.connect(PicturesStore, "pictures")
    ],
    render: function() {
        const pictures = this.state.pictures;
        const picturesList = pictures.map((p) => <Thumbnail key={p.file} {...p} />);

        return <div className="container">
            <div className="row">
                {picturesList}
            </div>
        </div>;
    }
});
