import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <div>


                {/* Nav Bar strat */}
                <nav>
                    <input id="nav-toggle" type="checkbox" />
                    <div class="logo">WEATHER<strong>APP</strong></div>
                    <ul class="links">
                        <li><a href="/">Home</a></li>
                        <li><a href="/weather">Weather</a></li>
                        <li><a href="/about">About</a></li>


                    </ul>
                    <label for="nav-toggle" class="icon-burger">
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                    </label>
                </nav>


                {/* Nav Bar strat */}


            </div>
        )
    }
}

export default Navbar