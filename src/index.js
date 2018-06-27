import axios from 'axios';
import localStorageConnector from 'connector/localStorage'


//Type of cache - Data saving cache, Time saving cache -> Dont fetch, Fetch and trigger (Ignore trigger)
// Trigger after fetch, currentfetch;


class cachemaster{
	constructor(settings){
		this.settings = settings;
		this.connector = localStorageConnector(settings);
	}

	fetch(key,ttl,axiosObject,forceFetch){
		return new Promise((resolve,reject)=>{

			if(/*  - cache - ok -  */){
				resolve(value,trigger=>{
					
				});
				console.log(this.x);
			}
			else{
				return
			}

		});
	
	}




}


window.cachemaster = cachemaster;
export default cachemaster;