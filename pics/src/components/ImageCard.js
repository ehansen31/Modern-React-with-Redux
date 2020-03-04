import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = { spans: 0 };

        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans)
    }

    setSpans = () => {
        let height = this.imageRef.current.clientHeight;

        let spans = Math.ceil(height / 150);

        this.setState({ spans: spans });
    };

    render() {
        let { description, urls } = this.props.image;

        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img
                    alt={description}
                    src={urls.regular}
                />
            </div>
        );
    }
}

export default ImageCard;