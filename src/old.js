import axios from 'axios';

const cacher = (key,ttl,axiosReqObject,doFetch=true) => new Promise((resolve, reject) => {
    let now = new Date().getTime();
    let ttl = (localStorage['ttl'+key] && parseInt(localStorage['ttl'+key])) || null;
    if (ttl && ttl > now) {
        resolve(JSON.parse(localStorage[key]));
        console.log("From cache",key);
    }
    else {
        axios(axiosReqObject).then(x => {
                resolve(x)
                localStorage['ttl'+key] = now+ttl;
                localStorage[key] = JSON.stringify(x);
            }).catch(err => reject(err));
    }

    if(doFetch){
        axios(axiosReqObject).then(x => {
            localStorage['ttl'+key] = now+ttl;
            localStorage[key] = JSON.stringify(x);

        }).catch(()=>{});
    }

});


window.cacher = cacher;
window.doprint = (hi)=>"Hi"+hi;




export default cacher;