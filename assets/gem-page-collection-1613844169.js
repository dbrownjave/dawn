

    
(function( jQuery ){
    var $hero = jQuery('#m-1613844173705');
    var $module = jQuery('#m-1613844173705').children('.module');
    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
    
    $hero.removeAttr('style');

    var collectionImg = $module.attr('data-collection-image');
    if (collectionImg != undefined && collectionImg != "") {
        $hero.css('background-image', 'url(' + collectionImg + ')');
    } else {
        var defaultImg = $module.attr('data-image');
        $hero.css('background-image', 'url(' + defaultImg + ')');
    }

    var effect = $module.attr('data-effect');
    var transition = $module.attr('data-transition');

    $hero.removeClass('effect-zoom').removeClass('effect-parallax');
    if (effect != 'none') {
        $hero.addClass(effect);
    }
    
    if (effect == 'effect-zoom') {   
        $hero.css('background-attachment', 'initial');  

        setTimeout(function() {
            var backgroundImage = $hero.css('background-image');
            var backgroundSize = $hero.css('background-size');
            var backgroundPosition = $hero.css('background-position');
            $module.siblings('.gf_hero-bg-wrap').css({
                'background-image'      : 'inherit',
                'background-size'       : 'inherit',
                'background-position'   : 'inherit',
                '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                'transition'            : 'transform ' + transition + 's ease-in-out'
            })
            $module.siblings('.gf_hero-bg-wrap').children('.gf_hero-bg').css({
                'background-image'      : 'inherit',
                'background-size'       : 'inherit',
                'background-position'   : 'inherit',
                '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                'transition'            : 'transform ' + transition + 's ease-in-out'
            });
        }, 300);
    } else if (effect == 'effect-parallax') {
        $hero.css('background-attachment', 'fixed');
    } else {
        $hero.css('background-attachment', 'initial');
    }
})( window.GemQuery || jQuery );
    
    
(function( jQuery ){
    var $module = jQuery('#m-1613844173286').children('.module');
    var $collectionFilter = $module.find('.gf_collection-filter');
    var $sortCollection = $module.find('.gf_sort-collection');
    
    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

    var resizeSelect = function() {
        var $collectionFilterRuler = jQuery('<select><option></option></select>');
        var $sortCollectionRuler = jQuery('<select><option></option></select>');

        if ($collectionFilter.find('option:selected').length > 0) {
            $collectionFilterRuler.find('option').html($collectionFilter.find('option:selected').text());
        } else {
            $collectionFilterRuler.find('option').html($collectionFilter.find('option:first').text());
        }
        
        $collectionFilterRuler.css({'width': 'auto','height': '0','opacity':'0','border': '0', 'display': 'block'}).appendTo($module.find('.gf_collection-filter-wrapper'));
        
        if ($sortCollection.find('option:selected').length > 0) {
            $sortCollectionRuler.find('option').html($sortCollection.find('option:selected').text());
        } else {
            $sortCollectionRuler.find('option').html($sortCollection.find('option:first').text());
        }
        $sortCollectionRuler.css({'width': 'auto','height': '0','opacity':'0','border': '0', 'display': 'block'}).appendTo($module.find('.gf_sort-collection-wrapper'));
        var collectionFilterWidth = $collectionFilterRuler.width() + $collectionFilter.outerWidth() - $collectionFilter.width();
        var sortCollectionWidth = $sortCollectionRuler.width() + $sortCollection.outerWidth() - $sortCollection.width();
        
        if (collectionFilterWidth > sortCollectionWidth) {
            $collectionFilter.css('width', collectionFilterWidth);
            $sortCollection.css('width', collectionFilterWidth);
        } else {
            $collectionFilter.css('width', sortCollectionWidth);
            $sortCollection.css('width', sortCollectionWidth);
        }

        $collectionFilterRuler.remove();
        $sortCollectionRuler.remove(); 
    }

    resizeSelect();

    // Collection Filter
    $collectionFilter.bind('change', function(e) {
        if (mode == 'dev') {
            resizeSelect();
        } else {
            var tag = jQuery(this).val();
            
            var currentLocation = window.location.href;
            
            var baseUrl = currentLocation.slice(0, currentLocation.indexOf('/collections/'));
            var tailUrl = currentLocation.slice(currentLocation.indexOf('/collections/') + '/collections/'.length);
            var collectionName = tailUrl.slice(0, tailUrl.indexOf('?') == -1 ? undefined : tailUrl.indexOf('?'));
            var collectionName = collectionName.slice(0, collectionName.indexOf('/') == -1 ? undefined : collectionName.indexOf('/'));
            var query = location.search;
            query = query.replace(/page=\d*/ig ,'').replace('?&', '?').replace('&&', '&')

            window.location.href = baseUrl + '/collections/' + collectionName + ((tag == undefined || tag == '') ? '' : ('/' + tag)) + query;
            
        }
    });

    // Sort Collection
    $sortCollection.bind('change', function(e) {
        if (mode == 'dev') {
            resizeSelect();
        } else {
            var newSortBy = e.target.value;
            var currentSearch = location.search;
            var sortRegex = /sort_by=[\w-]+/ig;

            if (sortRegex.test(currentSearch)) {
                if (newSortBy != '') {
                    currentSearch = currentSearch.replace(sortRegex, 'sort_by=' + newSortBy);
                } else {
                    currentSearch = currentSearch.replace(sortRegex, '');
                    while (currentSearch.indexOf('&&') != -1) {
                        currentSearch.replace('&&', '&');
                    }
                }
            } else if (currentSearch == '' || currentSearch == '?') {
                currentSearch = '?sort_by=' + newSortBy;
            } else {
                currentSearch += ('&sort_by=' + newSortBy);
            }

            location.search = currentSearch;
        }
    });
})( window.GemQuery || jQuery );
    
