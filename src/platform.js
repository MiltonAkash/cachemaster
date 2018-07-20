const localStorageConnector  = require('./connector/localStorageConnector');
const config  = require('./config')

class platform{
	constructor(settings){
		this.config = {...config,...settings};
		this.connector = new localStorageConnector();
	}

	// /news => cm/ttl/news/assdfdfnew/newa/
	generateTTL( key ) {
		let c = this.config;
		return c.prefix + "-" + c.ttlKey + key;
	}

	generateKey( key ) {
		let c = this.config;
		return c.prefix + key ;
	}

	get( key ){
		let now  = new Date().getTime();
		let ttl  = this.connector.get( this.generateTTL( key ));
		if( ttl > now ){
			return this.connector.get( this.generateKey( key ));
		}
		else{
			this.delete ( key );
			return null;
		}
	}

	post( key, ttl , val) {
		let now = new Date().getTime();
		ttl = now + ttl * 1000; // sec to millliseconds
		this.connector.post( this.generateTTL( key ) , ttl );
		this.connector.post( this.generateKey( key ) , val );
		return 1;
	}

	delete ( key ){
		this.connector.delete(this.generateTTL( key ));
		this.connector.delete(this.generateKey( key ));
	}

	clean (){
		let keylist = this.connector.list();
		let now = new Date().getTime();
		let expiredKeys = keylist.filter(key => this.connector.get( this.generateTTL( key )) < now );
		expiredKeys.forEach(key => {
			this.connector.delete(this.generateTTL( key ));
			this.connector.delete(this.generateKey( key ));
		});
		return expiredKeys;

	}
}

module.exports = platform;
