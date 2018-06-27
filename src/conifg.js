const default = {
	storageType:"localStorage",
	connecter:"localStorage",
	prefix:"cm",
	ttlKey:'ttl',
	delimiter:"/"
}


let getconfig = (settings)=>{
	c = {...default,...config}

	c.getTTLKey = ( key ) => c.prefix + c.delimiter + c.ttkKey + c.delimiter + key

	c.getKey = ( key )=> c.prefix+c.delimiter+ key

	return c;

}


export default getconfig;
