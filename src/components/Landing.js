import React, { Component } from 'react';
import './components.css';
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            users: [
                { name: "Mona", color: "#3498db" },
                { name: "Jasmyne", color: "#e74c3c" },
                { name: "Aura", color: "#2ecc71" },
                { name: "Tina", color: "#f1c40f" }
            ]
        }
    }
    render() {
        return (
            <div>
                <h2 className="heading">WHO'S WATCHING?</h2>
                <div className="users">
                    {this.state.users.map(
                        u => <Link to="/catalog" className="unlink">
                                <div className="user" style={{"backgroundColor":u.color}}>
                                    {u.name}
                                </div>
                            </Link>
                        )}
                </div>
            </div>
        );
    }
}

export default Home;