require('../Q.inc')(function (Q) {

	Q.plugins.Users.Device.SELECT('*').execute(function (err, devices) {
		if (err) {
			return callback(err);
		}

		devices.forEach(function (device, i) {
			var notification = {
				alert: {
					title: "Hello " + device["_fields"]["platform"],
					body: "body of the message"
				},
				icon: "https://cdn2.iconfinder.com/data/icons/thesquid-ink-40-free-flat-icon-pack/64/bell-512.png",
				url: "https://teaching.topzone.ru/payments",
				requireInteraction: false
			};
			setTimeout(function(){со
				device.handlePushNotification(notification, function (err) {
					if (err && (err.statusCode == 410)) {
						console.log('Not registered: ', err.endpoint);
					}
					if (!err) {
						console.log('Notification sent.')
					}
				});
			}, 3000 * i);

		});

	});

});