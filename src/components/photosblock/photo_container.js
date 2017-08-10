/**
 * Created by y.troniak on 8/9/17.
 */
import React from 'react';

import parseJSON from '../modules/parse_json';
import PhotoItem from './photo_element';


class PhotoContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: []
        }
    }

    componentDidMount() {
        const root = 'https://jsonplaceholder.typicode.com';
        fetch(root + '/photos?_limit=10', {
            accept: 'application/json',
        }).then(parseJSON).then((r, u) => {
            const photos = r.map((e, n) => {
                return e
            });
            this.setState({photos});
        });
    }

    render() {
        return (
            <div className="Photo_container">
                {this.state.photos.map((photo,i) => {
                    console.log(photo);
                    return <PhotoItem photoEl={photo} key={photo.id}/>
                })}
            </div>
        )
    }
}

export default PhotoContainer;