

$(document).ready(function () {
    $(".button1").click(function () {
        var date2 = $("#date").val();
        var time2 = $("#time").val();
        var OHIP2 = $("#OHIP").val();
        var email2 = $("#email").val();
        var phone2 = $("#phone").val();


        if (!date2 || !time2 || !phone2 || !email2 || !OHIP2) {
            window.alert("You Have Not Entered All The Information Yet. Try Again");

        }
        else {

            localStorage.setItem("date", date2);
            localStorage.setItem("time", time2);
            localStorage.setItem("OHIP", OHIP2);
            localStorage.setItem("email", email2);
            localStorage.setItem("phone", phone2);
            window.alert("All Data Saved Successfully");
            document.forms[0].reset();

        }



    });
    $(".vaccineBooking").click(function () {
        window.alert("By Clicking Vaccine Booking Button All your Previous Data History Will Be Removed, And You Will Have To Provide Your Information.");
        localStorage.clear();
    });

});

 