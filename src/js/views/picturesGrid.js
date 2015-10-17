import React from 'react';
import Reflux from 'reflux';
import {PicturesStore} from '../stores/picturesStore';

export const PicturesGrid = React.createClass({
    mixins: [
        Reflux.connect(PicturesStore, "pictures")
    ],
    render: function() {
        const pictures = this.state.pictures;
        const picturesList = pictures.map((p) => {
            const url = `images/thumbnails/${p.file}`;

            return <div className="col-lg-2 col-md-2 col-xs-2 thumb" key={p.file}>
                <a className="thumbnail" href="#" title={p.title} onClick={this.onClick}>
                    <img className="img-responsive" src={url} alt={p.title} />
                </a>
            </div>;
        });

        return <div className="container">
            <div className="row">
                {picturesList}
            </div>
        </div>;
    },

    /**
     * Handler for when a thumbnail is clicked
     * @param e The even
     */
    onClick: function(e) {
        console.log("Clicked thumbnail");
    }
});
