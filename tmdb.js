(function () {
    'use strict'; 

/*    var tmdb = {
      name: 'TMDB My Proxy',
      version: '1.0.1',
      description: 'Проксирование постеров и API сайта TMDB',
      path_image: Lampa.Utils.protocol() + 'tmdbimg.bylampa.online/',
      path_api: Lampa.Utils.protocol() + 'tmdbapi.bylampa.online/3/'
    };

    Lampa.TMDB.image = function (url) {
      var base = Lampa.Utils.protocol() + 'tmdb.org/' + url;
      return Lampa.Storage.field('proxy_tmdb') ? tmdb.path_image + url : base;
    };

    Lampa.TMDB.api = function (url) {
      var base = Lampa.Utils.protocol() + 'api.themoviedb.org/3/' + url;
      return Lampa.Storage.field('proxy_tmdb') ? tmdb.path_api + url : base;
    };

    Lampa.Settings.listener.follow('open', function (e) {
      if (e.name == 'tmdb') {
        e.body.find('[data-parent="proxy"]').remove();
      }
    });*/


var tmdb = {
  name: 'TMDB My Proxy',
  version: '1.0.3',
  description: 'Проксирование постеров и API сайта TMDB',
  path_image: Lampa.Utils.protocol() + 'tmdbimg.bylampa.online/',
  path_api: Lampa.Utils.protocol() + 'tmdbapi.bylampa.online/3/'
};

function filter(u) {
  var s = u.slice(0, 8);
  var e = u.slice(8).replace(/\/+/g, '/');
  return s + e;
}

Lampa.TMDB.image = function (url) {
  var base = Lampa.Utils.protocol() + 'tmdb.org/' + url;
  return filter(Lampa.Storage.field('proxy_tmdb') ? tmdb.path_image + url : base);
};

Lampa.TMDB.api = function (url) {
  var base = Lampa.Utils.protocol() + 'api.themoviedb.org/3/' + url;
  return filter(Lampa.Storage.field('proxy_tmdb') ? tmdb.path_api + url : base);
};

Lampa.Settings.listener.follow('open', function (e) {
  if (e.name == 'tmdb') {
    e.body.find('[data-parent="proxy"]').remove();
  }
});

console.log('My-TMDB-Proxy', 'started, enabled:', Lampa.Storage.field('proxy_tmdb'));

})();