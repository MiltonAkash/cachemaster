
// Connection between localStorage & cache master GET, POST, DELETE
import getconfig from '../config'

let connector = (settings) => {
	let config = getconfig(settings);

	let ls = {};


	ls.get = ( key )=>{
		return localStorage[key] || null;
	}

	ls.post = ( key,val ) => {
		return localStorage[key] = val;
	}

	ls.delete = ( key ) => {
		delete localStorage[key]
	}


	ls.list = () => {
		let cms = Object.keys(localStorage).filter(x => (x.indexOf(config.prefix+config.delimiter) == 0)&& x.slice(3,6)!='ttl'));
		let keys = cms.map(x => x.split(config.delimiter).slice(1).join(config.delimiter))
		return keys;
	}

	ls.clearOld = ()=>{
		let keys = Object.keys(localStorage);

	}


}

export default connector;