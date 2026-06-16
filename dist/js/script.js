jQuery(function ($) {

  // 1. ページトップボタン
  var topBtn = $('.js-pagetop');
  topBtn.hide();

  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });

  topBtn.click(function () {
    $('html, body').stop().animate({ scrollTop: 0 }, 300, 'swing');
    return false;
  });

  // 2. スムーススクロール
  $(document).on('click', 'a[href*="#"]', function (e) {
  e.preventDefault();
  let hash = $(this).attr('href');
  if (hash === '#') return false;
  let target = $(hash);
  if (!target.length) return false;
  $('html,body').stop().animate({ scrollTop: target.offset().top - 50 }, 400, 'swing');
  return false;
  });

  // ヘッダーの背景色変更
  $(window).on('scroll', function() {
    let scrollTop = $(this).scrollTop();
    let aboutTop = $('#about').offset().top - 50;

    if (scrollTop >= aboutTop) {
      $('.p-header').addClass('is-scrolled');
    } else {
      $('.p-header').removeClass('is-scrolled');
    }
  });

  $(window).on('scroll', function() {
  if ($('.js-drawer').hasClass('is-open')) {
    $('.js-drawer').removeClass('is-open');
    $('.js-hamburger').removeClass('is-open');
    $('.js-hamburger').attr('aria-expanded', false);
    $('.js-drawer').attr('aria-hidden', true);
    $('.js-hamburger').attr('aria-label', 'メニューを開く');
  }
});

  // 3. Swiper
  const swiper = new Swiper('.p-mv__swiper', {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    effect: 'fade',
    speed: 1000,
    autoHeight: false,
  });

  // 4. Works Modal
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

  // 5. ハンバーガーメニュー単体の開閉
  $('.js-hamburger').on('click', function() {
    const isOpen = $('.js-drawer').toggleClass('is-open').hasClass('is-open');
    $(this).toggleClass('is-open');
    $(this).attr('aria-expanded', isOpen);
    $('.js-drawer').attr('aria-hidden', !isOpen);
    $(this).attr('aria-label', isOpen ? 'メニューを閉じる' : 'メニューを開く');
  });

});
