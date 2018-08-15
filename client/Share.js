import React, { Component } from 'react';
import axios from 'axios';
import './Share.css'
import BikeShare from './Lists/BikeShare'

class Share extends Component {

    state = {
        data:'',
        accessKey: 'sXp8Sud2E-aWQwBRuSpTv4YOKnwKPm1zL7hNfZQsNdo',
        update: false,
        latitude: 'Enter Latitude',
        longitude: 'Enter Longitude',
        radius_km: 'Enter radius'
    }

    componentDidMount () {
        axios.get('https://api.coord.co/v1/bike/location?', {
            params: {
                latitude: "40.73935542",
                longitude: "-73.99931783",
                radius_km: "1",
                access_key: this.state.accessKey
            }
        })
        .then(res =>
            this.setState({
                data: res.data.features,
            })
        )
        .catch(err => console.log(err))
    }

    updateSettings = (e) => {
        if (e.target.name === "latitude") {
            this.setState({
                latitude: e.target.value
            })
        }

        if (e.target.name === "longitude") {
            this.setState({
                longitude: e.target.value
            })
        }

        if (e.target.name === "radius_km") {
            this.setState({
                radius_km: e.target.value
            })
        }
    }

    updateSite = () => {
        this.setState({
            data: ''
        })
        axios.get('https://api.coord.co/v1/bike/location?', {
            params: {
                latitude: this.state.latitude,
                longitude: this.state.longitude,
                radius_km: this.state.radius_km,
                access_key: this.state.accessKey
            }
        })
            .then(res =>
                this.setState({
                    data: res.data.features,
                })
            )
            .catch(err => console.log(err))
    }
    render () {
        let list = ''
        if (this.state.data === null) {
            list = <p>There is nothing here..</p>
        } else if (this.state.data === '') {
            list = <p>This is page is still loading.</p>
        } else {
            list = 
                    <div class="block">
                    {this.state.data.map(location => 
                        <p><BikeShare data={location}/></p>
                    )}
                    </div>
        }
        return (
            <div class="container">
                <input type="text" value={this.state.latitude} onChange={this.updateSettings} name="latitude" class="input"/>
                <input type="text" value={this.state.longitude} onChange={this.updateSettings} name="longitude" class="input"/>
                <input type="text" value={this.state.radius_km} onChange={this.updateSettings} name="radius_km" class="input"/>
                <button type="button" class="button" onClick={this.updateSite}>Click Me</button>
                {list}
            </div>
        )
    }
}

export default Share