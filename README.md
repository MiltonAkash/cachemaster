# Cache-Master
------------------------
Cache master is a cache manager for your application through various storage medium ( currently supports only localStorage in browsers).

## Features
- Simple to Use API's.
- Uses **Axios** which is supported by most of the browsers.
- Cleaner to maintain the clean the storage.

## Getting the cache-master
```
npm install cache-master
```
or
```
yarn add cache-master
```
## Including cache-master
```js
import cachemaster from 'cache-master' //ES6
or
let cachemaster = require('cache-master')
```
or include the compiles js directly in the html file

```html
<script src="/node_modules/cache-master/dist/bundle.js"/>
```

## Using cache-master

```js
let cm = new CacheMaster(/*ConfigObject[optional]*/);
cm.fetch( '/news' /* ID */ , 24 /* in seconds */ ,{
	method:'GET',
	url:'https://api.themoviedrug.com/api/v1'
}).then({cache,trigger,fromCache}){
	/* do something with cache */
	doSomething(cache)
	fromCache || trigget.then(daata=>{
		doSomething(freshData);
	});

});
```

## Syntax

```js
fetch( id , ttl , axiosObject, forceFetch /* Boolean */);
```
`id` is the key for cache. It should start with a `/`. Example `/movies/234`
`ttl` is the time to live (ttl) in seconds .
`axiosObject` is the fetching axios Object. Refer axios
`forceFetch` says whether to fetch even though cache is available. Default is `true`


##  Response from Cache-Master

Cache master response consist of {cache,trigger,fromCache}
 `cache` object consist of cached result or actual result after fetching
 `fromCache` shows whether results are from cache or fetched fresh
 `trigger` is a promise for new fetch.

Item      | Value
----------|-------
computer  | asdfasdf


### Short Hand methods
Cache master also provides some short hand methods to simplify the fetching process.

```js
cm.get('/news',24,'urlToFetch',data)
cm.post('/news',24,'urlTochtch',data);

```
