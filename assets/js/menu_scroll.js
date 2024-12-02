// jQueryのnoConflictを使用
var $j = jQuery.noConflict();  
// スクロール時の動作
$j(document).ready(function() {
  let start_position = 0,     // 初期位置０
      window_position,
      $window = $j(window),
      $header = $j('header'),
      $footer = $j('footer');  // フッターを操作するために定義

  // スクロールイベントを設定
  $window.on('scroll', function() {
    // スクロール量の取得
    window_position = $j(this).scrollTop();

    // スクロール量が初期位置より小さければ、上にスクロールしているのでヘッダーフッターを出現させる
    if (window_position <= start_position) {
      $header.css('top', '0');
      $footer.css('bottom', '0');
    } else {
      $header.css('top', '-70px');
      $footer.css('bottom', '-70px');
    }
    // 現在の位置を更新する
    start_position = window_position;
  });

  // 中途半端なところでロードされても良いようにスクロールイベントを発生させる
  $window.trigger('scroll');
});