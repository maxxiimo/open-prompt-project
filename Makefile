
install-front: # Install dependencies for front-end
	# TODO: fix mui imports :/
	cd frontend && npm install --legacy-peer-deps

build-front: # Build jsx into js
	# cd src && ./node_modules/browserify/bin/cmd.js app/frontend/jsx/*.js --standalone nlp > app/frontend/js/bundle.js
	mkdir -p frontend/src/js
	cd frontend && ./node_modules/gulp/bin/gulp.js
