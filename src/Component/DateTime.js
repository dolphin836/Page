import React from 'react';

export default function DateTime (Component) {
    return class extends React.Component {
        constructor(props) {
            super(props);
        
            this.state = {
                nowDateTime: this.getDateTime(new Date())
            };
        }

        componentDidMount() {
            this.clock = setInterval(
                () => this.tick(),
                1000
            );
        }

        componentWillUnmount() {
            clearInterval(this.clock);
        }

        tick() {
            this.setState({
                nowDateTime: this.getDateTime(new Date())
            });
        }

        // 得到 Y-m-d H:i:s 格式的日期时间字符串
        getDateTime(dateTime) {
            let month = dateTime.getMonth() + 1;

            return dateTime.getFullYear() + '-' + this.zFill(month) + '-' + this.zFill(dateTime.getDate()) + ' ' + this.zFill(dateTime.getHours()) + ':' + this.zFill(dateTime.getMinutes()) + ':' + this.zFill(dateTime.getSeconds());
        }

        // 补零
        zFill(argc) {
            let s = "0" + argc;

            return s.substr(s.length - 2);
        }

        render () {
            return <Component nowDateTime={ this.state.nowDateTime } {...this.props} />
        }
    }
}