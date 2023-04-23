// 네비게이션

$(".menu > li").hover(
  function () {
    let i = $(this).index();

    $(".menu > li > div").eq(i).stop().fadeIn();

    $("header").css({
      backgroundColor: "",
      backdropFilter: "",
    });
  },
  function () {
    let i = $(this).index();

    $(".menu > li > div").eq(i).stop().fadeOut();

    if ($(window).scrollTop() == 0) {
      $("header").css({
        backgroundColor: "",
        backdropFilter: "",
      });
    } else {
      $("header").css({
        backgroundColor: "rgba(255,255,255,0.6)",
        backdropFilter: "blur(10px)",
      });
    }
  }
);








// 아이콘 메뉴 클릭 시 X로 변환(토글), 메뉴 보이기

let menu = 0;

$(".icon-menu").click(function () {
  if (menu == 0) {
    $(".icon-menu").addClass("active");
    $(".fullmenu-wrap").stop().fadeIn();
    menu++;
  } else {
    $(".icon-menu").removeClass("active");
    $(".fullmenu-wrap").stop().fadeOut();
    menu = 0;
    $(".min-fullmenu-tab-list > li").find(".min-fullmenu-sub").stop().slideUp();
    $(".min-fullmenu-tab-list > li")
      .find(".min-fullmenu-icon-bottom")
      .removeClass("on");
  }
});






// 아이콘 돋보기 클릭 시 검색창 나타나기

$(".icon-search").click(function () {
  $("icon").hide();
  $(".search-wrap").stop().slideDown();
});






// 검색창에서 X 클릭시 검색창 사라지기

$(".search-close").click(function () {
  $(".search-wrap").stop().slideUp();
});







// 반응형 풀스크린 메뉴 선택

$(".min-fullmenu-tab > li:first-child").click(function () {
  $(this).addClass("on");

  $(this).find(".min-fullmenu-tab-list").show();

  $(".min-fullmenu-tab > li").not(this).removeClass("on");

  $(".min-fullmenu-tab > li").not(this).find(".min-fullmenu-tab-list").hide();

  $(".fullmenu-drop-wrap").show();
});

$(".min-fullmenu-tab > li:last-child").click(function () {
  $(this).addClass("on");

  $(this).find(".min-fullmenu-tab-list").show();

  $(".min-fullmenu-tab > li").not(this).removeClass("on");

  $(".min-fullmenu-tab > li").not(this).find(".min-fullmenu-tab-list").hide();

  $(".fullmenu-drop-wrap").hide();
});







// 반응형 풀스크린 메뉴 - menu

$(".min-fullmenu-tab-list > li").click(function () {
  $(".min-fullmenu-tab-list > li").click(function () {
    $(this).find(".min-fullmenu-icon-bottom").addClass("on");

    $(".min-fullmenu-tab-list > li")
      .not(this)
      .find(".min-fullmenu-icon-bottom")
      .removeClass("on");

    $(".min-fullmenu-tab-list > li")
      .not(this)
      .find(".min-fullmenu-sub")
      .stop()
      .slideUp();

    $(this).find(".min-fullmenu-sub").stop().slideDown();
  });
});








// 반응형 풀스크린 메뉴 - category

/* 풀스크린 슬라이더(스와이프) */

// 드래그로 스와이프

var drag_x1 = false;

