import React, { PureComponent } from 'react';
import Layout from '../Component/Layout';
import { Player } from 'video-react';
import { Title } from "rbx";
import "../../node_modules/video-react/dist/video-react.css"; // import css

class Video extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
             name: '',
            video: '',
             list: []
        };
    }

    componentDidMount() {
        let _self = this;

        fetch('https://36video.oss-cn-hangzhou.aliyuncs.com/video.json')
            .then(function (response) {
                if (response.ok) {
                    let json = response.json();
                    
                    json.then(function(source) {
                        let name;
                        let video;
                        let list;

                        source.map((channel) => {
                            if (channel.code === _self.props.match.params.Code) {
                                name = channel.name;

                                if (channel.list) {
                                    video = channel.list[0].video;
                                    list  = channel.list;
                                } else {
                                    video = channel.video;
                                }
                            }
                        });
                        // 更新数据
                        _self.setState({
                             name: name,
                            video: video,
                             list: list
                        });
                    });
                }
            })
            .catch(function (error) {
                console.log(JSON.stringify(error));
            });
    }

    switchVideo = (channel) => {
        this.setState({
            video: channel.video
        });
    }

    render() {
        if (this.state.list) {
            return (
                <Layout title={ this.state.name } back="/Video" backname="Video">
                    <Player autoPlay={ true } src={ this.state.video } />
    
                    { this.state.list.map((channel, i) =>
                        <Title onClick={() => this.switchVideo(channel) } key={ i } as="p" size={ 5 } subtitle className="has-text-dark has-text-weight">
                            { channel.name }
                        </Title>
                    )}
                </Layout>
            );
        } else {
            return (
                <Layout title={ this.state.name } back="/Video" backname="Video">
                    <Player autoPlay={ true } src={ this.state.video } />
                </Layout>
            );
        }
    }
}

export default Video;
