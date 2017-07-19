import React from 'react';
import './GithubRibbon.scss';

export default class Github extends React.Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    componentWillReceiveProps(newProps) {
    }

    componentDidMount() {
    }


    render() {
        const {id} = this.props;

        return (
            <div className="Github-container">
                <a target="_blank" href={`https://github.com/dht/${id}`} className="stripe">
                    <div className="title">
                        Fork me on Github
                    </div>
                </a>
            </div>
        );
    }
}

const styles = {}

