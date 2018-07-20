class localStorageConnector{
	constructor(){
	}

	get( key ){
		return window.localStorage[key] && JSON.parse(window.localStorage[key]) || null;
	}

	post( key , val ){
		return window.localStorage[key] = JSON.stringify(val);
	}

	delete( key ){
		delete window.localStorage[key]
	}


	list() {
		return Object.keys(window.localStorage);
	}

	clear() {
		return window.localStorage.clear();
	}


}

module.exports = localStorageConnector;
