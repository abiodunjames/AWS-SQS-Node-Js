const sqs = require("./sqs");
const QueueUrl = process.env.QUEUE_URL

const message = JSON.stringify({
  order_id: 1234,
  date: new Date().toISOString()
});

// Example message body
const params = {
  MessageBody: message,
  QueueUrl: QueueUrl
};

//Add message to a message queue
sqs.sendMessage(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.MessageId);
  }
});
