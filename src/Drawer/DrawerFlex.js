import React from 'react'
import ArrowButton from './ArrowButton';

class Drawer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            width: props.width || 300
        }

        this.containerPosition = this.containerPosition.bind(this);
    }

    containerPosition() {
        let output;
        const {drawerOpen, left} = this.props;
        const {width} = this.state;

        if (left) {
            output = drawerOpen ? {maxWidth: width} : {maxWidth: 0};
        } else {
            output = drawerOpen ? {maxWidth: width} : {maxWidth: 0};
        }

        return {...output, width: width + 2};
    }


    render() {
        const {left, drawerStyle = {}} = this.props;
        const {width} = this.state;

        const containerPosition = this.containerPosition();
        const containerStyle = {...styles.container, ...containerPosition};
        const contentStyle = left ? {right: 0} : {left: 0};

        return (
            <div style={containerStyle}>
                <div style={{...styles.content, ...drawerStyle, ...contentStyle, width: width}}>
                    {this.props.children}
                </div>

                <ArrowButton {...this.props} />
            </div>
        );
    }
}


export default Drawer;

const styles = {
    container: {
        position: 'relative',
        zIndex: 1000,
        backgroundColor: 'white',
        boxShadow: '0 0 5px rgba(0,0,0,0.1)',
        padding: '20px 0 0',
        transition: 'all 0.3s ease-in-out',
        height: '100%',
    },
    content: {
        position: 'absolute',
    },
}