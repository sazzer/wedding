import React from 'react';

export const Lightbox = React.createClass({
    render: function() {
        const title = this.props.title;
        const image = `images/display/${this.props.image}`;

        return <div className="modal fade" ref="modal">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title">{title}</h4>
              </div>
              <div className="modal-body">
                <img src={image} />
              </div>
            </div>
          </div>
        </div>;
    },

    /**
     * Actually show the lightbox
     */
    show: function() {
        const modalRef = this.refs.modal;
        $(modalRef).modal('show');
    }
});
