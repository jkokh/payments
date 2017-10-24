(function (window, Q, undefined) {

/**
 * @module Teaching
 */
	
/**
 * YUIDoc description goes here
 * @class Teaching cool
 * @constructor
 * @param {Object} [options] Override various options for this stream
 *  @param {Q.Event} [options.onMove] Event that fires after a move
 */

Q.Streams.define("Teaching/cool", function () { // stream constructor
	this.onMove = new Q.Event(); // an event that the stream might trigger
}, {
	someMethod: function () {
		// a method of the stream
	}
});

// this is how you set an event handler to be triggered whenever
// any "Teaching/move" message is posted to any "Teaching/cool" stream
Q.Streams.onMessage("Teaching/cool", "Teaching/move").set(function (err, message) {
	// trigger our event
	this.onMove.handle(JSON.parse(message.instructions));
}, "Teaching");

})(window, Q);