$(window).on({
  mousedown: function (event) {
    drag_x1 = event.offsetX;
  },
  mouseup: function (event) {
    if (event.offsetX - drag_x1 > 100) {
      // 오른쪽으로 드래그 했을 때

      let i = $(".slide > div.on").index();

      if (i === 0) {
        let i = 6;

        $(".slide > div").eq(i).stop().delay(150).fadeIn();
        $(".slide > div").eq(i).addClass("on");
        $(".slide-bar li").eq(i).addClass("on");
        $(".slide-text > div").eq(i).addClass("on");

        $(".slide > div").eq(0).stop().fadeOut();
        $(".slide > div").eq(0).removeClass("on");
        $(".slide-bar li").eq(0).removeClass("on");
        $(".slide-text > div").eq(0).removeClass("on");
      } else if (i < 7) {
        let i = $(".slide > div.on").index();

        $(".slide > div")
          .eq(i - 1).stop().delay(150).fadeIn();
        $(".slide > div").eq(i - 1).addClass("on");
        $(".slide-bar li").eq(i - 1).addClass("on");
        $(".slide-text > div").eq(i - 1).addClass("on");

        $(".slide > div").eq(i).stop().fadeOut();
        $(".slide > div").eq(i).removeClass("on");
        $(".slide-bar li").eq(i).removeClass("on");
        $(".slide-text > div").eq(i).removeClass("on");
      }
    } else if (event.offsetX - drag_x1 < -100) {
      // 왼쪽으로 드래그 했을 때

      let i = $(".slide > div.on").index();

      if (i >= 6) {
        let i = 0;

        $(".slide > div").eq(i).stop().delay(150).fadeIn();
        $(".slide > div").eq(i).addClass("on");
        $(".slide-bar li").eq(i).addClass("on");
        $(".slide-text > div").eq(i).addClass("on");

        $(".slide > div").eq(6).stop().fadeOut();
        $(".slide > div").eq(6).removeClass("on");
        $(".slide-bar li").eq(6).removeClass("on");
        $(".slide-text > div").eq(6).removeClass("on");
      } else if (i < 6) {
        let i = $(".slide > div.on").index();

        $(".slide > div")
          .eq(i + 1)
          .stop()
          .delay(150)
          .fadeIn();
        $(".slide > div")
          .eq(i + 1)
          .addClass("on");
        $(".slide-bar li")
          .eq(i + 1)
          .addClass("on");
        $(".slide-text > div")
          .eq(i + 1)
          .addClass("on");

        $(".slide > div").eq(i).stop().fadeOut();
        $(".slide > div").eq(i).removeClass("on");
        $(".slide-bar li").eq(i).removeClass("on");
        $(".slide-text > div").eq(i).removeClass("on");
      }
    }
  },
});


// 자동 슬라이드

function mainSlide () {

  let i = $(".slide > div.on").index();

      if (i >= 6) {
        let i = 0;

        $(".slide > div").eq(i).stop().delay(150).fadeIn();
        $(".slide > div").eq(i).addClass("on");
        $(".slide-bar li").eq(i).addClass("on");
        $(".slide-text > div").eq(i).addClass("on");

        $(".slide > div").eq(6).stop().fadeOut();
        $(".slide > div").eq(6).removeClass("on");
        $(".slide-bar li").eq(6).removeClass("on");
        $(".slide-text > div").eq(6).removeClass("on");
      } else if (i < 6) {
        let i = $(".slide > div.on").index();

        $(".slide > div")
          .eq(i + 1)
          .stop()
          .delay(150)
          .fadeIn();
        $(".slide > div")
          .eq(i + 1)
          .addClass("on");
        $(".slide-bar li")
          .eq(i + 1)
          .addClass("on");
        $(".slide-text > div")
          .eq(i + 1)
          .addClass("on");

        $(".slide > div").eq(i).stop().fadeOut();
        $(".slide > div").eq(i).removeClass("on");
        $(".slide-bar li").eq(i).removeClass("on");
        $(".slide-text > div").eq(i).removeClass("on");
      }
}

setInterval(() => mainSlide(), 10000);












// 풀사이즈 메뉴 셀렉트 박스 보이기

let drop = true;

$(".fullmenu-drop-wrap").click(function () {
  if (drop) {
    $(".fullmenu-drop-wrap").addClass("open");
    drop = false;
  } else {
    $(".fullmenu-drop-wrap").removeClass("open");
    drop = true;
  }
});













// 스크롤 이벤트

$(window).scroll(function () {
  if ($(this).scrollTop() > 1900) {
    $(".makeup-look-text").addClass("on");
  } else if ($(this).scrollTop() > 1) {
    $(".header-bg").css({
      backgroundColor: "rgba(255,255,255,0.6)",
      backdropFilter: "blur(10px)",
    });
  } else if ($(this).scrollTop() == 0) {
    $(".header-bg").css({
      backgroundColor: "",
      backdropFilter: "",
    });
  }
});

// contents - whats new 이미지 캐러셀

// 오른쪽 버튼 눌렀을 때

let con = 0;

