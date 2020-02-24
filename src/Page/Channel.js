import React, { PureComponent } from 'react';
import FmLayout from '../Component/FmLayout';
import { Block, Button, Image, Title, Icon, Progress, Content } from "rbx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAudio } from '@fortawesome/free-solid-svg-icons';
import Playing from '../Component/Playing';

const Asset = '../../Asset/Fm/';
const Photo = '../../Asset/Fm/Photo/';
const Mp3   = '../../Asset/Fm/Mp3/';

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
                     mute: "静音",
                     play: "暂停",
                   volume: 100
               },
           duration: 100,
             second: 0
        };

        this.music = React.createRef();
    }

    componentDidMount() {
        // 时钟
        this.clock = setInterval(
            () => this.tick(),
            1000
        );

        let server = Asset + this.props.match.params.Id + ".json";

        let _self = this;

        fetch(server)
            .then(function (response) {
                if (response.ok) {
                    let json = response.json();
                    
                    json.then(function(data) {  
                        _self.setState({
                               name: data.name,
                            content: data.content,
                              photo: data.photo,
                               data: data.data,
                                mp3: Mp3 + data.data[0].mp3
                        });

                        // 设置页面标题
                        document.title = data.name;
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
        this.setState({
            duration: Math.trunc(this.music.current.duration),
              second: Math.trunc(this.music.current.currentTime)
        });
    }

    // 播放
    song = (i) => {
        this.setState({
            mp3: Mp3 + this.state.data[i].mp3,
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
                  mute: this.music.current.muted ? '取消静音' : '静音',
                  play: this.music.current.paused ? '播放' : '暂停',
                volume: Math.trunc(this.music.current.volume * 100)
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
                <Progress color="success" className="channel-progress" value={ this.state.second } max={ this.state.duration } />

                <Content className="is-pulled-right"> 
                    <Button.Group>
                        <Button outlined color="danger" static rounded>分 享</Button>
                        <Button outlined color="link" static rounded>下 载</Button>
                    </Button.Group>
                </Content>

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

                {/* <Button.Group>
                    <Button onClick={() => this.mute() }>{ this.state.text.mute }</Button>
                    <Button onClick={() => this.play() }>{ this.state.text.play }</Button>
                    <Button onClick={() => this.next() }>下一首</Button>
                    <Button onClick={() => this.last() }>上一首</Button>
                </Button.Group>
                <input type="range" onChange={this.volumeChange} step="0.01" min="0" max="1" /> { this.state.text.volume } */}
                
            </FmLayout>
        );
    }
}

export default Channel;
