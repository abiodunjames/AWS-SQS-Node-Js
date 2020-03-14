# Runing the app

* Install npm packages
```
npm i
```

* Rename `.env.example` to `.env` and update the value of `AWS_PROFILE`  and `QUEUE_URL` 

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

