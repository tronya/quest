/**
 * Created by y.troniak on 8/9/17.
 */
import React from 'react';

import Useritem from './users_item';
import UsersSearch from './users_search';
import parseJSON from '../modules/parse_json';

class Userstable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }
    componentDidMount() {
        const root = 'https://jsonplaceholder.typicode.com';
        fetch(root + '/users', {
            accept: 'application/json',
        }).then(parseJSON).then((r, u) => {
            const users = r.map((e, n) => {
                return e
            });
            this.setState({users});
        });
    }

    render() {
        return (
            <div className="User_list">
                <UsersSearch/>
                {this.state.users.map((val, i) => {
                    return <Useritem key={val.id} item={val}/>
                })
                }
            </div>
        )
    }
}
export default Userstable;