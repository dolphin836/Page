import React, { PureComponent } from 'react';
import FmLayout from '../Component/FmLayout';
import { Block, Button, Title, Icon, Progress, Content, Level, Column } from "rbx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faPauseCircle, faStepBackward, faStepForward, faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons'
import Playing from '../Component/Playing';

class Channel extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
               name: '',
            content: '',
              photo: '',
                mp3: '',
                  i: 0,
               data: [],
               text: {
                    muteIcon: <FontAwesomeIcon icon={ faVolumeMute } />,
                    playIcon: <FontAwesomeIcon icon={ faPlayCircle } size="2x" />
               },
           duration: 100,
             second: 0,
             durationText: '00:00',
             secondText: '00:00'
        };

        this.music = React.createRef();
    }

    componentDidMount() {
        // 时钟
        this.clock = setInterval(
            () => this.tick(),
            1000
        );

        let server = 'https://36video.oss-cn-hangzhou.aliyuncs.com/Fm.json';
        let _self  = this;

        fetch(server)
            .then(function (response) {
                if (response.ok) {
                    let json = response.json();
                    
                    json.then(function(data) {
                        data.map((channel) => {
                            if (channel.code === _self.props.match.params.Code) {
                                _self.setState({
                                       name: channel.name,
                                    content: channel.content,
                                      photo: channel.photo,
                                       data: channel.data,
                                        mp3: channel.data[0].mp3
                                });
     
                                // 设置页面标题
                                document.title = channel.name;
                            }
                        });
                    });
                }
            })
            .catch(function (error) {
                console.log(JSON.stringify(error));
            });
    }

    componentWillUnmount() {
        clearInterval(this.clock);
    }

    tick() {
        let duration = Math.trunc(this.music.current.duration);
        let second   = Math.trunc(this.music.current.currentTime);

        let durationText = this.formatTime(duration);
        let secondText   = this.formatTime(second);

        this.setState({
                duration: duration,
                  second: second,
            durationText: durationText,
              secondText: secondText
        });
    }

    formatTime (second) {
        let m = parseInt(second / 60);
        let s = second - m * 60;

        return this.zFill(m) + ':' + this.zFill(s);
    }

      // 补零
    zFill(argc) {
        let s = "0" + argc;

        return s.substr(s.length - 2);
    }

    // 播放
    song = (i) => {
        this.setState({
            mp3: this.state.data[i].mp3,
              i: i
        }, () => {
            this.music.current.play();
            this.text();
        });
    }

    // 下一首
    next = () => {
        let next = this.state.i + 1;

        if (next >= this.state.data.length) {
            next = 0;
        }

        this.song(next);
        this.text();
    }

    // 上一首
    last = () => {
        let next = this.state.i - 1;

        if (next <= 0) {
            next = this.state.data.length - 1;
        }

        this.song(next);
        this.text();
    }

    // 静音
    mute = () => {
        this.music.current.muted = ! this.music.current.muted;

        this.text();
    }

    // 播放
    play = () => {
        if (this.music.current.paused) {
            this.music.current.play();
        } else {
            this.music.current.pause();
        }

        this.text();
    }

    // 更新文案
    text () {
        this.setState({
            text: {
                muteIcon: this.music.current.muted  ? <FontAwesomeIcon icon={ faVolumeUp } />             : <FontAwesomeIcon icon={ faVolumeMute } />,
                playIcon: this.music.current.paused ? <FontAwesomeIcon icon={ faPlayCircle } size="2x" /> : <FontAwesomeIcon icon={ faPauseCircle } size="2x" />
            }
        });
    }

    // 音量
    volumeChange = (e) => {
        this.music.current.volume = e.target.value;
        this.text();
    };

    render() {
        return (
            <FmLayout title={ this.state.name } content={ this.state.content } photo={ this.state.photo } >
                <audio src={ this.state.mp3 } ref={ this.music } onEnded= { () => this.next() } autoPlay>
                </audio>

                <Progress color="success" className="channel-progress" style={{ marginBottom: '.5rem' }} value={ this.state.second } max={ this.state.duration } />

                <Level breakpoint="mobile">
                    <Level.Item align="left">
                        <Title as="p" size={ 7 } subtitle className="has-text-grey-light has-text-weight-light">
                            { this.state.secondText }
                        </Title>
                    </Level.Item>
                    <Level.Item align="right">
                        <Title as="p" size={ 7 } subtitle className="has-text-grey-light has-text-weight-light">
                            { this.state.durationText }
                        </Title>
                    </Level.Item>
                </Level>
 
                {/* <Icon onClick={() => this.mute() } size="large" color="success">
                    { this.state.text.muteIcon }
                </Icon> */}
                {/* <input type="range" onChange={this.volumeChange} step="0.01" min="0" max="1" /> */}

                <Level breakpoint="mobile">
                    <Level.Item>
                        <Icon onClick={() => this.last() } size="large" color="success">
                            <FontAwesomeIcon icon={ faStepBackward } />
                        </Icon>
                    </Level.Item>
                    <Level.Item>
                        <Icon onClick={() => this.play() } size="large" color="success">
                            { this.state.text.playIcon }
                        </Icon>
                    </Level.Item>
                    <Level.Item>
                        <Icon onClick={() => this.next() } size="large" color="success">
                            <FontAwesomeIcon icon={ faStepForward } />
                        </Icon>
                    </Level.Item>
                </Level>

                <Content className="channel-list">
                { this.state.data.map((song, i) =>
                    <Block key={ i } onClick={() => this.song(i) } className="channel-song">
                        <Playing ListId={ i } RunId={ this.state.i } />
                        <Title as="h6" size={ 6 } className="has-text-grey-dark has-text-weight-light">
                            { song.name }
                        </Title>
                        <Title as="p" size={ 7 } subtitle className="has-text-grey-light has-text-weight-light">
                            { song.name }
                        </Title>
                    </Block>
                )}
                </Content>
            </FmLayout>
        );
    }
}

export default Channel;
