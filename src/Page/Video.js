import React, { PureComponent } from 'react';
import Layout from '../Component/Layout';
import { Player } from 'video-react';
import "../../node_modules/video-react/dist/video-react.css"; // import css

class Video extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        };
    }

    componentDidMount() {
        let _self = this;

        fetch('https://36video.oss-cn-hangzhou.aliyuncs.com/video.json')
            .then(function (response) {
                if (response.ok) {
                    let json = response.json();
                    
                    json.then(function(source) {
                        let data;

                        source.map((channel) => {
                            if (channel.code === _self.props.match.params.Code) {
                                data = channel;
                            }
                        });
                        // 更新数据
                        _self.setState({
                            data: data
                        });
                    });
                }
            })
            .catch(function (error) {
                console.log(JSON.stringify(error));
            });
    
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
