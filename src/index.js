import React from 'react'
import ReactDOM from 'react-dom';
import Router from '../client/Router';

const Root = () =>  (
        <div>
            <Router />
        </div>
    )

export default Root;

ReactDOM.render(<Root />, document.getElementById('head'))