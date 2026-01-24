campus notes API    

simple rest API for managing campus notes, built with Node.js and express and fully dockerized

tech stack
1-node.js
2-express
3-docker
4-docker compose

run with docker
1-docker build -t campus-notes-api
2-docker run -p 3000:3000 campus-notes-api
3-http://localhost:3000/notes
4-docker ps
docker stop <container_id>

how to test
GET /notes 
GET /health 

example:
http://localhost:3000/health

production url:
https://campusnotesapi4-a0likc2q.b4a.run/health
