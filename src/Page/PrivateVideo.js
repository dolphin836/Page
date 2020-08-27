import React, { PureComponent } from 'react';
import { Link } from "react-router-dom";
import Layout from '../Component/Layout';
import { Column, Image, Title, Tab } from "rbx";
import Data from '../Data/video.json';

class PrivateVideo extends PureComponent {
    constructor(props) {
        super(props);

        let categoryName = ["全部"];
        let categoryData = [
            {
                    name: "全部",
                   count: 0,
                isActive: true
            }
        ];
        let data         = [];

        Data.map((channel) => {
            let index = categoryName.indexOf(channel.category);

            if (index === -1) { // 不存在
                categoryName.push(channel.category);
                categoryData.push({
                        name: channel.category,
                       count: 1,
                    isActive: false
                });

                categoryData[0].count++;     // 全部分类数量加一
            } else { // 已存在
                categoryData[index].count++; // 当前分类数量加一
                categoryData[0].count++;     // 全部分类数量加一
            }

            data.push(channel);
        });

        this.state = {
            categoryData: categoryData,
                    data: data
        };
    }
    // 筛选分类
    category = (categoryName) => {
        let data = [];

        Data.map((channel) => {
            if (categoryName === '全部' || channel.category === categoryName) {
                data.push(channel);
            }
        });

        this.setState(state => ({
            categoryData: state.categoryData.map(
                item => (item.name === categoryName ? Object.assign(item, { isActive: true }) : Object.assign(item, { isActive: false }))
            ),
            data: data
        }));
    }

    render() {
        return (
            <Layout title="私人视频" subtitle="我年后虚度，空有一身疲惫">
            <Tab.Group>
                {
                    this.state.categoryData.map((item, i) => 
                    <Tab active={ item.isActive } key={ i } onClick={() => this.category(item.name) }>{ item.name } - { item.count }</Tab>
                )}
            </Tab.Group>
                <Column.Group multiline>
                    { this.state.data.map((channel, i) =>
                        <Column key={ i } size={ 3 }>
                            <Image.Container>
                                <Link to={ "/Video/" + channel.code }>
                                    <Image src={ channel.cover } className="channel-photo" />
                                </Link>
                            </Image.Container>
                            <Title as="p" size={ 6 } subtitle className="has-text-grey has-text-weight-light">
                                { channel.name }
                            </Title>
                        </Column>
                    )}
                </Column.Group>
            </Layout>
        );
    }
}

export default PrivateVideo;
