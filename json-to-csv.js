'use strict';

function toCSV (data) {

    if (typeof data !== 'string' || typeof data !== 'object') {

        throw new Error("Argument must be a string or an object");
    }

    if (typeof data === 'string') {

        data = JSON.parse(data);
    }

	var headers = Object.keys(data[0]);
	var topRow = headers.join(",") + "\r\n";

    var result = data.reduce(function (previous, datapoint, index) {

        headers.forEach(function (header, headerIndex) {

            previous += datapoint[header];
            if (headerIndex === headers.length - 1) {

                previous += "\r\n";
            } else {
                previous += ",";
            }
        });

        return previous;
    }, topRow);

    return result;
}

module.exports = toCSV;
