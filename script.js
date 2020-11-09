$(function() {
  var imgHeight = $('.mv-img').outerHeight();  //キービジュアルの画像の高さを取得
  var bgHeight = $('.mv').outerHeight(); //ファーストビューの高さを取得  

  //ハンバーガーメニュー
  $(".hamburger-btn").click(function () {
    if( $(window).scrollTop() < imgHeight -50){
      $(this).toggleClass("active");
      $(".hamburger-nav").toggleClass("active");
      $('.burger-musk').fadeToggle(300); //背景を暗くするマスクをフェードイン・フェードアウトさせる
      $('body').toggleClass('noscroll'); //ハンバーガーメニューを開いたときにスクロールしないようにする
    } else {
      $(this).toggleClass("active");
      $(".hamburger-nav").toggleClass("active");
      $(this).toggleClass('black'); //ハンバーガーボタンを黒くしたり白くしたりする
      $('.burger-musk').fadeToggle(300);
      $('body').toggleClass('noscroll');
      }
    });
    $(".hamburger-nav__lists-list").click(function () {
    $(".hamburger-nav,.hamburger-btn").removeClass("active");
    $('.burger-musk').fadeToggle(300); //背景を暗くするマスクをフェードイン・フェードアウトさせる
    $('body').toggleClass('noscroll');
    });

    // スクロールしたら、サイトロゴとハンバーガーボタンの色が変わる
  $(window).on('load scroll', function(){
    if ($(window).scrollTop() < imgHeight -50) {
      //メインビジュアル内にいるので、クラスを外す。
      $('header-logo').removeClass('black');
    }else {
      //メインビジュアルより下までスクロールしたので、クラスを付けて色を変える
      $('header-logo').addClass('black');
    }

    if ($(window).scrollTop() < bgHeight -50) {
      //メインビジュアル内にいるので、クラスを外す。
      $('.header-right').removeClass('black');
    }else {
      //メインビジュアルより下までスクロールしたので、クラスを付けて色を変える
      $('.header-right').addClass('black');
    }
  });

  AOS.init({
    offset: 120,
    delay: 0,
    duration: 1000,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom',
  });
 
 });