$(document).ready(function() {

    $('#datepicker-arrival').Zebra_DatePicker({
        direction: 1    // boolean true would've made the date picker future only
                        // but starting from today, rather than tomorrow
    });
	
	    $('#datepicker-departure').Zebra_DatePicker({
        direction: 1    // boolean true would've made the date picker future only
                        // but starting from today, rather than tomorrow
    });

  

});