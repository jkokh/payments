Q.page("Teaching/payments", function () {

	Q.Assets.onSuccessPayment.set(function(data){
		console.log(data);
		console.log('payment successs');
	});

	return function () {
		// code to execute before page starts unloading
	};

}, 'Teaching');


