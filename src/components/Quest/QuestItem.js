import React from 'react';
import {Link} from "react-router-dom";
import Moment from 'react-moment';
import AssignBlock from "../AssignBlock/AssignBlock";

const QuestItem = ({quest}) => {
  const bg_image = {
    backgroundImage: `url(${quest.logo})`
  };

  return (
    <div className="quest-item" style={bg_image}>
      <div className="quest-item-wrapp">
        <p className="card-title">{quest.name}</p>
        <p className="card-date">
          <Moment fromNow>{quest.start_date}</Moment>

        </p>
        <Link className="btn" to={`/quest/${quest.id}`}>Detail</Link>
        <div className="assignee">
          <AssignBlock showButton={false} {...quest}/>
        </div>
      </div>
    </div>
  )
}
export default QuestItem;