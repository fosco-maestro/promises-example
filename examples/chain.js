function funct1(param, callback) {
    callback(param);
}

function funct2(param, callback) {
    callback(param);
}

function funct3(param, callback) {
    callback(param);
}

funct1(1, function(echo1) {
    console.log(echo1);

    funct2(2, function(echo2) {
        console.log(echo2);

        funct3(echo1, function(echo3) {
            console.log(echo3);
        });
    });
});

/**
 *
 * ↑ equal to ↓
 *
 */

console.log('Now the same with chain promises:');

var Q = require("q");

function promFunct1(param) {
    var deferred = Q.defer();
    funct1(param, deferred.resolve);
    return deferred.promise;
}

function promFunct2(param) {
    var deferred = Q.defer();
    funct2(param, deferred.resolve);
    return deferred.promise;
}

function promFunct3(param) {
    var deferred = Q.defer();
    funct3(param, deferred.resolve);
    return deferred.promise;
}

promFunct1(1).then(function(echo1) {
    console.log(echo1);

    return promFunct2(2).then(function(echo2) {
        console.log(echo2);

        return promFunct3(echo1);
    }).then(function(echo3) {
        console.log(echo3);
    });
});