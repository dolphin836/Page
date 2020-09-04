import React, { PureComponent } from 'react';
import Layout from '../Component/Layout';
import { Player } from 'video-react';
import { Column, Menu } from "rbx";
import "../../node_modules/video-react/dist/video-react.css"; // import css

class Video extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
             name: '',
            video: '',
             list: [],
                i: 0
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
                        // 设置页面标题
                        document.title = name;
                    });
                }
            })
            .catch(function (error) {
                console.log(JSON.stringify(error));
            });
    }

    switchVideo = (channel, i) => {
        this.setState({
            video: channel.video,
                i: i
        });
    }

    render() {
        if (this.state.list) {
            return (
                <Layout title={ this.state.name } back="/Video" backname="Video">
                    <Column.Group>
                        <Column>
                            <Player autoPlay={ true } src={ this.state.video } />
                        </Column>
                        <Column size="2">
                            <Menu>
                                <Menu.Label>播放列表</Menu.Label>
                                <Menu.List>
                                    { this.state.list.map((channel, i) =>
                                        <Menu.List.Item key={ i } onClick={() => this.switchVideo(channel, i) } active={ i === this.state.i }>{ channel.name }</Menu.List.Item>
                                    )}
                                </Menu.List>
                            </Menu>
                        </Column>
                    </Column.Group>
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
