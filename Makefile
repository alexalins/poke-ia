# Makefile to simplify common project commands

COMPOSE := docker compose
NPM := npm

.PHONY: help build build-no-cache up up-dev up-app stop down restart logs logs-app ps install ci build-next start dev lint test test-watch format exec

help:
	@echo "Available targets:"
	@echo "  make build           # build images"
	@echo "  make build-no-cache  # build images without cache"
	@echo "  make up              # start all services (detached)"
	@echo "  make up-dev          # start only dev service"
	@echo "  make up-app          # start only app service"
	@echo "  make stop            # stop running services"
	@echo "  make down            # stop and remove containers/networks"
	@echo "  make restart         # down && up"
	@echo "  make logs            # follow logs for all services"
	@echo "  make logs-app        # follow logs for app service"
	@echo "  make ps              # list compose containers"
	@echo "  make install         # npm install (locally)"
	@echo "  make ci              # npm ci"
	@echo "  make build-next      # run next build locally"
	@echo "  make start           # npm start"
	@echo "  make dev             # npm run dev"
	@echo "  make lint            # run linter"
	@echo "  make test            # run tests"
	@echo "  make test-watch      # run tests in watch mode"
	@echo "  make format          # format code"
	@echo "  make exec            # open a shell in the app container"

# Docker / Compose helpers
build:
	$(COMPOSE) build

build-no-cache:
	$(COMPOSE) build --no-cache

up:
	$(COMPOSE) up -d

up-dev:
	$(COMPOSE) up -d dev

up-app:
	$(COMPOSE) up -d app

stop:
	$(COMPOSE) stop

down:
	$(COMPOSE) down

restart:
	$(MAKE) down && $(MAKE) up

logs:
	$(COMPOSE) logs -f

logs-app:
	$(COMPOSE) logs -f app

ps:
	$(COMPOSE) ps -a

# Local npm helpers
install:
	$(NPM) install

ci:
	$(NPM) ci

build-next:
	$(NPM) run build

start:
	$(NPM) start

dev:
	$(NPM) run dev

lint:
	$(NPM) run lint

test:
	$(NPM) test

test-watch:
	$(NPM) run test:watch

format:
	$(NPM) run format

exec:
	$(COMPOSE) exec app sh
