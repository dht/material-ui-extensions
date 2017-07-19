import React from 'react';
import Drawer from '../../../src/Drawer';
import GithubRibbon from '../GithubRibbon/GithubRibbon';
import FlatButton from 'material-ui/FlatButton';

import './Example.scss';

export default class Example extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false
        }
    }

    componentDidMount() {
        const {routeParams} = this.props,
            {option1, option2} = routeParams;

        this.setState({
            isLeft: option1 === 'left',
            isFlex: option2 === 'flex'
        })
    }

    renderColumns(columns) {
        return ((new Array(columns)).fill(0)).map(id => <div className="col">
            <div>column</div>
        </div>);
    }

    render() {
        const {open, isLeft, isFlex} = this.state;

        return (<div style={ styles.container } className="Example-container">

                <GithubRibbon id="material-ui-extensions"/>

                <div className="row">

                    {!isLeft ? this.renderColumns(2): null}

                    <Drawer
                        drawerOpen={open}
                        flex={isFlex}
                        left={isLeft}
                        drawerStyle={{padding: '0px'}}
                        width={300}
                        toggle={ () => this.setState({open: !open})}>
                        <div className="content">
                            <h1>Details</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae dui
                                ornare, pulvinar odio eu, maximus velit. Mauris ut tincidunt enim. Proin eget eros
                                ipsum.
                            </p>
                            <div className="actions">
                                <FlatButton label="Action 1" style={styles.button}/>
                                <FlatButton label="Action 2" primary={true} style={styles.button}/>
                            </div>
                        </div>
                    </Drawer>

                    {isLeft ? this.renderColumns(2): null}
                </div>

                <div className="star">
                    <a className="github-button" href="https://github.com/dht/material-ui-extensions"
                       data-icon="octicon-star"
                       aria-label="Star ntkme/github-buttons on GitHub">Star</a>
                </div>
            </div>
        );
    }
}

const styles = {
    container: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    button: {
        margin: '5px',
    }
}