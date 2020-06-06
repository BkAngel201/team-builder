import React, { useState } from 'react';
import './App.css';
import Form from "./components/Form"
import MemberList from "./components/MemberList"


function App() {

const [memberList, setMemberList] = useState([{name: 'Jose', email: 'josergz@gmail.com', role: 'CEO'}])

const addMember = (member) => {
  setMemberList([
    ...memberList,
    member
  ])
}
  return (
    <div className="App">
      <Form addMember={addMember}/>
      <MemberList memberList={memberList} />
    </div>
  );
}

export default App;
