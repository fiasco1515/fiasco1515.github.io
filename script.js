    var zero = 0;
      $(document).ready(function(){
        $(window).on('scroll',function(){
            $('.navbar').toggleClass('hide', $(window).scrollTop() > zero);
            zero = $(window).scrollTop();
        })
      });


      function GetMap() {
            var map = new Microsoft.Maps.Map('#myMap', {
                credentials: 'AnfvAXhC32Ai1PCrgTceaflDGCHhQ9UpTdn8Fk0tceR17w0R5V63l6hbvMtacJNs',
                center: new Microsoft.Maps.Location(43.642567, -79.387054),
                mapTypeId: Microsoft.Maps.MapTypeId.road,
                zoom: 15
                });

            var center = map.getCenter();

            infobox = new Microsoft.Maps.Infobox(map.getCenter(), {
                visible: false
            });

            infobox.setMap(map);

       
            var pin = new Microsoft.Maps.Pushpin(center, {
                title: 'Freedom Consulting Group',
                text: 'BC',
                color: '#1A79AC'
                });

            pin.metadata = {
                title: 'Freedom Consulting Group',
                description: '290 Bremner Blvd,<br>Toronto,ON M5V 3L9'
                 };

            Microsoft.Maps.Events.addHandler(pin, 'click', pushpinClicked);

            map.entities.push(pin);
        };

    function pushpinClicked(e) {
        if (e.target.metadata) {
            infobox.setOptions({
                location: e.target.getLocation(),
                title: e.target.metadata.title,
                description: e.target.metadata.description,
                visible: true
            });
        }
    };


	$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 800, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
	        });
	    });
	});


	function onScroll(event){
	    var scrollPos = $(document).scrollTop();
	    $('.main-nav a').each(function () {
	        var currLink = $(this);
	        var refElement = $(currLink.attr("href"));
	        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
	            $('.main-nav li a').removeClass("active");
	            currLink.addClass("active");
	        }
	        else{
	            currLink.removeClass("active");
	        }
	    });
	};


	const navSlide = function() {
		const menuIcon = document.querySelector('.menu-icon');
		const links = document.querySelector('.main-nav');
		menuIcon.addEventListener('click', function() {
			links.classList.toggle('navbar-active');
		});
	};

	navSlide();


    $(document).on("click", function(e){
      if( 
        $(e.target).closest(".main-nav").length == 0 &&
        $(".main-nav").hasClass("navbar-active") &&
        $(e.target).closest(".menu-icon").length == 0
      ){
        $('.main-nav').toggleClass('navbar-active');
      }
    });


    $("a").click(function(event){
      event.preventDefault();
    });