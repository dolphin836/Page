import React, { PureComponent } from 'react';
import Layout from '../Component/Layout';
import { Player } from 'video-react';
import Data from '../Data/video.json';
import "../../node_modules/video-react/dist/video-react.css"; // import css

class Video extends PureComponent {
    constructor(props) {
        super(props);

        let data;
        
        Data.map((channel) => {
            if (channel.code === this.props.match.params.Code) {
                data = channel;
            }
        });

        this.state = {
            data: data
        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <Layout title={ this.state.data.name } back="/Video" backname="Video">
                <Player autoPlay={ true } src={ this.state.data.video } />
            </Layout>
        );
    }
}

export default Video;
