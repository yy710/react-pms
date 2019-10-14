import React, { useState, useEffect, useContext } from 'react';
import { Modal, Button }from 'antd';
import PmContext from './Context'
import Pmlist from './Pmlist'
import './Pmboard.css'

function Pmboard(props) {
    let { testContext } = useContext(PmContext);
    let pmList = props.pmList;
    let [listItems, setListItems] = useState(data2Pmlist(pmList));
    let [visible, setVisible] = useState(false);
    let [confirmLoading, setConfirmLoading] = useState(false);
    let [modalText, setModalText] = useState('Content of the modal');

    function AddList() {
        const newid = pmList[pmList.length - 1].id + 1;
        pmList.push({ id: newid, auther: "王找刘", attach: "WORD", test: 1 });
        //update
        setListItems(data2Pmlist(pmList));
        //callback
        props.onAddList(pmList);
    }

    function handleOk(){
       setModalText('The modal will be closed after two seconds');
       setConfirmLoading(true);
       setTimeout(()=>{
          setVisible(false);
          setConfirmLoading(true);
       },
       2000);
    }

    function handleCancel(){
        setVisible(false);
    }

    function showModal(){
        setVisible(true);
    }

    return (
        <div>
            <div>
              <Button type="primary" onClick={showModal}>Open Modal with async logic</Button>
              <Modal title="测试" visible={visible} confirmLoading={confirmLoading} onOk={handleOk} onCancel={handleCancel}><p>{modalText}</p></Modal>
            </div>
            <div className="list" style={{ background: props.color }}>
                <div style={{color: "white"}}>{props.title}{testContext}</div>
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