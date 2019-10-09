import React, { useState } from 'react';
import Pmlist from './Pmlist'
import './Pmboard.css'

function Pmboard(props) {
    let pmList = props.pmList;
    let [listItems, setListItems] = useState(data2Pmlist(pmList));

    function AddList() {
        const newid = pmList[pmList.length - 1].id + 1;
        pmList.push({ id: newid, auther: "王找刘", attach: "WORD", test: 1 });
        setListItems(data2Pmlist(pmList));
        props.onAddList(pmList);
    }

    return (
        <div className="list" style={{ background: "white" }}>
            <div>{props.title}</div>
            {listItems}
            <div onClick={AddList}>+新增</div>
        </div>
    );
}

function data2Pmlist(_list) {
    const resulte = _list.map(item => {
        return (<Pmlist key={item.id} auther={item.auther} time={(new Date()).toLocaleString()} attach={item.attach} test={item.test?item.test++:0}></Pmlist>);
    });
    return resulte;
}

export default Pmboard;