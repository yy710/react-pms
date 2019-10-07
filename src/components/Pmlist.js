import React from 'react';
import './Pmlist.css'

function Pmlist(props){
  const {auther, time, attach} = props;
    return (
      <div className="list-item">
      <ul>
        <li>作者：{auther||"李四"}</li>
        <li>创作时间：{time||"2019年9月26日11：50"}</li>
        <li>附件：{attach||"客户需求.doc"}</li>
        <li>点击预览</li>
      </ul>
    </div>
    );
  }

export default Pmlist;