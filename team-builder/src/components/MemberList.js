import React from 'react';
import styled from 'styled-components'

const MemberListGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 50px;
`

const Member = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    width: 24%;
    margin-right: 1%;
`;
const Edit = styled.img`
    position: absolute;
    width: 25px;
    top: 5px;
    right: 5px;
    
`

function MemberList(props) {
  return (
    <MemberListGroup>
        {
            props.memberList.map((el, index) => (
                <Member>
                    <Edit src="https://cdn.pixabay.com/photo/2017/06/06/00/33/edit-icon-2375785_960_720.png" onClick={()=>{props.setEditing([index, el])}}/>
                    <h2>{`${el.name} - ${el.role}`}</h2>
                    <p>{el.email}</p>
                </Member>
                
            ))
        }
    </MemberListGroup>
  );
}

export default MemberList;
