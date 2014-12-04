$(document).ready(function() {
  $('#single-button').click(function (e) {
    e.preventDefault();

    // hide input after click
    $('.jumbo-input').slideUp(1000);

    // parse date
    var month = $("#month option:selected").text();
    var day = parseInt($('#day').val());
    var year = parseInt($('#year').val());

    // define headings
    var birthsLink = "https://en.wikipedia.org/wiki/" + month + "_" + day + "#Births";
    $('.panel-births p a').attr("href", birthsLink);
    var holidaysLink = "https://en.wikipedia.org/wiki/" + month + "_" + day + "#Holidays_and_observances";
    $('.panel-holidays p a').attr("href", holidaysLink);
    var eventsLink = "https://en.wikipedia.org/wiki/" + year + "#Events";
    $('.pnl-events .panel-title').html("Events In " + year);
    $('.panel-events p a').attr("href", eventsLink);

    // generate wiki api calls
    var mainBlurb = "http://en.wikipedia.org/w/api.php?format=json&action=parse&section=0&page=" + month + "_" + day + "&prop=text&callback=?";
    var birthsBlurb = "http://en.wikipedia.org/w/api.php?format=json&action=parse&section=2&page=" + month + "_" + day + "&prop=text&callback=?";
    var holidaysBlurb = "http://en.wikipedia.org/w/api.php?format=json&action=parse&section=4&page=" + month + "_" + day + "&prop=text&callback=?";
    var yearBlurb = "http://en.wikipedia.org/w/api.php?format=json&action=parse&section=0&page=" + year + "&prop=text&callback=?";
    var eventsBlurb = "http://en.wikipedia.org/w/api.php?format=json&action=parse&section=1&page=" + year + "&prop=text&callback=?";

    // fix section number for special days
    if (
      (month === "January" && day === 1)
      ||
      (month === "February" && day === 29)
      ) {
      birthsBlurb = "http://en.wikipedia.org/w/api.php?format=json&action=parse&section=3&page=" + month + "_" + day + "&prop=text&callback=?";
      holidaysBlurb = "http://en.wikipedia.org/w/api.php?format=json&action=parse&section=5&page=" + month + "_" + day + "&prop=text&callback=?";
    }

    // generate content
    mainLookup(mainBlurb);
    birthsLookup(birthsBlurb);
    holidaysLookup(holidaysBlurb);
    zodiacLookup(month, day);
    yearLookup(yearBlurb);
    eventsLookup(eventsBlurb);

    // show content
    contentSlide();
  });

  function contentSlide() {
    $('.jumbo-input').slideUp(1000, function() {
      $('.jumbo-output').slideDown(1000, "linear", function() {
        $('.content').slideDown("slow");
      });
    });
  }
});