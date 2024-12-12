#!/usr/bin/make -f
# SHELL = /bin/sh

DC=docker-compose

ifdef MODE
DC=docker compose -f ./docker-compose.$(MODE).yml
endif

APP_DIR=$(shell echo $$(cd . && pwd))
APP_CONTAINER=app
DB_CONTAINER=db

########## COMBINED COMMANDS
start: build up
restart: stop up
rebuild: stop clear start


# Fresh install
#fresh: rebuild install_db
# Install from backup
#restore: rebuild restore_db

#=============== STEPS ========================
build:
	cd $(APP_DIR) && $(DC) build
up:
	docker rm -f $$(docker ps -a | grep $(APP_CONTAINER) | awk '{print $$1}') || echo
	cd $(APP_DIR) && $(DC) up -d --remove-orphans --force-recreate
	$(MAKE) composer
down:
	cd $(APP_DIR) && $(DC) down -v --remove-orphans
stop:
	cd $(APP_DIR) && $(DC) stop
composer:
	cd $(APP_DIR) && $(DC) exec -T $(APP_CONTAINER) composer install && \
	wait
comp:
	cd $(APP_DIR) && $(DC) exec -T $(APP_CONTAINER) composer




######## VITE
VITE=vite
EXEC_VITE=docker exec -it $(VITE) sh
VITE_INSTALL="npm install"
VITE_RUN="npm run dev"
VITE_BUILD="npm run build"

vite_install:
	$(EXEC_VITE) -c $(VITE_INSTALL)
vite_dev:
	$(EXEC_VITE) -c $(VITE_RUN)
vite_build:
	$(EXEC_VITE) -c $(VITE_BUILD)

#PROCESS
####################################################################
console:
	$(DC) exec $(APP_CONTAINER) php bin/console
sh:
	$(DC) exec $(APP_CONTAINER) bash

####################################################################

clear:
	$(DC) down -v --remove-orphans
	docker container prune -f
	docker image prune -f
	docker volume prune -f
	@echo "======================="
