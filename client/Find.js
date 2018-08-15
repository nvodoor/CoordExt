import React, { Component } from 'react'
import axios from 'axios';



class Find extends Component {

    state = {
        data: '',
        accessKey: 'sXp8Sud2E-aWQwBRuSpTv4YOKnwKPm1zL7hNfZQsNdo',
        update: false,
        find: 'Enter station'
    }

    render() {
        return (
            <div class="container">
                <input type="text" value={this.state.find} onChange={this.handleState} class="input"/>
                <p> Something to see here.</p>
            </div>
        )
    }
} 

export default Find;