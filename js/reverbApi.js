var request = require('request');

var reverbApi = function() {
    return {
        getSong: function(song_id, callback) {
            var url = "http://api.reverbnation.com/songs/" + song_id
            req = request(url, {json:true})
            console.log("getSong calling "+url)
            req.on('response', function (res, body) {
                console.log("getSong song.url="+song.url)
                callback(body)
            })
        }
    }
}