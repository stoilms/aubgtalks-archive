jQuery(document).ready(function($) {
    featuredSliderDefaults = $.parseJSON(featuredSliderDefaults);

    /* Featured slider navigation */
    $('#carousel').flexslider({
        animation: "slide",
        controlNav: true,
        directionNav: true,
        animationLoop: true,
        useCSS: false,
        slideshow: false,
        pauseOnAction: true,
        pauseOnHover: true,
        itemWidth: 146,
        asNavFor: '#slider'
    });

    /* Featured slider */
    featuredSlider = $("#slider").flexslider({
        controlNav: false,
        directionNav:true,
        animationLoop: true,
        sync: "#carousel",
        video:true,
        animation: featuredSliderDefaults.animation,
        useCSS: false,
        smoothHeight: true,
        slideshow: featuredSliderDefaults.slideshow,
        slideshowSpeed: featuredSliderDefaults.slideshowSpeed,
        pauseOnAction: true,
        pauseOnHover: featuredSliderDefaults.pauseOnHover,
        animationSpeed: 600,
        start: loadDynamicSlideContent,
        before: loadDynamicSlideContent
    });

    function loadDynamicSlideContent(slider) {
        /* Remove active video from previuous dynamic slide */
        slider.find('.cover--dynamic').removeClass('cover--dynamic').empty();

        /* Insert new video */
        var index = slider.animatingTo;
        var slide = slider.slides.get(index);

        /* Embed code strategy */
        var videoEmbed = $(slide).find('.video-embed').data('embed');
        if (videoEmbed) {
            var cover = $(slide).find('.cover');
            cover.html(videoEmbed);
            cover.addClass('cover--dynamic');

            /* Enable Video API if autoplay is enabled */
            if (featuredSliderDefaults.slideshow) {
                var youtubeSelectors = [
                    "iframe[src*='youtube.com']",
                    "iframe[src*='youtube-nocookie.com']",
                ];

                var vimeoSelectors = [
                    "iframe[src*='player.vimeo.com']"
                ];

                var ytVideo = cover.find(youtubeSelectors.join(','));
                var vimeoVideo = cover.find(vimeoSelectors.join(','));

                if (ytVideo.length) {
                    var src = ytVideo.prop('src');
                    if (src.indexOf("?") > -1) {
                        ytVideo.prop('src', src + '&enablejsapi=1');
                    } else {
                        ytVideo.prop('src', src + '?enablejsapi=1');
                    }

                    new YT.Player(ytVideo.get(0), {
                        events: {
                            'onStateChange' : onYoutubeStateChange
                        }
                    })
                }

                if (vimeoVideo.length) {
                    var src = vimeoVideo.prop('src');
                    vimeoVideo.prop('src', src + '&api=1&player_id=' + $(vimeoVideo).prop('id'));

                    var player = $f(vimeoVideo.get(0));
                    player.addEvent('ready', function() {
                        player.addEvent('play', stopFeaturedSlider);
                    });
                }
            }
        }

        /* jwPlayer strategy */
        var videoJw = $(slide).find('.video-jw');
        if (videoJw.length) {
            var cover = $(slide).find('.cover_jw');
            jwplayerOptions = {
                'file': videoJw.data('file'),
                'skin': videoJw.data('skin'),
                'width': '100%',
                'height': '100%',
                'stretching': 'fill',
                'modes': [
                    { type: 'flash', src: videoJw.data('flash-player') },
                    { type: 'html5' }
                ],
            };

            if (videoJw.data('image')) {
                jwplayerOptions.image = videoJw.data('image');
            }

            if (videoJw.data('hd-file')) {
                jwplayerOptions.plugins = {
                    'hd-1' : { 'file' : videoJw.data('hd-file') }
                };
            }

            if (featuredSliderDefaults.slideshow) {
                jwplayerOptions.events = {
                    onPlay: stopFeaturedSlider
                }
            }

            $('<div />').attr('id', 'video_' + videoJw.data('id')).prependTo(cover);
            jwplayer('video_' + videoJw.data('id')).setup(jwplayerOptions);
            cover.addClass('cover--dynamic');
         }
    }
});
