$(document).ready(function(){

	// Variables
	var clickedTab = $(".tabs > .active");
	var tabWrapper = $(".tab__content");
	var activeTab = tabWrapper.find(".active");
	var activeTabHeight = activeTab.outerHeight(true);

	// Show tab on page load
	activeTab.show();
	clickedTab.trigger('click');

	// Set height of wrapper on page load
	//tabWrapper.height(activeTabHeight + 10);

	$(".tabs > li").on("click", function() {

		// Remove class from active tab
		$(".tabs > li").removeClass("active");

		// Add class active to clicked tab
		$(this).addClass("active");

		// Update clickedTab variable
		clickedTab = $(".tabs .active");

		// fade out active tab
		activeTab.fadeOut(250, function() {

			// Remove active class all tabs
			$(".tab__content > li").removeClass("active");

			// Get index of clicked tab
			var clickedTabIndex = clickedTab.index();

			// Add class active to corresponding tab
			$(".tab__content > li").eq(clickedTabIndex).addClass("active");

			// update new active tab
			activeTab = $(".tab__content > .active");

			// Update variable
			activeTabHeight = activeTab.outerHeight(true);

			// Animate height of wrapper to new tab height
			tabWrapper.stop().delay(50).animate({
				height: activeTabHeight + 10
			}, 500, function() {

				// Fade in active tab
				activeTab.delay(50).fadeIn(250);

			});
		});
	});
});
