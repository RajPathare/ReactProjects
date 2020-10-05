import React from 'react';


class ImageCard extends React.Component {

    constructor(props){
        super(props)

        this.imageRef = React.createRef();
        this.state = {
            spans: 0
        };
    }

    componentDidMount() {
        // console.log(this.imageRef)                  //callback
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    // runs after the component is loaded
    setSpans = () =>{
        const height = console.log(this.imageRef.current.clientHeight)

        const spans = Math.ceil(height / 10);

        this.setState({ spans })

    }

    render()
    {
        const {description,urls} = this.props.image;
        return(
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img ref={this.imageRef} src={urls.regular} alt={description}/>
            </div>
        )
    }
}

export default ImageCard;