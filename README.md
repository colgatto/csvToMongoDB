# csv To MongoDB

[![HitCount](http://hits.dwyl.io/colgatto/csvToMongoDB.svg)](http://hits.dwyl.io/colgatto/csvToMongoDB)

convert csv file to mongoDB collection

## Getting Started

### Linux Prerequisites

install mongoDB Server and nodejs

```
$ sudo apt-get update
$ sudo apt-get install mongodb-org mongodb-org-server nodejs
```

### Win Prerequisites

install

* [mongoDB-server](https://www.mongodb.com/download-center#community)
* [nodejs](https://nodejs.org)

## Usage 

first time run 
```
$ sudo npm install
```

if you run  on linux change line 13 of package.json from 

```
$ "start": "node index.js > out.query && mongo csv out.query && del out.query"
```
to
```
$ "start": "node index.js > out.query && mongo csv out.query && rm out.query"
```

change first line of index.js with database name that you want

now you can put csv file into 'csv' directory and then run

```
$ npm start
```

the script create new db and add collection for every csv in directory
