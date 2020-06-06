import React, { useState } from 'react';
import './App.css';
import Form from "./components/Form"
import MemberList from "./components/MemberList"


function App() {

const [memberList, setMemberList] = useState([{name: 'Jose', email: 'josergz@gmail.com', role: 'CEO'}])
const [editing, setEditing] = useState(null)

const addMember = (member) => {
  setMemberList([
    ...memberList,
    member
  ])
}

const editMember = (id, member) => {
  let actualList = [...memberList]
  actualList[id] = member
  setMemberList(actualList)
  setEditing(null)
}

  return (
    <div className="App">
      <Form addMember={addMember} editMember={editMember} editing={editing} editMember={editMember}/>
      <MemberList memberList={memberList} setEditing={setEditing}/>
    </div>
  );
}

export default App;
