import React from 'react';

const QuestItem = ({quest}) => {
  console.log(quest)
  return (
    <div className="col s12 m6">
      <div className="card hoverable small">
        <div className="card-image">
          <img src={quest.logo} alt={quest.name}/>
          <span className="card-title">{quest.name}</span>
        </div>
        <div className="card-content">
          <p>{quest.description}</p>
        </div>
      </div>
    </div>
    // <div className="quest-item">
    //   <img src={quest.logo} alt={quest.name}/>
    //   <div className="quest-item-info">
    //     <h3>{quest.name}</h3>
    //     <h4>{quest.description}</h4>
    //     <p>Count of markers:{quest.markers.length}</p>
    //     <p>{quest.start_date}</p>
    //   </div>
    // </div>
  )
}
export default QuestItem;