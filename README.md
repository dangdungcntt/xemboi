## XemBoi
## Installation
```
$ git clone https://github.com/dangdungcntt/xemboi.git
$ cd xemboi
$ npm install
$ cp .env.example .env
```
## Config
You must have a ConnectionString of Mongodb and replace it in .env
```
DB_STRING_URL=Your ConnectionString of Mongodb
```
And you must have a api to generate image with data send from nodejs and return json like 
```
{"success": true, "path": "path_to_dir_store_image","fileName":"name_of_image","ext":"ext_of_image"}
//or
{"success": false}
```
Simple data:
[Tinh Duyen](http://code.dangdung.xyz/IvKKU7tj),
[Ghep cau](http://code.dangdung.xyz/5BPoik6H),
[TieqViet](http://code.dangdung.xyz/2rhezYVs)

Replace link to your API in .env
```
GHEP_CAU_API=YourAPI
TINH_DUYEN_API=YourAPI
TV_API=YourAPI
```
Start the application with
```
node index.js
```

