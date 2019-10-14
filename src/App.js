import React, { useState, useContext } from "react";
import Pmboard from './components/Pmboard'
import PmContext from './components/Context'
//import logo from './logo.svg';
import './App.css';

let arr_pmList = [
  [
    { id: 1, auther: "张三1", attach: "PSD" },
    { id: 2, auther: "李四1", attach: "EXCEL" },
    { id: 3, auther: "王五1", attach: "WORD" },
    { id: 111, auther: "王五11", attach: "WORD" }
  ],
  [
    { id: 4, auther: "张三2", attach: "PSD" },
    { id: 5, auther: "李四2", attach: "EXCEL" },
    { id: 6, auther: "王五2", attach: "WORD" }
  ],
  [
    { id: 7, auther: "张三3", attach: "PSD" },
    { id: 8, auther: "李四3", attach: "EXCEL" },
    { id: 9, auther: "王五3", attach: "WORD" }
  ]
];

function App() {
  let [ count, setCount ] = useState(100);

  function addList(n, r) {
    //console.log("click e: ", e.target.id);
    console.log("addList(", n, ")");
    console.log(r);
  }

  function TestContest(props) {
    const { testContext } = useContext(PmContext);
    return (<div>this context: {testContext}</div>);
  }

  return (
    <div className="board">
      <PmContext.Provider value={{ testContext: count }}>
        {/* <TestContest></TestContest> */}
        <Pmboard key="collections" color="orange" title="客户需求记录" onAddList={r => addList(1, r)} pmList={arr_pmList[0]}></Pmboard>
        <Pmboard key="tasks" color="grey" title="已分配任务" onAddList={r => addList(2, r)} pmList={arr_pmList[1]}></Pmboard>
        <Pmboard key="finished" color="green" title="已完成任务" onAddList={r => addList(3, r)} pmList={arr_pmList[2]}></Pmboard>
      </PmContext.Provider>
      {/* <button onClick={() => setCount(++count)}>click me!</button> */}
    </div>
  );
}

export default App;
