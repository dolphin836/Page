import React, { PureComponent } from 'react';
import { Link } from "react-router-dom";
import Layout from '../Component/Layout';
import { Column, Image, Title, Tab } from "rbx";

class PrivateVideo extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
                  source: [], // 所有记录
            categoryData: [], // 分类数据
                    data: []  // 当前展示记录
        };
    }

    componentDidMount() {
        let _self = this;

        fetch('https://36video.oss-cn-hangzhou.aliyuncs.com/video.json')
            .then(function (response) {
                if (response.ok) {
                    let json = response.json();
                    
                    json.then(function(source) {
                        let categoryName = ["全部"];
                        let categoryData = [
                            {
                                    name: "全部",
                                   count: 0,
                                isActive: true
                            }
                        ];
                        // 解析数据得到分类数据
                        source.map((channel) => {
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
                        });
                        // 排序：按添加日期降序
                        source.sort(function (a, b) {
                            let dateA      = new Date(a.update_date);
                            let timestampA = dateA.getTime();

                            let dateB      = new Date(b.update_date);
                            let timestampB = dateB.getTime();

                            return timestampB - timestampA;
                        });
                        // 更新数据
                        _self.setState({
                                  source: source,
                            categoryData: categoryData,
                                    data: source
                        });
                    });
                }
            })
            .catch(function (error) {
                console.log(JSON.stringify(error));
            });
    
    }

    // 筛选分类
    category = (categoryName) => {
        let data = [];

        this.state.source.map((channel) => {
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
                            <Title as="p" size={ 6 } subtitle className="has-text-dark has-text-weight channel-name" style={{ marginBottom: '.4rem', minHeight: '2.5rem' }}>
                                { channel.name }
                            </Title>
                            <Title as="p" size={ 7 } subtitle className="has-text-grey has-text-weight-light">
                                添加日期：{ channel.update_date }<span className="is-pulled-right">{ channel.list ? '合集 - ' + channel.list.length : '' }</span>
                            </Title>
                        </Column>
                    )}
                </Column.Group>
            </Layout>
        );
    }
}

export default PrivateVideo;
