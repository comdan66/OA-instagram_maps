/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 OA Wu Design
 */

$(function () {
    var $about = $('#about');
    var $popUp = $('#pop_up');

    var popUp = {t: '關於 OA\'s Instagram Maps', is: [
          {t: '作者名稱', h: 'http://www.ioa.tw', c: 'OA Wu'},
          {t: 'E-mail', h: '', c: 'comdan66@gmail.com'},
          {t: '作品名稱', h: '', c: 'OA\'s Instagram Maps'},
          {t: '最新版本', h: '', c: '1.0.0'},
          {t: 'GitHub', h: 'https://github.com/comdan66/OA-instagram_maps', c: 'OA-instagram_maps'},
          {t: '相關資源', h: 'https://developers.google.com/maps/documentation/javascript/markers', c: 'Google maps API'},
          {t: '相關資源', h: 'https://googlemaps.github.io/js-marker-clusterer/docs/examples.html', c: 'MarkerClusterer'},
          {t: '相關資源', h: 'http://google-maps-utility-library-v3.googlecode.com/svn/tags/markerwithlabel/1.1.8/docs/examples.html', c: 'MarkerWithLabel'},
          {t: '更新日期', h: '', c: '2015/06/29'},
        ]};

    $about.click (function () {
      $popUp.find ('.paper').empty ().append ($('<h2 />').text (popUp.t)).append ($('<div />').addClass ('pop_up').append (popUp.is.map (function (t) {
        return $('<div />').addClass ('i').append ($('<div />').addClass ('l').text (t.t)).append ($('<div />').addClass ('r').append (t.h === '' ? t.c : $('<a />').attr ('href', t.h).attr ('target', '_blank').text (t.c)));
      }))).append ($('<div />').addClass ('close').html ('&#10006;'));

      $popUp.removeClass ('hide');
      return false;
    });


    $popUp.on ('click', '.close', function () {
      $popUp.find ('.paper').empty ();
      $popUp.addClass ('hide');
    });
});