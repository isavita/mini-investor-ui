.PHONY: dev build stop

dev: build
	docker run -d -p 8080:80 --rm baruh/mini-investor-ui

build:
	@docker build -t baruh/mini-investor-ui .

