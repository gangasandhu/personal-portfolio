import React from 'react'

const Skills = () => {

    return (

        <div class="container mt-5">
            <h2 class="text-center mb-4">Skills</h2>
            <div class="row">
                <div class="col-md-6">
                    <h3>Frontend Development</h3>
                    <ul class="list-group">
                        <li class="list-group-item">HTML5</li>
                        <li class="list-group-item">CSS3</li>
                        <li class="list-group-item">JavaScript (ES6+)</li>
                        <li class="list-group-item">React.js</li>
                        <li class="list-group-item">Vue.js</li>
                        <li class="list-group-item">Angular</li>
                        <li class="list-group-item">Bootstrap</li>
                    </ul>
                </div>
                <div class="col-md-6">
                    <h3>Backend Development</h3>
                    <ul class="list-group">
                        <li class="list-group-item">Node.js</li>
                        <li class="list-group-item">Express.js</li>
                        <li class="list-group-item">Python</li>
                        <li class="list-group-item">Django</li>
                        <li class="list-group-item">Flask</li>
                        <li class="list-group-item">RESTful APIs</li>
                        <li class="list-group-item">GraphQL</li>
                    </ul>
                </div>
            </div>
            
            <div class="row mt-4">
                <div class="col-md-6">
                    <h3>Database</h3>
                    <ul class="list-group">
                        <li class="list-group-item">SQL (MySQL, PostgreSQL)</li>
                        <li class="list-group-item">NoSQL (MongoDB, Firebase)</li>
                        <li class="list-group-item">ORMs (Sequelize, Mongoose)</li>
                        <li class="list-group-item">Database Design</li>
                    </ul>
                </div>
                <div class="col-md-6">
                    <h3>Other Skills</h3>
                    <ul class="list-group">
                        <li class="list-group-item">Version Control (Git)</li>
                        <li class="list-group-item">RESTful API Design</li>
                        <li class="list-group-item">CI/CD Pipelines</li>
                        <li class="list-group-item">Agile Methodologies</li>
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default Skills
