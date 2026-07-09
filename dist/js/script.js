jQuery(function ($) {

  // ページトップボタン
  var topBtn = $('.js-pagetop');
  topBtn.hide();

  $(window).scroll(function () {
    let headerHeight = window.innerWidth >= 768 ? 81 : 51;
    let aboutTop = $('#about').offset().top - headerHeight;

    if ($(this).scrollTop() > aboutTop) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });

  topBtn.click(function () {
    $('html, body').stop(true).animate({ scrollTop: 0 }, 300, 'swing');
    return false;
  });

  function getHeaderHeight() {
    const vw = window.innerWidth;
    if (vw >= 1080) {
      return 80;
    } else if (vw >= 768) {
      return Math.round(80 * vw / 1080);
    } else {
      return 50;
    }
  }

  // ヘッダーの背景色変更
  $(window).on('scroll', function() {
    let scrollTop = $(this).scrollTop();
    let aboutTop = $('#about').offset().top;

    if (scrollTop >= aboutTop) {
      $('.p-header').addClass('is-scrolled');
    } else {
      $('.p-header').removeClass('is-scrolled');
    }
  });

  // ロゴクリックでトップへ
  $('.p-header__logo a, .p-footer__logo a').on('click', function (e) {
    e.preventDefault();
    $('html, body').stop().animate({ scrollTop: 0 }, 300, 'swing');
  });
  
  // ドロワーを閉じる（スクロール時）
  $(window).on('scroll', function() {
    if ($('.js-drawer').hasClass('is-open')) {
      $('.js-drawer').removeClass('is-open');
      $('.js-hamburger').removeClass('is-open');
      $('.js-hamburger').attr('aria-expanded', false);
      $('.js-drawer').attr('aria-hidden', true);
      $('.js-hamburger').attr('aria-label', 'メニューを開く');
    }
  });

  // Swiper
  const swiper = new Swiper('.p-mv__swiper', {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 2000,
    autoHeight: false,
  });

  // Worksモーダル
  $('.js-works-item').on('click', function() {
    const modalSrc = $(this).data('modal-src');
    const modalCaption = $(this).data('modal-caption');
    $('.js-works-modal-img').attr('src', modalSrc);
    $('.js-works-modal-caption').text(modalCaption);
    $('.js-works-modal').addClass('is-open');
    $('body').css('overflow', 'hidden');
    $('.js-pagetop').hide();
  });

  $('.js-works-modal-overlay, .js-works-modal-close').on('click', function() {
    $('.js-works-modal').removeClass('is-open');
    $('body').css('overflow', '');

    let headerHeight = window.innerWidth >= 768 ? 80 : 50;
    let aboutTop = $('#about').offset().top - headerHeight;
    if ($(window).scrollTop() > aboutTop) {
      $('.js-pagetop').fadeIn();
    }
  });

  // Worksアイテムのテキスト文字数に応じてクラスを付与する
  $('.p-works-item__text').each(function() {
    if ($(this).text().trim().length >= 10) {
      $(this).closest('.p-works-item__content').addClass('is-short');
    }
  });

  // ハンバーガーメニュー単体の開閉
  $('.js-hamburger').on('click', function() {
    const isOpen = $('.js-drawer').toggleClass('is-open').hasClass('is-open');
    $(this).toggleClass('is-open');
    $(this).attr('aria-expanded', isOpen);
    $('.js-drawer').attr('aria-hidden', !isOpen);
    $(this).attr('aria-label', isOpen ? 'メニューを閉じる' : 'メニューを開く');
  });

  // js-fadeを自動付与
  $('.c-section-title, .p-about__title, .p-about__text, .p-service-item, .p-works-item, .p-news__column, .p-company__contents, .p-contact__lead, .p-contact-item, .p-contact-item--category, .p-contact__btn').each(function() {
    $(this).addClass('js-fade');
  });

  // スクロールアニメーション
  $(window).on('scroll', function() {
    $('.js-fade, .js-fade-item').each(function() {
      let elementTop = $(this).offset().top;
      let windowBottom = $(window).scrollTop() + $(window).height();

      if (elementTop < windowBottom) {
        $(this).addClass('is-show');
      }
    });
  });

});