install:
	npm install

start:
	npm run babel-node -- src/bin/gendiff.js

publish:
	npm publish

lint:
	npx eslint .

test:
	npm test

test-coverage:
	npm test -- --coverage
