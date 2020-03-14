# Runing the app

* Install npm packages
```
npm i
```

* Update your `.env` file

```
AWS_PROFILE=YOUR_AWS_PROFILE
QUEUE_URL=YOUR_QUEUE_URL
```

* Send a message to the queue

```
$ npm run producer
```

* Read a message from the queue

```
$ npm run consumer
```

