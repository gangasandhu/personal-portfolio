import React from 'react'

const Projects = () => {
    return (

        <div id='projects' class="container mt-5">
            <h2 class="text-center mb-4">Projects Showcase</h2>
            <div class="row">

                <div class="col-md-4">
                    <div class="card">
                        <img src="https://picsum.photos/200/100" class="card-img-top" alt="Project 1 Image" />
                        <div class="card-body">
                            <h5 class="card-title">SmartScript</h5>
                            <p class="card-text">AI-assisted code-learning application using React. The application integrates a code editor, a compiler, and an AI assistant to provide a comprehensive and interactive learning environment for coding enthusiasts.</p>
                            <a href="https://github.com/gangasandhu/smart-script" class="btn btn-primary" target="_blank">GitHub Repo</a>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card">
                        <img src="https://picsum.photos/200/100" class="card-img-top" alt="Project 2 Image" />
                        <div class="card-body">
                            <h5 class="card-title">Blog App</h5>
                            <p class="card-text">A blog app created using Django The app includes several features such as user authentication, profile creation, blog post creation, updating and deleting, commenting, and pages for blog posts.</p>
                            <a href="https://github.com/gangasandhu/blog_app" class="btn btn-primary" target="_blank">GitHub Repo</a>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card">
                        <img src="https://picsum.photos/200/100" class="card-img-top" alt="Project 3 Image" />
                        <div class="card-body">
                            <h5 class="card-title">Frogger Game</h5>
                            <p class="card-text">Frogger Game built using javascript. A broswer based video game where player have to control a frog and cross road and a river without being hit or drawn. The objective is to reach the safehouses.</p>
                            <a href="https://github.com/gangasandhu/frogger-game" class="btn btn-primary" target="_blank">GitHub Repo</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projects
