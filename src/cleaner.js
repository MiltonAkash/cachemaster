import platform from './platform'

const cleanStorage = ()=>{

	Object.keys(obje)
    Object.keys(localStorage).filter(x => x.split('/')[0] == 'ttl').forEach(x =>{
        if(parseInt(localStorage[x])<now){
            delete localStorage[x];
            delete localStorage[x.slice(3)];
        }
    })
}


export defaut cleanStorage;