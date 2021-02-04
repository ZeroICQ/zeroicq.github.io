$(document).ready(function() {
    var targetTime = (new Date(Date.UTC(2021, 2, 6, 3, 0, 0, 0))).getTime();
    
    var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
    var oneHour = 60*60*1000; // hours*minutes*seconds*milliseconds
    var oneMinute = 60*1000;
    var oneSecond = 1000;

    var daysPlaceholder = $("div#timer span#days");
    var hoursPlaceholder = $("div#timer span#hours");
    var minutesPlaceholder = $("div#timer span#minutes");
    var secondsPlaceholder = $("div#timer span#seconds");

    function updateTimer() {
        var now = Date.now();

        var distance = targetTime - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);;

        daysPlaceholder.text(days);
        hoursPlaceholder.text(hours);
        minutesPlaceholder.text(minutes);
        secondsPlaceholder.text(seconds);
    
    }
    
    updateTimer();

    setInterval(updateTimer, 1000)
});     
