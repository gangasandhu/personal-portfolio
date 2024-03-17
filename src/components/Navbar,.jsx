import React from 'react'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-dark p-4" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">Ganga Singh</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarColor02">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item ms-4">
                            <a class="nav-link active" href="#">Home
                                <span class="visually-hidden">(current)</span>
                            </a>
                        </li>
                        <li class="nav-item ms-4">
                            <a class="nav-link" href="#">Features</a>
                        </li>
                        <li class="nav-item ms-4">
                            <a class="nav-link" href="#">Pricing</a>
                        </li>
                        <li class="nav-item ms-4">
                            <a class="nav-link" href="#">About</a>
                        </li>
                       
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar