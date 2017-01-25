'use strict';

var defaultJSON = {
  "name": "",
  "artist_name": "",
  "genre": "",
  "band_member_count": "",
  "city": "",
  "state": "",
  "country": "",
  "active_since": "",
  "use_plural_pronoun": "",
  "user_gender_male": "",
  "chart_genre": "",
  "next_show_date": "",
  "next_show_time": "",
  "next_show_venue": "",
  "next_show_city": "",
  "next_show_state": "",
  "next_show_country": "",
  "global_rank": "",
  "global_rank_yesterday": "",
  "global_genre_rank": "",
  "global_genre_rank_yesterday": "",
  "national_rank": "",
  "national_rank_yesterday": "",
  "national_genre_rank": "",
  "national_genre_rank_yesterday": "",
  "regional_rank": "",
  "regional_rank_yesterday": "",
  "regional_genre_rank": "",
  "regional_genre_rank_yesterday": "",
  "local_rank": "",
  "local_rank_yesterday": "",
  "global_genre_rank": ""
};

function dataForWordsmith(json) {
  var mergedObj = Object.assign(defaultJSON, json);
  mergedObj.genre = json.genre1;
  mergedObj.use_plural_pronoun = mergedObj.use_plural_pronoun.toString();
  return mergedObj;
};

module.exports = dataForWordsmith