build-docker-image:
	docker build -t tonygod/nowinaproj:1.0 .

run-docker-container:
	docker run -p 4999:4999 -v ${PWD}/allure-results:/app/allure-results tonygod/nowinaproj:1.0

