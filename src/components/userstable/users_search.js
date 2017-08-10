/**
 * Created by y.troniak on 8/9/17.
 */
import React, {Component} from 'react';

class UsersSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    handleSearch(event) {
        console.log(event.target.value.toLowerCase());
        // let searchQuery = event.target.value.toLowerCase();
        // let displayUsers = this.state.users.filter(function (el) {
        //     var searchValue = el.name.toLowerCase();
        //     console.log(searchValue);
        // })
    }

    render() {
        console.log(this.state);
        return (
            <div className="search-input-wrapper">
                <input type="text" className="search-filed"
                       onChange={event => this.setState({term: event.target.value})}/>
                <span>{this.state.term}</span>
            </div>
        )
    }
}

export default UsersSearch;