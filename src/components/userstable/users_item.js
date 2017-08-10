/**
 * Created by y.troniak on 8/9/17.
 */
import React from 'react';

function Useritem(props) {
    return (
        <div className="User_item">
            <div className="User_address">
                <p>{props.item.address.city}</p>
                <p>{props.item.address.street}</p>
                <p>{props.item.address.suite}</p>
                <p>{props.item.address.zipcode}</p>
                <div>
                    <p>{props.item.address.geo.lat}</p>
                    <p>{props.item.address.geo.lon}</p>
                </div>
            </div>

            <div className="User_company">
                <p>{props.item.company.bs}</p>
                <p>{props.item.company.catchPhrase}</p>
                <p>{props.item.company.name}</p>
            </div>
            <div className="User_info">
                <p>{props.item.email}</p>
                <p>{props.item.name}</p>
                <p>{props.item.phone}</p>
                <p>{props.item.username}</p>
                <p>{props.item.website}</p>
            </div>
        </div>
    )
}

export default Useritem;