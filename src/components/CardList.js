import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  if (false) {
    throw new Error('Womp')
  }
  return (
    <div>
      {!robots.length ? <h1>No Matches!</h1> :
      robots.map(robot => {
        return (
          <Card
            key={robot.id}
            id={robot.id}
            name={robot.name}
            email={robot.email}
            user={robot.username}
          />
        )
      })}
    </div>
  )
}

export default CardList;
