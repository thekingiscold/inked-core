Hello, Welcome to Inked. A Tattoo discovery paltform currently under development. 

This repo is the backend for our MERN stack app. 
The front end -> https://github.com/thekingiscold/inked-ui

You need Docker to run the app

We have a dockerfile in each repository. 
In this repo we have the folllwing: 
docker-compose.yaml -> will help us start and orchestrate the 3 containers (services). 
init-mongo-sh -> will inialize the mongodb with dummy data so our APIs work

__Steps:__

1. Hit up terminal and Create a root dir in your local(say app)
2. cd app
3. Clone this repo as well the UI (clone https://github.com/thekingiscold/inked-ui.git)
4. cd /inked-core
5. cat docker-compose.yml
6. Verify the build paths for inked-ui, inked core and init-mongo.js
7. Run "docker compose build up"
8. In few seconds hit up localhost:8080 to see the login page.
9. Try hitting http://localhost:3001/api/tattoo-thumbnail-data to test a GET call
10. You can sign in with my creds "email: mukherjeesamrat47@gmail.com, password: password"
11. Or you can create your own account and login.

The app is currently under development. Trying clicking on the first artist after logging in.

__The Sign Up Page__
![image](https://github.com/thekingiscold/inked-core/assets/81083729/26631b1d-8dee-4469-af56-cc5a5992fa27)

__The Login Page__
![image](https://github.com/thekingiscold/inked-core/assets/81083729/0c56c0a7-7aa8-4d67-99fa-1abbe9f5c482)

__The User Dashboard__
![image](https://github.com/thekingiscold/inked-core/assets/81083729/c6377631-1241-4627-8ecb-6c5ed85b4437)

__Discover Artist Page__
![image](https://github.com/thekingiscold/inked-core/assets/81083729/34a9d282-1b89-4db9-b2e7-887a992bcb25)

__The Artist Page__
![image](https://github.com/thekingiscold/inked-core/assets/81083729/e12b6da9-33e5-489c-a68a-fbc878093d67)
