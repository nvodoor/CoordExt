import React from 'react'
import './BikeShare.css'

const BikeShare = (props) => (
    <div key={props.data.id} class="lists">
                <span>{props.data.properties.name}</span>
                <span>{props.data.properties.location_type}</span>
        </div>
)

export default BikeShare;