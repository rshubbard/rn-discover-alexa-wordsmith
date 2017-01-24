var request = require('request');

var reverbApi = {
    getSong: function(song_id, callback) {
        var url = "http://api.reverbnation.com/songs/" + song_id
        console.log("getSong calling "+url)
        req = request.get({url:url, json:true}, function(e,r,song) {
            console.log("getSong song.url="+song.url)
            callback(song)
        });
    }
}

module.exports = reverbApi;