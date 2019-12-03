# Argo

## What is used

1. Nrwl
   - app scaffolding
   - managing scalability
2. Material UI
   - styling
3. Cypress
   - End To End testing
4. Docker
   - Local Dev container
   - Convenient way to run for you

## How to install/test/run

Install

> git clone https://github.com/hardjonn/argo.git

> cd argo

> npm install -g @nrwl/cli

> npm install

Test

> nx e2e xavier-e2e

Run

> nx serve

Visit to http://localhost:4200

If run cypres (e2e) locally you will get an interactive mode with Test Runner

## Docker

Install + test + run

> git clone https://github.com/hardjonn/argo.git

> cd argo

> docker-compose up -d --build

It will run tests during container building

And it will run the application

Visit to http://localhost:4200
