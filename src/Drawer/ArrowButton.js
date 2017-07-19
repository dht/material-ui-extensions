import React from 'react';
import LeftChevron from '../_icons/LeftChevron';

export default class ArrowButton extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        }

        this.arrowStyle = this.arrowStyle.bind(this);
    }

    arrowStyle() {
        const {drawerOpen, left} = this.props;

        let rotate = drawerOpen;

        if (left) {
            rotate = !rotate;
        }

        return {
            ...styles.arrow,
            transform: rotate ? 'rotate(180deg)' : ''
        };
    }

    render() {
        const {left} = this.props;
        const buttonStyle = left ? styles.buttonLeft : styles.buttonRight;

        return (
            <div style={buttonStyle}>
                <div style={this.arrowStyle()}
                     onClick={this.props.toggle}>
                    <LeftChevron />
                </div>
            </div>
        );
    }
}

const styles = {
    buttonRight: {
        backgroundColor: 'white',
        width: '20px',
        height: '60px',
        border: '1px solid rgba(0,0,0,0.1)',
        borderRight: 'none',
        borderRadius: '5px 0 0 5px',
        textAlign: 'center',
        position: 'absolute',
        top: '50%',
        left: '-20px',
        marginTop: '-30px',
    },
    buttonLeft: {
        backgroundColor: 'white',
        width: '20px',
        height: '60px',
        border: '1px solid rgba(0,0,0,0.1)',
        borderLeft: 'none',
        borderRadius: '0 5px 5px 0',
        textAlign: 'center',
        position: 'absolute',
        top: '50%',
        right: '-20px',
        marginTop: '-30px',
    },
    arrow: {
        position: 'relative',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
}

