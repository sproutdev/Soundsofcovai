$(document).ready(function() {
    $('#fullpage').fullpage({
    	css3: true,
    	scrollBar: false,
        sectionsColor: ['#55efc4', '#81ecec', '#0984e3'],
        anchors:['firstPage', 'secondPage', 'thirdPage'],
        controlArrows: true,
        navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['WELCOME', 'RACE COURSE', 'VADAVALLI', 'EDHOONNU'],
		showActiveTooltip: false,
		resetSliders: true,
		scrollOverflow: false
    });
$.fn.fullpage.setAllowScrolling(true);
});


