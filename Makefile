compose-test:
	docker-compose -f docker-compose.test.yml build --force-rm && docker-compose -f docker-compose.test.yml up --force-recreate -d
compose-prod:
	docker-compose -f docker-compose.prod.yml build --force-rm && docker-compose -f docker-compose.prod.yml up --force-recreate -d