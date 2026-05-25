
jQuery(function ($) {
  
  // ページトップボタン
  var topBtn = $('.js-pagetop');
  topBtn.hide();

  // ページトップボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ページトップボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動。ヘッダーの高さ考慮。)
  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });

});

$(function() {

  // Swiper
  const swiper = new Swiper('.p-mv__swiper', {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    effect: 'fade',
    speed: 1000,
  });

});

// Works Modal
$('.js-works-item').on('click', function() {
  const modalSrc = $(this).data('modal-src');
  const modalCaption = $(this).data('modal-caption');

  $('.js-works-modal-img').attr('src', modalSrc);
  $('.js-works-modal-caption').text(modalCaption);
  $('.js-works-modal').addClass('is-open');
  $('body').css('overflow', 'hidden');
});

$('.js-works-modal-overlay, .js-works-modal-close').on('click', function() {
  $('.js-works-modal').removeClass('is-open');
  $('body').css('overflow', '');
});