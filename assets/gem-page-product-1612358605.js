

jQuery(function() {
  var $module = jQuery('#m-1611563921635').children('.module');
  $module.gfV3Product();
}); 
    
    
    
(function(jQuery) {
  var $module = jQuery('#m-1611563921685').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  })
})(window.GemQuery || jQuery);
    
(function(jQuery) {
var $module = jQuery('#m-1611563921678').children('.module');
$module.gfV4ProductImageList({
  onImageClicked: function(imageUrl, imageZoomUrl) {}
});

var style = $module.attr('data-style');
switch(style) {
  case 'slider':
      var navspeed = $module.data('navspeed'),
          navlg = $module.data('navlg'),
          navmd = $module.data('navmd'),
          navsm = $module.data('navsm'),
          navxs = $module.data('navxs'),
          collg = $module.data('collg'),
          colmd = $module.data('colmd'),
          colsm = $module.data('colsm'),
          colxs = $module.data('colxs'),
          dotslg = $module.data('dotslg'),
          dotsmd = $module.data('dotsmd'),
          dotssm = $module.data('dotssm'),
          dotsxs = $module.data('dotsxs'),

          marginlg = parseInt($module.data('mlg')),
          marginmd = parseInt($module.data('mmd')),
          marginsm = parseInt($module.data('msm')),
          marginxs = parseInt($module.data('mxs'));

      var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
      if(mode == 'production') {
          var loop = $module.data('loop');
      } else {
          var loop = 0;
      }
      $module.find('.gf_product-images-list').children().each( function( index ) {
        jQuery(this).attr( 'data-position', index );
      });
      $module.find('.gf_product-images-list').owlCarousel({
          mouseDrag: false,
          navSpeed: navspeed,
          autoWidth: !1,
          loop: loop,
          responsiveClass:true,
          responsive:{
              0:{
                  items:colxs,
                  nav: navxs,
                  dots:dotsxs,
                  margin: marginxs
              },
              768:{
                  items:colsm,
                  nav: navsm,
                  dots:dotssm,
                  margin: marginsm
              },
              992:{
                  items:colmd,
                  nav: navmd,
                  dots:dotsmd,
                  margin: marginmd
              },
              1200:{
                  items:collg,
                  nav: navlg,
                  dots:dotslg,
                  margin: marginlg
              }
          },
          onInitialized: function(){
            $module.closest('.module-wrap[data-label="(P) Image List"]').addClass('gf-carousel-loaded');
          }
      }); 
      break;
}
})(window.GemQuery || jQuery); 
    
    
    
    
    
    
    
    
jQuery(function() {
  var $module = jQuery('#m-1611563921664').children('.module');
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1611563921734').children('.module');
}); 
    
    
    
    
    
    
    
    
    
    
    
jQuery(function() {
    var $module = jQuery('#m-1611563921692').children('.module');
    var style = $module.attr('data-style');
    var updatePrice = $module.attr('data-updateprice');

    $module.gfV3ProductQuantity({
        'style': style,
        'updatePrice': updatePrice
    });
});
    
    
    
    
    
    
    
(function( jQuery ){
  try {
    var $module = jQuery('#m-1611563921732').children('.module');   
    var navspeed = $module.data('navspeed'),
      autoplaytimeout = $module.data('autoplaytimeout'),
      autoplayhoverpause = $module.data('autoplayhoverpause'),
      navlg = $module.data('navlg'),
      navmd = $module.data('navmd'),
      navsm = $module.data('navsm'),
      navxs = $module.data('navxs'),
      collg = $module.data('collg'),
      colmd = $module.data('colmd'),
      colsm = $module.data('colsm'),
      colxs = $module.data('colxs'),
      dotslg = $module.data('dotslg'),
      dotsmd = $module.data('dotsmd'),
      dotssm = $module.data('dotssm'),
      dotsxs = $module.data('dotsxs'),
      marginlg = parseInt($module.data('marginlg')),
      marginmd = parseInt($module.data('marginmd')),
      marginsm = parseInt($module.data('marginsm')),
      marginxs = parseInt($module.data('marginxs'));

    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
    if(mode == 'production') {
      var autoplay = $module.data('autoplay'), 
          loop = $module.data('loop');
    } else {
      var autoplay = 0, 
          loop = 0;
    }

    var initCarousel = function() {
      $module.owlCarousel({
        mouseDrag: false,
        autoplayHoverPause: autoplayhoverpause,
        autoplay: autoplay,
        autoplaySpeed: navspeed,
        autoplayTimeout: autoplaytimeout,
        loop: loop,
        navSpeed: navspeed,
        autoWidth: !1,
        responsiveClass:true,
        responsive:{
          0:{
              items:colxs,
              nav: navxs,
              dots:dotsxs,
              margin: marginxs
          },
          768:{
              items:colsm,
              nav: navsm,
              dots:dotssm,
              margin: marginsm
          },
          992:{
              items:colmd,
              nav: navmd,
              dots:dotsmd,
              margin: marginmd
          },
          1200:{
              items:collg,
              nav: navlg,
              dots:dotslg,
              margin: marginlg
          }
        },
        onInitialized: function () {
          $module.closest('.module-wrap[data-label="Carousel"]').addClass('gf-carousel-loaded');
          jQuery(window).trigger("resize");
        }
      });
    }
    
    // Fix nested carousel bug	
    if ($module.parent().parent().closest('.module-wrap[data-label="Carousel"]').length > 0) {	
        setTimeout(function() {	
            initCarousel();	
        }, 300)	
    } else {	
        initCarousel();	
    }
  } catch(err) {}
})( window.GemQuery || jQuery );
    
