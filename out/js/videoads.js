/**
*** VideoAds.js - HTML5 & JavaScript Video Advertising plugin for MediaElements.js
*** Author: Kamil Czujowski (https://twitter.com/kamilczujowski), Sergej Müller (http://wpcoder.de)
*** Version: 1.0
*** Made with ♥ - Copyright (c) 2013 Hamburg, Germany - All rights reserved.
**/


$(function() {
	/* Set variables */
	var ads_source = $('.ads'),
		ads_timeline = {},
		close = $('<a href="#" id="close">Close</a>');
		

	/* Metainfo for ads */
	$.each(
		ads_source,
		function(index, obj) {
			var $$ = $(obj),
				enable = $$.data('enable-time'),
				disable = $$.data('disable-time');

			ads_timeline[enable] = {
				'object': $$,
				'display': 'block'
			};
			ads_timeline[disable] = {
				'object': $$,
				'display': 'none'
			};
		}
	);

	/* Close current ad */
	close.appendTo('.ads').on(
		'click',
		function(e) {
			$(this).parent().remove();

			e.preventDefault();
		}
	);
	
	
	/* MediaPlayer */
	$('video').mediaelementplayer(
		{
			startVolume: 1,
			enableAutosize: true,
			features: ['progress', 'duration', 'fullscreen', 'current',],
			success: function (mediaElement, domObject) {
				// Push ads to the Video-Container
				ads_source.appendTo('.mejs-container');
				
				// Starting timer
				mediaElement.addEventListener(
					'timeupdate',
					function(e) {
						//  No ads?
						if ( $.isEmptyObject(ads_timeline) ) {
							return;
						}
						
						// Variables
						var current = parseInt(mediaElement.currentTime, 10);
						
						// Control ads
						if ( ads_timeline[current] ) {
							var object = ads_timeline[current]['object'],
								display = ads_timeline[current]['display'];
							
							object.css(
								'display',
								display
							);
						}

						e.preventDefault();

					},
					false
				);
			}
		}
	);
	
});