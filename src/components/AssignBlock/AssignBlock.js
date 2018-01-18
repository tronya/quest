import React, {Component} from "react";

class AssignBlock extends Component {

  assignedCheck() {
    let {is_assigned, id} = this.props;
    this.props.questSubscription(id, is_assigned);
  }

  render() {
    let {showButton, is_assigned} = this.props;

    const button = () => {
      if (showButton) {
        let text = is_assigned ? "Let me quit" : "Assign me!";
        let btnClassName = is_assigned ? "success btn" : "error btn";
        return (
          <button onClick={this.assignedCheck.bind(this)} className={btnClassName}>{text}</button>
        )
      }
    };

    if (is_assigned) {
      return (
        <div className="assignee">
          {button()}
          <div className="is-assigned">You assigned to quest</div>
        </div>
      )
    } else {
      return (
        <div className="assignee">
          {button()}
          <div className="not-assigned">You not assigned to quest</div>
        </div>
      )
    }
  }
}

export default AssignBlock;