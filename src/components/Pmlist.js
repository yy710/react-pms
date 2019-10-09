import React, { useEffect, useState } from 'react';
import './Pmlist.css'

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
      <ul>
        <li>作者：{auther || "李四"}</li>
        <li>创作时间：{time || "2019年9月26日11：50"}</li>
        <li>附件：{attach || "客户需求.doc"}</li>
        <li>点击预览</li>
      </ul>
    </div>
  );

  function showDetail() {
    setN(++n);
    console.log("show detail! ", n);
  }
}

export default Pmlist;