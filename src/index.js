import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Userstable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        };
    }

    componentDidMount() {
        fetch(`http://192.168.1.102:3008/users/`, {
            accept: 'application/json',
        }).then(parseJSON).then((r, u) => {
            const users = r.map((e, n) => {
                return e
            });
            this.setState({users});
        });
    }

    render() {
        console.log(this.state.users);
        return (
            <table>
                <thead>
                <th>Name</th>
                <th>Coordinates</th>
                <th>Is Active</th>
                </thead>
                <tbody>
                {this.state.users.map((user, i) =>
                    <Useritem user={user} key={i}/>
                )}
                </tbody>
            </table>
        )
    }
}

function Useritem(props) {
    return <tr className="User_item" key="{props.user.id}">
        <td className="user-name">{props.user.name}</td>
        <td>
            <tr>
                <td><p>Lat. <span>{props.user.coordinates.latitude}</span></p>
                    <p>Lon. <span>{props.user.coordinates.longitude}</span></p></td>
            </tr>
        </td>
        <td className="user-active">{props.user.isActive}</td>
    </tr>;
}
function parseJSON(response) {
    return response.json();
}
// ========================================

ReactDOM.render(
    <Userstable />,
    document.getElementById('root')
);
