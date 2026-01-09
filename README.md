Campus Notes API    

A simple REST API for managing campus notes, built with Node.js and Express and fully Dockerized

Tech Stack
1-Node.js
2-Express
3-Docker
4-Docker Compose

Run with Docker
1-docker build -t campus-notes-api
2-docker run -p 3000:3000 campus-notes-api
3-http://localhost:3000/notes
4-docker ps
docker stop <container_id>

How to Test
GET /notes 
GET /health 

Example:
http://localhost:3000/health