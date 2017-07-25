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
And you must have a api to generate image with data send from nodejs, api return json like 
```
{"success": true, "path": "path_to_dir_store_images","fileName":"name_of_image","ext":"ext_of_image"}
//or
{"success": false}
```
Replace link to your API in .env
```
TINH_DUYEN_API=YOUR API
```
Start the application with
```
node index.js
```

