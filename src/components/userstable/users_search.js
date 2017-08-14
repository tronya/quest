/**
 * Created by y.troniak on 8/9/17.
 */
import React, {Component} from 'react';


class SearchComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            verb: ''
        }
    }

    handleSearch(verb) {
        this.setState({verb});
        this.props.onSearchHendler(verb);
    }

    render() {
        return (
            <section>
                <div className="search-input-wrapper">
                    <input type="text" className="search-filed"
                           placeholder="Search in YouTube..."
                           value={this.state.verb}
                           onChange={event => this.handleSearch(event.target.value)}/>
                    <span>{this.state.verb}</span>
                </div>
            </section>
        )
    }
}

export default SearchComponent;