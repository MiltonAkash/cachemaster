class localStorageConnector{
	constructor( config ){
		this.config = config;
	}

	this.get( key ){
		return localStorage[key];
	}

	this.post = ( key , val ) => {
		return localStorage[key] = val;
	}

	this.delete = ( key ) => {
		delete localStorage[key]
	}


	this.list = () => {
		return Object.keys(localStorage);
	}

}

export default localStorageConnector;