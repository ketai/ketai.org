 // $(".sidelist div").slice(10).hide();

 // var mincount = 10;
 // var maxcount = 20;


 // $(window).scroll(function() {
 //     if ($(window).scrollTop() + $(window).height() >= $(document).height() - 20) {

 //         function show_popup() {
 //             $(".box div").slice(mincount, maxcount).slideDown(100);

 //             mincount = mincount + 10;
 //             maxcount = maxcount + 10;

 //         };
 //         window.setTimeout(show_popup, 1000);

 //     }
 // });

// $(document).ready(function() {
//     var $container = $('#content');
//     $container.imagesLoaded(function() {
//         // Initialize Masonry
//         $container.masonry({
//             columnWidth: 320,
//             itemSelector: '.box',
//             isFitWidth: true,
//             isAnimated: !Modernizr.csstransitions
//         });

//     });
//     $container.infinitescroll({
//             navSelector: '#page-nav', // selector for the paged navigation 
//             nextSelector: '#page-nav a', // selector for the NEXT link (to page 2)
//             itemSelector: '.box', // selector for all items you'll retrieve
//             loading: {
//                 finishedMsg: 'No more pages to load.',
//                 img: 'http://i.imgur.com/6RMhx.gif',
//                 msgText: "<em>Loading the next set of posts...</em>"
//             },
//             errorCallback: function() {
//                 $('#infscr-loading').animate({
//                     opacity: 0.8
//                 }, 2000).fadeOut('normal');
//             }
//         },
//         // call masonry as a callback
//         function(newElements) {
//             var $newElems = $(newElements);
//             $container.masonry('appended', $newElems);
//         }
//     );
// });

// // var $container = $('#content');
// // $container.infinitescroll({
// //   navSelector  : '#page-nav',    // selector for the paged navigation 
// //   nextSelector : '#page-nav a',  // selector for the NEXT link (to page 2)
// //   itemSelector : '.box',     // selector for all items you'll retrieve
// //   loading: {
// //       finishedMsg: 'No more pages to load.',
// //       img: 'http://i.imgur.com/6RMhx.gif'
// //     }
// //   },
// //   // trigger Masonry as a callback
// //   function( newElements ) {
// //     var $newElems = $( newElements );
// //     $container.masonry( 'appended', $newElems );
// //   }
// // );


// //Main content container
// // var $container = $('.grid');

// // // Masonry + ImagesLoaded
// // $container.imagesLoaded(function(){
// // 	$container.masonry({
// // 		// selector for entry content
// // 		itemSelector: '.grid-item',
// // 		columnWidth: 200
// // 	});
// // });

// // // Infinite Scroll
// // $container.infinitescroll({

// // 	// selector for the paged navigation (it will be hidden)
// // 	navSelector  : ".navigation",
// // 	// selector for the NEXT link (to page 2)
// // 	nextSelector : ".nav-previous a",
// // 	// selector for all items you'll retrieve
// // 	itemSelector : ".grid-item",

// // 	// finished message
// // 	loading: {
// // 		finishedMsg: 'No more pages to load.'
// // 		}
// // 	},

// // 	// Trigger Masonry as a callback
// // 	function( newElements ) {
// // 		// hide new items while they are loading
// // 		var $newElems = $( newElements ).css({ opacity: 0 });
// // 		// ensure that images load before adding to masonry layout
// // 		$newElems.imagesLoaded(function(){
// // 			// show elems now they're ready
// // 			$newElems.animate({ opacity: 1 });
// // 			$container.masonry( 'appended', $newElems, true );
// // 		});

// // });

// // /**
// //  * OPTIONAL!
// //  * Load new pages by clicking a link
// //  */

// // // Pause Infinite Scroll
// // $(window).unbind('.infscr');

// // // Resume Infinite Scroll
// // $('.nav-previous a').click(function(){
// // 	$container.infinitescroll('retrieve');
// // 	return false;
// // });
