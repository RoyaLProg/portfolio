#HOW TO USE

Please install postgresql, angularcli and nodejs/npm on your machine
You can fork this repository to make it your portfolio and have you're own version, its just a base

install nestcli and angular cli :
```shell
npm i -g @nestjs/cli @angular/cli
```

git clone the repo where ever you want
```shell
git clone https://www.github.com/RoyaLProg/portfolio 
```

create the database
```shell
createdb portfolio
```

launch psql
```shell
sudo -u postgres psql portfolio 
```

if you don't have sudo permission you can to to connect like that :
```shell
psql portfolio -U postgres
```

in psql do : 
```
\i createDatabase.sql
exit
```

install dependancies :
```shell
cd api && npm i && cd ../app && npm i && cd ..
```

build ressource :
```shell
cd api && nest build && cd ../app && ng build --prod && cd ..
```
change username and password (and database if you didnt use portfolio) on api/src/app.module.ts and api/dist/app.module.ts

generate keys for JWT :
```shell
cd api/dist
mkdir keys && cd keys
ssh-keygen -t rsa -b 4096 -m PEM -f jwtRS256.key
# Don't add passphrase
openssl rsa -in jwtRS256.key -pubout -outform PEM -out jwtRS256.key.pub
cd ../../
cp -R dist/keys src/keys
```

then you go to api folder to run : 
`npm run start` for dev server
put the dist to you're web server for prod

then go to app folder to run : 
`ng serve` if you want a dev server
else you can run `build --prod` and put the ./dist on you're web server

You should be good to go !
 

