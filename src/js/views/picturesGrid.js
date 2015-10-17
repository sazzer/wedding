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

            return <div className="col-lg-2 col-md-2 col-xs-2 thumb">
                <a class="thumbnail" href="#" title={p.title}>
                    <img class="img-responsive" src={url} alt={p.title} />
                </a>
            </div>;
        });

        return <div class="container">
            <div class="row">
                {picturesList}
            </div>
        </div>;
    }
});
