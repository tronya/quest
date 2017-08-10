/**
 * Created by y.troniak on 8/9/17.
 */

import React from "react";

function PhotoItem(props) {
    return (
        <div className="photo-element">
            <img width="25" alt={props.photoEl.title} src={props.photoEl.url}/>
            <p>{props.photoEl.albumId}</p>
            <p>{props.photoEl.title}</p>
            <p>{props.photoEl.url}</p>
            <p>{props.photoEl.albumId}</p>
        </div>

    )
}

export default PhotoItem;