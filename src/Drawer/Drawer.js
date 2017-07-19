import React from 'react'
import ArrowButton from './ArrowButton';
import DrawerFlex from './DrawerFlex';

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
            output = drawerOpen ? {left: 0} : {left: -width};
        } else {
            output = drawerOpen ? {right: 0} : {right: -width};
        }

        return {...output, width: width + 2};
    }


    render() {
        const {drawerStyle = {}, flex} = this.props;

        // flex version?
        if (flex) {
            return <DrawerFlex {...this.props} />
        }

        const containerPosition = this.containerPosition();
        const containerStyle = {...styles.container, ...containerPosition};

        return (
            <div style={containerStyle}>
                <div style={{...styles.content, ...drawerStyle}}>
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
        position: 'fixed',
        top: '0px',
        bottom: '0px',
        zIndex: 1000,
        backgroundColor: 'white',
        boxShadow: '0 0 5px rgba(0,0,0,0.1)',
        padding: '20px 0 0',
        transition: 'all 0.3s ease-in-out',
    },
    content: {
        overflow: 'hidden',
    },


}