(function( jQuery ){
  var $module = jQuery('#m-1613844173311').children('.module');

  var sameHeightTitle = $module.data('sameheightitle'),
  spacing = $module.data('spacing');
  collg = $module.data('collg'),
  colmd = $module.data('colmd'),
  colsm = $module.data('colsm'),
  colxs = $module.data('colxs');

  var $clearfixes = $module.find('.gf_row-no-padding').children('.gf_clearfix');
  var col = collg;

  jQuery(window).resize(function() {
    setTimeout(function() {
      for(var i = 0; i < $clearfixes.length; i++) {
        if($clearfixes.eq(i).css('display') == 'block') {
          if($clearfixes.eq(i).hasClass('visible-lg')) {
            col = collg;
            break;
          }
          if($clearfixes.eq(i).hasClass('visible-md')) {
            col = colmd;
            break;
          }
          if($clearfixes.eq(i).hasClass('visible-sm')) {
            col = colsm;
            break;
          }
          if($clearfixes.eq(i).hasClass('visible-xs')) {
            col = colxs;
            break;
          }
        }
      }
    }, 1000);
  });

  jQuery($module).css('padding', spacing);
})( window.GemQuery || jQuery );
    
    
(function( jQuery ){
  var $module = jQuery('#m-1613844173311-child1').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
(function(jQuery) {
  var $module = jQuery('#m-1613844173311-child1-0').children('.module');
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
    var $module = jQuery('#m-1613844173311-child1-2').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    
(function( jQuery ){
  var $module = jQuery('#m-1613844173311-child1-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
(function( jQuery ){
  var $module = jQuery('#m-1613844173311-child2').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
(function(jQuery) {
  var $module = jQuery('#m-1613844173311-child2-0').children('.module');
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
    var $module = jQuery('#m-1613844173311-child2-2').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    
(function( jQuery ){
  var $module = jQuery('#m-1613844173311-child2-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
(function( jQuery ){
  var $module = jQuery('#m-1613844173311-child3').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
(function(jQuery) {
  var $module = jQuery('#m-1613844173311-child3-0').children('.module');
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
    var $module = jQuery('#m-1613844173311-child3-2').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    
(function( jQuery ){
  var $module = jQuery('#m-1613844173311-child3-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
(function( jQuery ){
  var $module = jQuery('#m-1613844173311-child4').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
(function(jQuery) {
  var $module = jQuery('#m-1613844173311-child4-0').children('.module');
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
    var $module = jQuery('#m-1613844173311-child4-2').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    
(function( jQuery ){
  var $module = jQuery('#m-1613844173311-child4-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
(function( jQuery ){
  var $module = jQuery('#m-1613844173311-child5').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
(function(jQuery) {
  var $module = jQuery('#m-1613844173311-child5-0').children('.module');
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
    var $module = jQuery('#m-1613844173311-child5-2').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    
(function( jQuery ){
  var $module = jQuery('#m-1613844173311-child5-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
(function( jQuery ){
  var $module = jQuery('#m-1613844173311-child6').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
(function(jQuery) {
  var $module = jQuery('#m-1613844173311-child6-0').children('.module');
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
    var $module = jQuery('#m-1613844173311-child6-2').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    
(function( jQuery ){
  var $module = jQuery('#m-1613844173311-child6-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    