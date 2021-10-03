

        jQuery(function() {
            var $module = jQuery('#m-1542790774641').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1542790774685').children('.module');
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
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1551063366398').children('.module');
            var style = $module.attr('data-style');
            var updatePrice = $module.attr('data-updateprice');

            $module.gfV3ProductQuantity({
                'style': style,
                'updatePrice': updatePrice
            });
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1542790774641-3').children('.module');
            $module.gfV3ProductCartButton({ onItemAdded: function() {}});
        }); 
    
    
(function( jQuery ){
  var $module = jQuery('#m-1611341870386').children('.module');
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
    
        jQuery(function() {
            var $module = jQuery('#m-1542790774641-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1542790774641-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
    
        jQuery(function() {
            var $module = jQuery('#m-1542791877217').children('.module');
            var btnLabel = $module.attr('data-btnlabel');
            $module.gfSocialShare({
                btnLabel: btnLabel
            });
        });
    
        jQuery(function() {
            var $module = jQuery('#m-1542792104109').children('.module');
            var single   = $module.attr('data-single');
            var openDefault  = $module.attr('data-openDefault');
            var openTab  = $module.attr('data-openTab');
            var mode     = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

            if(openDefault == 0 || openDefault == '0') {
                openTab = '0';
            }

            $module.gfAccordion({
                single: single,
                openTab: openTab,
                mode: mode
            });

            var borderColor = $module.attr('data-borderColor');
            var borderSize = $module.attr('data-borderSize');

            $module.children('[data-accordion]').children('[data-control]').css('border-bottom', borderSize + ' solid ' + borderColor);
            $module.children('[data-accordion]').children('[data-content]').children().css('border-bottom', borderSize + ' solid ' + borderColor);
        });
    
    
    
        jQuery(function() {
            var $module = jQuery('#m-1542794385069').children('.module');

            var limit = parseInt($module.attr('data-limit'));
            if($module.find('.gf_row.gf_row_no_tools .gf_column').length > limit) {
                $module.find('.gf_row.gf_row_no_tools .gf_column:last').hide();
            }
        }); 
    
    
        jQuery(function() {
            var $module = jQuery('#m-1542794385069-child1').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1542794385069-child1-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1542794385069-child1-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1542794385069-child1-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1542794385069-child1-3').children('.module');
            $module.gfV3ProductCartButton({ onItemAdded: function() {}});
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1542794385069-child2').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1542794385069-child2-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1542794385069-child2-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1542794385069-child2-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1542794385069-child2-3').children('.module');
            $module.gfV3ProductCartButton({ onItemAdded: function() {}});
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1542794385069-child3').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1542794385069-child3-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1542794385069-child3-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1542794385069-child3-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1542794385069-child3-3').children('.module');
            $module.gfV3ProductCartButton({ onItemAdded: function() {}});
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1542794385069-child4').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1542794385069-child4-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1542794385069-child4-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1542794385069-child4-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1542794385069-child4-3').children('.module');
            $module.gfV3ProductCartButton({ onItemAdded: function() {}});
        }); 
    