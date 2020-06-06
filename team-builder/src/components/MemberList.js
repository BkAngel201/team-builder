import React from 'react';
import styled from 'styled-components'

const MemberListGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 50px;
`

const Member = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    width: 24%;
    margin-right: 1%;
`;

function MemberList(props) {
  return (
    <MemberListGroup>
        {
            props.memberList.map(el => (
                <Member>
                    <h2>{`${el.name} - ${el.role}`}</h2>
                    <p>{el.email}</p>
                </Member>
                
            ))
        }
    </MemberListGroup>
  );
}

export default MemberList;
