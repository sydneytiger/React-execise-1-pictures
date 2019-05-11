import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { gridSpan: 0 };
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setGridSpan);
    }

    setGridSpan = () => {
        const clientHeight = this.imageRef.current.clientHeight;
        const gridSpan = Math.ceil(clientHeight / 10 + 1);
        this.setState({ gridSpan });
    }

    render() {
        const { alt_description, urls } = this.props.image;
        return (
            <div style={{ gridRowEnd: `span ${this.state.gridSpan}` }}>
                <img
                    ref={this.imageRef}
                    src={urls.regular}
                    alt={alt_description} />
            </div>
        );
    };
}

export default ImageCard;
