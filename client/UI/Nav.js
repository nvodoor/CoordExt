import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css'

const Nav = () => (
    <div>
        <nav>
            <ul class="Nav">
                <li class="Link"><NavLink to='index'>Home</NavLink></li>
                <li class="Link"><NavLink to='bikeshares'>Bike Share</NavLink></li>
                <li class="Link"><NavLink to='findbike' >Find Bike</NavLink></li>
            </ul>
        </nav>
    </div>
)

export default Nav;
