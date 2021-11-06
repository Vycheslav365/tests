$(document).ready(function () {
	$('.header__burger,.header__link').click(function(event){
		 $('.header__burger,.header__menu').toggleClass('active');
	});
	$('.fixed__img1,.body-title-close').click(function(event){
	$('.backround__telephon').toggleClass('open');
	});
	});

	
	var isScrolling = false;

	window.addEventListener("scroll", throttleScroll, false);

	function throttleScroll(e) {
		if (isScrolling == false) {
			window.requestAnimationFrame(function() {
				scrolling(e);
				isScrolling = false;
			});
		}
		isScrolling = true;
	}

	document.addEventListener("DOMContentLoaded", scrolling, false);

	var listItems = document.querySelectorAll("#mainContent figure");
	var firstBox = document.querySelector("#firstBox");
	var secondBox = document.querySelector("#secondBox");

	function scrolling(e) {

		for (var i = 0; i < listItems.length; i++) {
			var listItem = listItems[i];

			if (isPartiallyVisible(listItem)) {
				listItem.classList.add("active");
			} else {
				listItem.classList.remove("active");
			}
		}
	}

	function isPartiallyVisible(el) {
		var elementBoundary = el.getBoundingClientRect();

		var top = elementBoundary.top;
		var bottom = elementBoundary.bottom;
		var height = elementBoundary.height;

		return ((top + height >= 0) && (height + window.innerHeight >= bottom));
	}

	function isFullyVisible(el) {
		var elementBoundary = el.getBoundingClientRect();

		var top = elementBoundary.top;
		var bottom = elementBoundary.bottom;

		return ((top >= 0) && (bottom <= window.innerHeight));
	}