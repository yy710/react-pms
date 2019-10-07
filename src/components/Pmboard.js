import React, { useState } from 'react';
import Pmlist from './Pmlist'
import './Pmboard.css'

let _pmList = [
    { auther: "张三", attach: "PSD" },
    { auther: "李四", attach: "EXCEL" },
    { auther: "王五", attach: "WORD" }
];

function Pmboard(props) {
    let [listItems, setPmList] = useState(data2Pmlist(_pmList));

    function addList(e) {
        console.log("click e: ", e.target.id);
        _pmList.push({ auther: "王找刘", attach: "WORD" });
        setPmList(data2Pmlist(_pmList));
    }

    return (
        <div className="list" style={{ background: props.color }}>
            {listItems}
            <div id={props.boardid} onClick={addList}>+新增</div>
        </div>
    );
}

function data2Pmlist(_list){
    const resulte = _list.map(item => {
        return (<Pmlist key={item.auther} auther={item.auther} time={(new Date()).toLocaleString()} attach={item.attach}></Pmlist>);
    });
    return resulte;
}

export default Pmboard;