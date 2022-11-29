// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

/**
 * Underscore.js (cherrypicked functions)
 *
 * https://github.com/jashkenas/underscore/blob/master/underscore.js
 *
 */
const _ = (() => {
	const _ = {};

	var restArguments = function(func, startIndex) {
		startIndex = startIndex == null ? func.length - 1 : +startIndex;
		return function() {
			var length = Math.max(arguments.length - startIndex, 0),
			rest = Array(length),
			index = 0;
			for (; index < length; index++) {
				rest[index] = arguments[index + startIndex];
			}
			switch (startIndex) {
				case 0: return func.call(this, rest);
				case 1: return func.call(this, arguments[0], rest);
				case 2: return func.call(this, arguments[0], arguments[1], rest);
			}
			var args = Array(startIndex + 1);
			for (index = 0; index < startIndex; index++) {
				args[index] = arguments[index];
			}
			args[startIndex] = rest;
			return func.apply(this, args);
		};
	};

	_.delay = restArguments(function(func, wait, args) {
		return setTimeout(function() {
			return func.apply(null, args);
		}, wait);
	});

	_.debounce = function(func, wait, immediate) {
		var timeout, result;

		var later = function(context, args) {
			timeout = null;
			if (args) result = func.apply(context, args);
		};

		var debounced = restArguments(function(args) {
			if (timeout) clearTimeout(timeout);
			if (immediate) {
				var callNow = !timeout;
				timeout = setTimeout(later, wait);
				if (callNow) result = func.apply(this, args);
			} else {
				timeout = _.delay(later, wait, this, args);
			}

			return result;
		});

		debounced.cancel = function() {
			clearTimeout(timeout);
			timeout = null;
		};

		return debounced;
	};

	return _;
})();
