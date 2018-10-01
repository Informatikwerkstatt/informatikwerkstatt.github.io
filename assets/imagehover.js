jQuery("img:not(#footer)").wrap('<div class="alt-wrap"/>');
jQuery("img:not(#footer)").each(function() {
    jQuery(this).after('<p class="alt">' + jQuery(this).attr('alt') + '</p>');
});
