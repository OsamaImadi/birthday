build:
	npm i
	git submodule init && git submodule update
	gatsby build
