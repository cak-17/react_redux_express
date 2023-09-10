SHELL := /bin/bash

.PHONY: start
up: ## Run Docker
	docker-compose up

build: ## Build Docker Containers
	docker-compose build

down: ## Stop Docker 
	docker-compose down

.PHONY: help
help: ## Show this help
	@egrep -h '\s##\s' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'
