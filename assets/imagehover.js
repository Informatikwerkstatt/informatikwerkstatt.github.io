jQuery("img").wrap('<div class="alt-wrap"/>');
jQuery("img").each(function() {
    jQuery(this).after('<p class="alt">' + jQuery(this).attr('alt') + '</p>');
});
