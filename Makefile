
install-front: # Install dependencies for front-end
	# TODO: fix mui imports :/
	cd frontend && npm install --legacy-peer-deps

run-front: # Preview the app
	cd frontend && npm run preview
