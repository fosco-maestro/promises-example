var Q = require('q');
var _ = require('underscore');

// Mock
var result = [{'buildNumber': 1}, {'buildNumber': 2}, {'buildNumber': 3}];

var getBuildResult = function(buildNumber, callback) {
    var hash = ['asd', 'tyu', 'zxc', 'qwe'];

    return callback(null, {'vcsRevisionKey': hash[buildNumber]});
};

// Example

var builds = [];

_.each(result, function(build) {
    var buildNumber = build.buildNumber;
    var deferred = Q.defer();

    getBuildResult(buildNumber, function(error, result) {
        var commitHash = result.vcsRevisionKey;

        deferred.resolve({
            'buildNumber': buildNumber,
            'commitHash': commitHash
        });
    });

    builds.push(deferred.promise);
});

Q.all(builds).then(function(result) {
    console.log(result);
});