jQuery(function() {
  var $module = jQuery('#m-1611563921646').children('.module');
}); 
    
    
    
    
    
jQuery(function() {
  var $module = jQuery('#m-1611563921742').children('.module');
}); 
    
    
    
jQuery(function() {
  var $module = jQuery('#m-1611563921626').children('.module');
}); 
    
    
    
jQuery(function() {
  var $module = jQuery('#m-1611563921569').children('.module');
}); 
    
    
    
jQuery(function() {
  var $module = jQuery('#m-1611563921687').children('.module');
}); 
    
    
    
jQuery(function() {
  var $module = jQuery('#m-1611563921636').children('.module');
});
    
(function(jQuery) {
    var $module = jQuery('#m-1611563921670').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
(function(jQuery) {
  var $module = jQuery('#m-1612358906014').children('.module');
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

  var blankOption = $module.attr('data-blankoption');
  var blankOptionText = $module.attr('data-blankoptiontext');
  var style = $module.attr('data-style');

  $module.gfV3ProductVariants({
    mode: mode,
    blankOption: blankOption,
    blankOptionText: blankOptionText,
    style: style,
    onVariantSelected: function(variant, $select) {}
  });
})(window.GemQuery || jQuery); 
    
jQuery(function() {
  var $module = jQuery('#m-1611563921625').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
(function( jQuery ){
  var $module = jQuery('#m-1611563921683').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
(function( jQuery ){
  try {
    var $module = jQuery('#m-1611563921659').children('.module');
    var single = $module.attr('data-single');
    var openDefault = $module.attr('data-openDefault');
    var openTab = $module.attr('data-openTab');
    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

    if(openDefault == 0 || openDefault == '0') {
      openTab = '0';
    }

    $module.gfAccordion({
      single: single,
      openTab: openTab,
      mode: mode,
      onChanged: function() {	
        // Fix (P) Desc read more bug	
        $module.find('.module-wrap[data-label="(P) Description"]').each(function(index, el) {	
          if (jQuery(el).children('.module').data('gfv3productdesc') != undefined) {	
            jQuery(el).children(".module").data("gfv3productdesc").initReadMore();	
          }	
        })	
      }
    });

    var borderColor = $module.attr('data-borderColor');
    var borderSize = $module.attr('data-borderSize');

    $module.children('[data-accordion]').children('[data-control]').css('border-bottom', borderSize + ' solid ' + borderColor);
    $module.children('[data-accordion]').children('[data-content]').children().css('border-bottom', borderSize + ' solid ' + borderColor);
  } catch(err) {}
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
jQuery(function() {
  var $module = jQuery('#m-1611563921630').children('.module');
  $module.gfV3Product();
}); 
    
    
    
    
(function(jQuery) {
  var $module = jQuery('#m-1611563921630-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  })
})(window.GemQuery || jQuery);
    
jQuery(function() {
  var $module = jQuery('#m-1611563921630-1').children('.module');
});
    
jQuery(function() {
  var $module = jQuery('#m-1611563921716').children('.module');
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1611563921701').children('.module');
}); 
    
    
    
    
    
    
    
(function(jQuery) {
    var $module = jQuery('#m-1611563921630-2').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
jQuery(function() {
  var $module = jQuery('#m-1611563921568').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
    var $module = jQuery('#m-1611563921627').children('.module');
    $module.gfV1StockCounter();
});
    
jQuery(function() {
  var $module = jQuery('#m-1611563921638').children('.module');
  $module.gfV3Product();
}); 
    
    
    
    
(function(jQuery) {
  var $module = jQuery('#m-1611563921638-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  })
})(window.GemQuery || jQuery);
    
jQuery(function() {
  var $module = jQuery('#m-1611563921638-1').children('.module');
});
    
jQuery(function() {
  var $module = jQuery('#m-1611563921633').children('.module');
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1611563921580').children('.module');
}); 
    
    
    
    
    
    
    
(function(jQuery) {
    var $module = jQuery('#m-1611563921638-2').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
jQuery(function() {
  var $module = jQuery('#m-1611563921579').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
    var $module = jQuery('#m-1611563921746').children('.module');
    $module.gfV1StockCounter();
});
    
jQuery(function() {
  var $module = jQuery('#m-1611563921752').children('.module');
  $module.gfV3Product();
}); 
    
    
    
    
(function(jQuery) {
  var $module = jQuery('#m-1611563921752-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  })
})(window.GemQuery || jQuery);
    
jQuery(function() {
  var $module = jQuery('#m-1611563921752-1').children('.module');
});
    
jQuery(function() {
  var $module = jQuery('#m-1611563921728').children('.module');
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1611563921677').children('.module');
}); 
    
    
    
    
    
    
    
(function(jQuery) {
    var $module = jQuery('#m-1611563921752-2').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
jQuery(function() {
  var $module = jQuery('#m-1611563921643').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
    var $module = jQuery('#m-1611563921618').children('.module');
    $module.gfV1StockCounter();
});
    
jQuery(function() {
  var $module = jQuery('#m-1611563921740').children('.module');
  $module.gfV3Product();
}); 
    
    
    
    
(function(jQuery) {
  var $module = jQuery('#m-1611563921740-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  })
})(window.GemQuery || jQuery);
    
jQuery(function() {
  var $module = jQuery('#m-1611563921740-1').children('.module');
});
    
jQuery(function() {
  var $module = jQuery('#m-1611563921691').children('.module');
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1611563921587').children('.module');
}); 
    
    
    
    
    
    
    
(function(jQuery) {
    var $module = jQuery('#m-1611563921740-2').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
jQuery(function() {
  var $module = jQuery('#m-1611563921583').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
    var $module = jQuery('#m-1611563921676').children('.module');
    $module.gfV1StockCounter();
});
    
    
    
    
jQuery(function() {
  var $module = jQuery('#m-1611563921708').children('.module');
}); 
    
    
    
(function( jQuery ){
  try {
    var $module = jQuery('#m-1611563921713').children('.module');
    var single = $module.attr('data-single');
    var openDefault = $module.attr('data-openDefault');
    var openTab = $module.attr('data-openTab');
    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

    if(openDefault == 0 || openDefault == '0') {
      openTab = '0';
    }

    $module.gfAccordion({
      single: single,
      openTab: openTab,
      mode: mode,
      onChanged: function() {	
        // Fix (P) Desc read more bug	
        $module.find('.module-wrap[data-label="(P) Description"]').each(function(index, el) {	
          if (jQuery(el).children('.module').data('gfv3productdesc') != undefined) {	
            jQuery(el).children(".module").data("gfv3productdesc").initReadMore();	
          }	
        })	
      }
    });

    var borderColor = $module.attr('data-borderColor');
    var borderSize = $module.attr('data-borderSize');

    $module.children('[data-accordion]').children('[data-control]').css('border-bottom', borderSize + ' solid ' + borderColor);
    $module.children('[data-accordion]').children('[data-content]').children().css('border-bottom', borderSize + ' solid ' + borderColor);
  } catch(err) {}
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1611563921594').children('.module');

  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  if(mode == 'production') { 
    $module.children('form').on('submit', function() {
      try {
        localStorage.setItem('gemId', '#m-1611563921594');
      } catch(err) {}
    });

    var gemId = '';
    try {
      var gemId = localStorage.getItem('gemId');
    } catch(err) {}

    if(gemId != '') {
      var moduleId = '#' + $module.parent().attr('id');
      if(gemId == moduleId) {
        $module.find(".note").show();
        
        var $note = $module.find('.note.form-success, .note.form-error');
        if ($note.length > 0) {
          $popup = $module.closest('.module-wrap[data-label="Popup"]');
          if ($popup.children('.module').data('gfv1popup')) {
            $popup.children('.module').data('gfv1popup').show();
          }
        }
          
        var cbLink = $module.find('input[name="gemcallback"]').val() != undefined ? jQuery.trim($module.find('input[name="gemcallback"]').val()) : '';

        if(cbLink && cbLink != '') {
          try {
            localStorage.setItem('gemId', 'redirected');
          } catch(err) {}

          var target = $module.attr("data-target") || '';
          if(target!=="_blank"){
            window.location.href = cbLink;
          }else {
            window.open(cbLink, '_blank')
          }
        }
      }
    } else {
      var cbLink = $module.find('input[name="gemcallback"]').val() != undefined ? jQuery.trim($module.find('input[name="gemcallback"]').val()) : '';
      
      var $note = $module.find('.note.form-success, .note.form-error');
      if ($note.length > 0) {
        $popup = $module.closest('.module-wrap[data-label="Popup"]');
        if ($popup.children('.module').data('gfv1popup')) {
          $popup.children('.module').data('gfv1popup').show();
        }
      }

      if(cbLink && cbLink != '') {
        var target = $module.attr("data-target") || '';
        if(target!=="_blank"){
          window.location.href = cbLink;
        }else {
          window.open(cbLink, '_blank')
        }
      }
    }
  }
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    
    
    
jQuery(function() {
  var $module = jQuery('#m-1611563921756').children('.module');
}); 
    
    
    
jQuery(function() {
  var $module = jQuery('#m-1611563921765').children('.module');
}); 
    
    
    
    
jQuery(function() {
  var $module = jQuery('#m-1611563921770').children('.module');
}); 
    
    
    
    
jQuery(function() {
  var $module = jQuery('#m-1611563921771').children('.module');
}); 
    
    
    
    