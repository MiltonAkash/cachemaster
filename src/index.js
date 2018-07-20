const axios = require('axios');
const Platform = require('./platform');
//Type of cache - Data saving cache, Time saving cache -> Dont fetch, Fetch and trigger (Ignore trigger)
// Trigger after fetch, currentfetch;


class CacheMaster{
	constructor( settings = {} ){
		//this.settings = {...config,...settings};
		this.platform = new Platform( settings )
	}

	get(key , ttl , url ,forceFetch){
		return this.fetch(key,ttl,{method:'GET',url},forceFetch);
	}

	clean(){
		this.platform.clean();
	}

	fetch(key,ttl,axiosObject,forceFetch = true){
		return new Promise((resolve,reject)=>{
			let cache = this.platform.get( key );
			let obj = {};
			if(cache){
				obj.cache = cache;
				obj.fromCache = true;
				if(forceFetch){
					obj.trigger = axios(axiosObject);
					obj.trigger.then(data =>{
						this.platform.post( key, ttl , data);
					}).catch( e => reject( e ));
				}
				else{
					obj.trigger = null;
				}
				resolve(obj);
			}
			else{
          axios(axiosObject).then(data =>{
              resolve({cache:data,trigger:(new Promise((x,y)=>{})),fromCache:false});
							this.platform.post( key, ttl , data);
          }).catch(e => reject(e));

			}
		});
	}
}


window.CacheMaster = CacheMaster;

module.exports =  CacheMaster;
