# Nowina CodeceptJS+Playwright Framework
 This framework developed for Nowina validation webservice.  
 Framework based on CodeceptJs, with Playwright engine, BDD Gherkin and written in Javascript.

## Get Started with Make:
### Build the project:
#### 1. Clone repopository by the git command to specific place:
    git clone https://github.com/tonygod11/nowinaproj.git
#### 2. Go to the project folder:
    cd nowinaproj
#### 3. Build the project in container:
    make build-docker-image

### Run the project:
#### 1. Run the project by make command:
    make run-docker-container

#### 2. Open Allure report on the page:
    http://localhost:4999/

## Get Started with Docker:
#### Build the project by docker:
    docker build -t tonygod/nowinaproj:latest https://github.com/inTonyGodWeTrust/nowinaproj.git#main
#### Run the project by docker:
    docker run -t -p 4999:4999 tonygod/nowinaproj:latest
#### Open Allure report on the page:
    http://localhost:4999/    

## Local run:
#### 1. Clone repopository by the git command to specific place:
    git clone https://github.com/tonygod11/nowinaproj.git
#### 2. Go to the project folder:
    cd nowinaproj
#### 3. Install dependencies:
    npm install
#### 4. Run the tests by the command:
    npm test