$(".whats-new-con-right").click(function () {
  if (con == 0) {
    $(".whats-new-con").css({
      left: "-6.5%",
    });

    $(".whats-new-con > div").eq(0).css({
      opacity: "0",
    });

    $(".whats-new-con > div").eq(4).css({
      opacity: "1",
    });

    $(".whats-new-con-left").css({
      opacity: "1",
    });

    con++;
  } else if (con == 1) {
    $(".whats-new-con").css({
      left: "-25.2%",
    });

    $(".whats-new-con > div").eq(1).css({
      opacity: "0",
    });

    $(".whats-new-con > div").eq(5).css({
      opacity: "1",
    });

    $(".whats-new-con-right").css({
      opacity: "0.2",
    });

    con = 2;
  }
});

// 왼쪽 버튼 눌렀을 때

$(".whats-new-con-left").click(function () {
  if (con == 2) {
    $(".whats-new-con").css({
      left: "-6.5%",
    });

    $(".whats-new-con > div").eq(5).css({
      opacity: "0",
    });

    $(".whats-new-con > div").eq(1).css({
      opacity: "1",
    });

    $(".whats-new-con-right").css({
      opacity: "1",
    });

    con = 1;
  } else if (con == 1) {
    $(".whats-new-con").css({
      left: "12.4%",
    });

    $(".whats-new-con > div").eq(4).css({
      opacity: "0",
    });

    $(".whats-new-con > div").eq(0).css({
      opacity: "1",
    });

    $(".whats-new-con-left").css({
      opacity: "0.2",
    });

    con = 0;
  }
});









// o-sns 영역의 이미지 슬라이드 (자동 슬라이드)



// 슬라이드 구현

let curr = 0;

function oslide () {

  
  i = curr % 5

    curr++;
  
    $('.o-sns-inner > li').eq(i).addClass('on');
    $('.o-sns-inner > li').eq(i - 1).addClass('go');
    $('.o-sns-inner > li').eq(i - 1).removeClass('on');
    $('.o-sns-inner > li').eq(i - 2).addClass('back');
    $('.o-sns-inner > li').eq(i - 2).removeClass('go');
    $('.o-sns-inner > li').eq(i - 3).removeClass('back');


}

setInterval(() => oslide(), 4000);





// news & event 슬라이드

let ne = 0;

$('.news-event-slide-wrap > img').click( function () {

  if(ne == 0) {

    $('.ne-slide2').css({
      left: '0'
    })

    $('.ne-slide1').css({
      left: '-100%'
    })

    ne++;
    
    console.log(ne);

  } else if ( ne == 1 ) {

    $('.ne-slide1').css({
      left: '0'
    })

    $('.ne-slide2').css({
      left: '100%'
    })

    ne--;

    console.log(ne);

  }

})



// footer 클릭

let fasi = 0;

$('.ft-con1-fasi').click( function () {
  if(fasi == 0) {
    $('.ft-con1-fasi-sub').addClass('on');
    $('.ft-con1-fasi').addClass('on');
    fasi++;
  } else if (fasi == 1) {
    $('.ft-con1-fasi-sub').removeClass('on');
    $('.ft-con1-fasi').removeClass('on');
    fasi = 0;
  }
})

let sitemap = 0;

$('.ft-con1-sitemap').click( function () {
  if(sitemap == 0) {
    $('.ft-con1-sitemap-sub').addClass('on');
    $('.ft-con1-sitemap').addClass('on');
    sitemap++;
  } else if (sitemap == 1) {
    $('.ft-con1-sitemap-sub').removeClass('on');
    $('.ft-con1-sitemap').removeClass('on');
    sitemap = 0;
  }
})




// 반응형 soonjung 버튼



$('.soon-jung-min-button-left').click( function () {
  $('.soon-jung-min-button-left').addClass('on');
  $('.soon-jung-min-button-right').removeClass('on');
  $('.soon-jung-con-sub-wrap').removeClass('on');
})

$('.soon-jung-min-button-right').click( function () {
  $('.soon-jung-min-button-right').addClass('on');
  $('.soon-jung-min-button-left').removeClass('on');
  $('.soon-jung-con-sub-wrap').addClass('on');
})