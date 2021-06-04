/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



$(document).ready(function () {

//        var theDate = JSON.parse(localStorage.date);
//        var theDate = localStorage.getItem("date");
    var date = localStorage.getItem("date");
    var Time = localStorage.getItem("time");
    var Phone = localStorage.getItem("phone");
    var Email = localStorage.getItem("email");
    var OHIP = localStorage.getItem("OHIP");

    if (!date || !Time || !Phone || !Email || !OHIP) {
        window.alert("You Have Not Entered All The Information Yet. You Will Be Redirected To Vaccine Booking Page");
        window.location.href = '../VaccineBooking/vaccineBooking.html';

    }
    else {
        $(".confirmation").append("Your Vaccine Reservation Was Successfully Done With The Following Details: ");
        $(".dateShow").append("Date: " + localStorage.getItem("date"));
        $(".timeShow").append("Time: " + localStorage.getItem("time"));
        $(".phoneShow").append("Phone Number: " + localStorage.getItem("phone"));
        $(".emailShow").append("Email Address: " + localStorage.getItem("email"));
        $(".OHIPShow").append("OHIP Number: " + localStorage.getItem("OHIP"));
        
        var img = document.createElement("img");
        img.src = "../images/check.png";
        var src = document.getElementById("check");
        src.appendChild(img);
    }
});

//if (date === null || Time === null || Phone === null || Email === null || OHIP === null) {
//    window.alert("You Have Not Entered All The Information Yet. You Will Be Redirected To Vaccine Booking Page");
//    window.location.href = '../VaccineBooking/vaccineBooking.html';
//
//}
