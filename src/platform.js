import storage from './connector/localStorage.js'
import config from './config'

let platform = {};

// ==========

platform.setKey = ( key , ttl  , val) =>{
	storage.post(config.getTTLKey( key ) , new Date().getTime())+ttl*1000 ) ;
	storage.post(config.getKey( key ) , val );
}

platform.isValid? = ( key )=>{
	let now = new Date().getTime();
	let ttl = storage.get( config.getTTLKey( key));
	return  (ttl && ttl > now);
}


platform.getKey = ( key ) => {
	platform.isValid( key ){
		return storage.get(config.getKey( key ));
	}
	else{
		return null;
	}
}



// ==============

export default platform;