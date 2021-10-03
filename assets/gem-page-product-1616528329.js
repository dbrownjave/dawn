

    
    
    
        jQuery(function() {
            var $module = jQuery('#m-1570091472475').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570091472475-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570091472475-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570091472414').children('.module');
        }); 
    
(function(jQuery) {
  var $module = jQuery('#m-1614626124371').children('.module');
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
            var $module = jQuery('#m-1570091472475-3').children('.module');
            $module.gfV3ProductCartButton({ onItemAdded: function() {}});
        }); 
    
    
        jQuery(function() {
            var $module = jQuery('#m-1570091472475-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570091472364').children('.module');
            $module.gfV3ProductImageList({
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
                    $module.find('.gf_product-images-list').owlCarousel({
                        mouseDrag: true,
                        navSpeed: navspeed,
                        autoWidth: !1,
                        loo: loop,
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
                        }
                    }); 
                    break;
            }
        }); 
    
(function( jQuery ){
  var $module = jQuery('#m-1614629841536').children('.module');
  if(jQuery().gfYoutube) {
    $module.gfYoutube();
  }
})( window.GemQuery || jQuery );
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1614626978785').children('.module');
  var defaultOffsetPCT = $module.data('defaultOffsetPct'),
    orientation = $module.data('orientation'),
    moveSliderBy = $module.data('moveSliderBy'),
    sliderSpace = $module.data('sliderSpace');

  var defaultOffsetList = [];
  if($module.find('.gf_imagebeforeafter-item').length ==2){
    defaultOffsetList.push(defaultOffsetPCT);
  }


  $module.gfBeforeAfter({
    childSelector: ".gf_imagebeforeafter-item",
    defaultOffsetList: defaultOffsetList,
    orientation: orientation,
    moveSliderBy: moveSliderBy,
    sliderSpace: sliderSpace
  });
})( window.GemQuery || jQuery );
    
    
    
    