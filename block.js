function deleteFeed() {

var old_feed = $('[id^=topnews_main_stream], [id^=mostrecent_main_stream], [id^=pagelet_home_stream], [id^=stories_pagelet_below_composer]');
var new_feed = $('[data-pagelet=Stories], [role=feed]');

old_feed.remove();
new_feed.remove();

}

// Prevent reloading of the newsfeed
window.setInterval(deleteFeed, 50);
