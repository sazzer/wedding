import React from 'react';
import {PicturesGrid} from './picturesGrid';
import {Lightbox} from './lightbox';

export const HomePage = React.createClass({
    getInitialState: function() {
        return {
            selectedPicture: {
                title: "",
                file: ""
            }
        };
    },
    render: function() {
        const selectedPicture = this.state.selectedPicture;
        const pictureTitle = selectedPicture.title;
        const pictureImage = selectedPicture.file;

        return <div>
            <PicturesGrid onClick={this.onClick} />
            <Lightbox ref="lightbox" title={pictureTitle} image={pictureImage} />
        </div>;
    },

    onClick: function(e) {
        this.setState({
            selectedPicture: e
        });
        this.refs.lightbox.show();
    }
});
