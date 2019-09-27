import React from 'react';
import Layout from '../Component/Layout';

class GeneratorRandonPassword extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout title="生成更安全的随机密码" subtitle="Generator random and safe password">
      </Layout>
    );
  }
}

export default GeneratorRandonPassword;
