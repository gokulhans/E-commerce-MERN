import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav class=" bg-light mb-3 p-3 row">                
                <p><Link to="/">TodoList</Link></p>
                <p><Link to="/create">CreateTodo</Link></p>
            </nav>
        </div>
    )
}

export default Navbar
