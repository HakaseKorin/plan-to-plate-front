import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';

class TopBar extends Component {
    constructor(props) {
        super(props);

        this.handleToggle = this.handleToggle.bind(this);
    }

    state = {
        show: false
    }

    handleToggle() {
        const show = !this.state.show;
        this.setState({ show })
    }
    render() { 
        return (
            <React.Fragment>
                <nav className="navbar navbar-dark bg-dark">
                    <div className="container-fluid">
                        <button className="navbar-toggler" onClick={this.handleToggle}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <Link className='navbar-brand' to='/recipes'>Home</Link>
                        <a className='navbar-brand'>Socials</a>
                    </div>
                </nav>

                <Offcanvas show={this.state.show} onHide={this.handleToggle}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        Some text as placeholder. In real life you can have the elements you
                        have chosen. Like, text, images, lists, etc.
                    </Offcanvas.Body>
                </Offcanvas>
            </React.Fragment>
        );
    }
}

export default TopBar;