var redis = require('redis').createClient();
var id = "kitchen"

redis.sadd("oc_printers", id);
redis.subscribe("oc_print." + id);

redis.on("message", function (chan, message) {
	console.log(message);
});