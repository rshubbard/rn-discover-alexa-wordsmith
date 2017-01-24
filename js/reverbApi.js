const baseUrl = 'https://test.reverbnation.com/api'

var request = require('request');

var reverbApi = {
    getSong: function(song_id, callback) {
        var url = baseUrl+"/songs/"+song_id+"/get_automated_insights_data"
        console.log("getSong calling "+url)
        req = request.get({url:url, json:true}, function(e,r,song) {
            console.log("getSong song.url="+song.url)
            callback(song)
        });
    },
    getCollection: function(genre, callback) {
        var url = baseUrl+"/discovery/feed?genre="+genre
        console.log("getCollection calling "+url)
        req = request.get({url:url, json:true}, function(e,r,data) {
            callback(data.collections[0])
        });
    },

}

module.exports = reverbApi;