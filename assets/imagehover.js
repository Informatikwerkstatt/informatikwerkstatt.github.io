jQuery("img:not(#footer img)").wrap('<div class="alt-wrap"/>');
jQuery("img:not(#footer img)").each(function() {
    jQuery(this).after('<p class="alt">' + jQuery(this).attr('alt') + '</p>');
});
