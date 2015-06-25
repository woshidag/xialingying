function activateWithID(id) {

	var pswpElement = document.querySelectorAll('.pswp')[0];

	// build items array
	var items = [
	    {
	        src: 'jdkf.jpg',
	        w: 600,
	        h: 400,
	        msrc: 'http://placehold.it/60x40'
	    },
	    {
	        src: 'dld.png',
	        w: 600,
	        h: 400,
	        msrc: 'http://placehold.it/60x40'
	    },
	    {
	        src: 'img (2).jpg',
	        w: 600,
	        h: 400,
	        msrc: 'http://placehold.it/60x40'
	    },
	    {
	        src: 'img (1).jpg',
	        w: 600,
	        h: 400,
	        msrc: 'http://placehold.it/60x40'
	    },
	    {
	        src: 'fjd.jpg',
	        w: 600,
	        h: 400,
	        msrc: 'http://placehold.it/60x40'
	    },	    
	    {
	        src: 'img (6).jpg',
	        w: 600,
	        h: 400,
	        msrc: 'http://placehold.it/60x40'
	    },
	    {
	        src: 'img (4).jpg',
	        w: 600,
	        h: 400,
	        msrc: 'http://placehold.it/60x40'
	    },
	    {
	        src: 'kdls(1).jpg',
	        w: 600,
	        h: 400,
	        msrc: 'http://placehold.it/60x40'
	    },
	    {
	        src: 'kdls (2).jpg',
	        w: 600,
	        h: 400,
	        msrc: 'http://placehold.it/60x40'
	    },
	    {
	        src: '234.jpg',
	        w: 600,
	        h: 400,
	        msrc: 'http://placehold.it/60x40'
	    },	    	    
	    {
	        src: '2321.jpg',
	        w: 1200,
	        h: 900,
	        msrc: 'http://placehold.it/120x90'
	    },
	    {
	        src: '4654.jpg',
	        w: 1200,
	        h: 900,
	        msrc: 'http://placehold.it/120x90'
	    },
	    {
	        src: 'img (3).jpg',
	        w: 1200,
	        h: 900,
	        msrc: 'http://placehold.it/120x90'
	    },
	    {
	        src: 'jdf.jpg',
	        w: 1200,
	        h: 900,
	        msrc: 'http://placehold.it/120x90'
	    },
	    {
	        src: 'img (5).jpg',
	        w: 1200,
	        h: 900,
	        msrc: 'http://placehold.it/120x90'
	    },	
	    {
	        src: 'map1.jpg',
	        w: 1200,
	        h: 900,
	        msrc: 'http://placehold.it/120x90'
	    },
	    {
	        src: 'map2.jpg',
	        w: 1200,
	        h: 900,
	        msrc: 'http://placehold.it/120x90'
	    },
	    {
	        src: 'qrcode.bmp',
	        w: 1200,
	        h: 900,
	        msrc: 'http://placehold.it/120x90'
	    },
	];

	// define options (if needed)
	var options = {
	    // optionName: 'option value'
	    // for example:
	    index: id // start at first slide
	};

	// Initializes and opens PhotoSwipe
	var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
	gallery.init();
}

function activate() {
	activateWithID(0);
}