import React, { useState, useEffect, useContext } from 'react';
import PmContext from './Context'
import Pmlist from './Pmlist'
import './Pmboard.css'

function Pmboard(props) {
    let { testContext } = useContext(PmContext);
    let pmList = props.pmList;
    let [listItems, setListItems] = useState(data2Pmlist(pmList));

    function AddList() {
        const newid = pmList[pmList.length - 1].id + 1;
        pmList.push({ id: newid, auther: "王找刘", attach: "WORD", test: 1 });
        //update
        setListItems(data2Pmlist(pmList));
        //callback
        props.onAddList(pmList);
    }

    return (
        <div>
            <div className="list" style={{ background: props.color }}>
                <div>{props.title}{testContext}</div>
                {listItems}
            </div>
            <div onClick={AddList}>+新增</div>
        </div>
    );
}

function data2Pmlist(_list) {
    const resulte = _list.map(item => {
        return (<div key={item.id}><Pmlist auther={item.auther} time={(new Date()).toLocaleString()} attach={item.attach} test={item.test ? item.test++ : 0}></Pmlist></div>);
    });
    return resulte;
}

export default Pmboard;