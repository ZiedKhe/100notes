# MongoDB - Memo

### Configuration file
```
/etc/mongod.conf
```
where \<port\> is configured by default : 27017

### Start MongoDB
```
sudo service mongod start
```
you can also specify in which folder the DB should be located :
```
mongod --dbpath=/data
```

### Stop MongoDB
```
sudo service mongod stop
```
you can also simply use Ctrl+C if mongod is running in the terminal

### Restart MongoDB
```
sudo service mongod restart
```

### Useful Links
[Notes : Install Mongo in Production](https://docs.mongodb.com/manual/administration/production-notes/)


## Using Mongo in NodeJS with Mongoose

```
npm install mongoose --save
```
It will add mongoose to the package.json file of your project

