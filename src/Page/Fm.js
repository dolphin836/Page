import React, { PureComponent } from 'react';
import { Link } from "react-router-dom";
import Layout from '../Component/Layout';
import { Column, Image, Title } from "rbx";

const Asset   = '../Asset/Fm/';
const Channel = 2;

class Fm extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        };
    }

    componentDidMount() {
        for (let i = 1; i <= Channel; i++) {
            let server = Asset + i + '.json';

            let _self = this;

            fetch(server)
                .then(function (response) {
                    if (response.ok) {
                        let json = response.json();
                        
                        json.then(function(data) {
                            let channel = {
                                   name: data.name,
                                content: data.content,
                                  photo: data.photo,
                            };

                            _self.setState({
                                    data: _self.state.data.concat(channel)
                            });
                        });
                    }
                })
                .catch(function (error) {
                    console.log(JSON.stringify(error));
                });
        }
    }

    render() {
        return (
            <Layout title="音乐电台" subtitle="我年后虚度，空有一身疲惫">
                <Column.Group>
                    { this.state.data.map((channel, i) =>
                        <Column key={ i } size={ 3 }>
                            <Image.Container>
                                <Link to={ "/FM/Channel/" + (i + 1) }>
                                    <Image src={ channel.photo } className="channel-photo" />
                                </Link>
                            </Image.Container>
                            <Title as="h5" size={ 5 }>
                                { channel.name }
                            </Title>
                            <Title as="p" size={ 7 } subtitle className="has-text-grey has-text-weight-light">
                                { channel.content }
                            </Title>
                        </Column>
                    )}
                </Column.Group>
            </Layout>
        );
    }
}

export default Fm;
