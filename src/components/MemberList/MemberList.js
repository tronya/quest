import React from "react";


export default class MembersList extends React.Component {

  makeInitials(fn = "", ln = "") {
    let literalName = [];
    if (fn) {
      literalName.push(fn.charAt(0));
    }
    if (ln) {
      literalName.push(ln.charAt(0));
    }
    let literlBlocks = literalName.map((el) => {
      return <span key={el}>{el}</span>
    });
    return (
      <div key={fn} className="quest-member">
        <div className="literalName">
          {literlBlocks}
        </div>
      </div>
    )
  }

  render() {
    const {members} = this.props;
    let membersList;
    if (members) {
      membersList = members.map((member, i) => {
        let {user} = member;
        /* join_date,quest_status,email,fb_id,first_name,last_name */
        return this.makeInitials(user.first_name, user.last_name)
      });
      return (
        <div className="members-list">
          <span>
            <i className="fa fa-user-circle-o" aria-hidden="true"></i>
            Members:
          </span>
          {membersList}
        </div>
      )
    } else {
      return ""
    }

  }
};
