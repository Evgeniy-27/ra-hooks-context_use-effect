import React from 'react';

function ListItem ({viewDetails, id, name}) {
    return (
        <li onClick={() => viewDetails(id)}>{name}</li>
    )

}

export default function List (props) {
    const {users, viewDetails} = props;

    return (
        <ul className='users-list'>
            {users.map(o => <ListItem key={o.id} viewDetails={viewDetails} id={o.id} name={o.name}/>)}
        </ul>
    )

}