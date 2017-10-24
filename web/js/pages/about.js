Q.page("Teaching/about", function () {

	var button = $('button');

	function bindAction() {
		button.off();
		Q.Users.Device.subscribed(function(subscribed, err) {
			if (err) {
				console.warn(err);
				button.text('Push notifications is not supported');
				button.prop('disabled', true);
			} else {
				if (subscribed) {
					button.text('Push unsubscribe');
					button.click(unsubscribe);//
				} else {
					button.text('Push subscribe');
					button.click(subscribe);
				}
			}
		})
	}

	function subscribe() {
		Q.Users.Device.subscribe(function(res, err) {
			if (err) {
				if (err.name === 'NotAllowedError') {
					alert('Permissions for Notifications was denied. Please allow notifications.');
				}
				console.warn(err);
			} else {
				bindAction();
			}
		})
	}

	function unsubscribe() {
		Q.Users.Device.unsubscribe(function(res, err) {
			if (err) {
				console.warn(err);
			} else {
				bindAction();
			}
		})
	}

	bindAction();

	return function () {
		// code to execute before page starts unloading
	};

}, 'Teaching');
