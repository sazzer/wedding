import React from 'react';

export const Thumbnail = React.createClass({
    propTypes: {
        onClick: React.PropTypes.func
    },

    render: function() {
        const {file, title} = this.props;
        const url = `images/thumbnails/${file}`;

        return <div className="col-lg-2 col-md-2 col-xs-2 thumb" key={file}>
            <a className="thumbnail" href="#" title={title} onClick={this.onClick}>
                <img className="img-responsive" src={url} alt={title} />
            </a>
        </div>;
    },

    /**
     * Handler for when a thumbnail is clicked
     * @param e The even
     */
    onClick: function(e) {
        console.log(`Clicked thumbnail: ${this.props.file}`);
        this.props.onClick(this.props);
    }
});
