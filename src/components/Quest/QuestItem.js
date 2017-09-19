import React from 'react';

const QuestItem = ({quest}) => {
  console.log(quest)
  return (
    <div className="quest-item">
      <h3>{quest.name}</h3>
      <h4>{quest.description}</h4>
      <img src={quest.logo} alt={quest.name}/>
      <p>Count of markers:{quest.markers.length}</p>
      <p>{quest.start_date}</p>
    </div>
  )
}
export default QuestItem;