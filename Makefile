.PHONY: dev build stop

dev: stop build
	docker run -d -p 8080:80 --rm --name web-vue baruh/mini-investor-ui

build:
	@docker build -t baruh/mini-investor-ui .

stop:
	@docker stop web-vue
