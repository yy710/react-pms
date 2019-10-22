import './Pmlist.css';
import React, { useEffect, useState } from 'react';
import { Card, Icon, Avatar, Modal, Button } from 'antd';
const { Meta } = Card;

function Pmlist(props) {
  const { auther, time, attach, test } = props;
  let [n, setN] = useState(0);

  useEffect(
    () => {
      return () => console.log("useEffect! ", test);
    },
    [test]
  );

  return (
    <div className="list-item" onClick={showDetail}>
      <div>
        <Card
          style={{ width: 300 }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <Icon type="setting" key="setting" />,
            <Icon type="edit" key="edit" />,
            <Icon type="ellipsis" key="ellipsis" />,
          ]}
        >
          <Meta
            avatar={<Avatar icon="user" size="large" />}
            title="Card title"
            description="This is the description"
          />
        </Card>
      </div>
      {/* <ul>
        <li>作者：{auther || "李四"}</li>
        <li>创作时间：{time || "2019年9月26日11：50"}</li>
        <li>附件：{attach || "客户需求.doc"}</li>
        <li>点击预览</li>
      </ul> */}
    </div>
  );

  function showDetail() {
    setN(++n);
    console.log("show detail! ", n);
  }
}

export default Pmlist;