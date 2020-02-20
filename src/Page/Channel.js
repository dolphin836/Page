import React, { PureComponent } from 'react';
import FmLayout from '../Component/FmLayout';
import { List, Button } from "rbx";

const Asset = '../../Asset/Fm/';
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
               }
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
        // console.log(this.music.current.readyState);
        // console.log(this.music.current.duration);
        // console.log(this.music.current.currentTime);
        // console.log(this.music.current.ended);
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
            <FmLayout title={ this.state.name } subtitle={ this.state.content }>
                <audio src={ this.state.mp3 } ref={ this.music } onEnded= { () => this.next() } autoPlay>
                </audio>
                <Button.Group>
                    <Button onClick={() => this.mute() }>{ this.state.text.mute }</Button>
                    <Button onClick={() => this.play() }>{ this.state.text.play }</Button>
                    <Button onClick={() => this.next() }>下一首</Button>
                    <Button onClick={() => this.last() }>上一首</Button>
                </Button.Group>
                <input type="range" onChange={this.volumeChange} step="0.01" min="0" max="1" /> { this.state.text.volume }
                <List>
                    { this.state.data.map((song, i) =>
                        <List.Item key={ i } onClick={() => this.song(i) }>{ song.name }</List.Item>
                    )}   
                </List>
            </FmLayout>
        );
    }
}

export default Channel;
