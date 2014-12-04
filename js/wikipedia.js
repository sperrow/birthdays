function mainLookup(url) {
  $.ajax({
    type: "GET",
    url: url,
    contentType: "application/json; charset=utf-8",
    async: false,
    dataType: "json",
    success: function (data, textStatus, jqXHR) {
      var markup = data.parse.text["*"];
      var blurb = $('<div></div>').html(markup);

      // remove links as they will not work
      blurb.find('a').each(function() { $(this).replaceWith($(this).html()); });
      // remove any references
      blurb.find('sup').remove();
      // remove cite error
      blurb.find('.mw-ext-cite-error').remove();

      // add wikipedia summary
      $('.jumbo-output').html($(blurb).find('p')[0]);
    },
    error: function (errorMessage) {
    }
  });
}

function birthsLookup(url) {
  $.ajax({
    type: "GET",
    url: url,
    contentType: "application/json; charset=utf-8",
    async: false,
    dataType: "json",
    success: function (data, textStatus, jqXHR) {
      var markup = data.parse.text["*"];
      var blurb = $('<div></div>').html(markup);

      // remove links as they will not work
      blurb.find('a').each(function() { $(this).replaceWith($(this).html()); });
      // remove any references
      blurb.find('sup').remove();
      // remove cite error
      blurb.find('.mw-ext-cite-error').remove();

      // random sample of wikipedia births
      var birthsList = $(blurb).find('li');
      var len = birthsList.length;
      for (i = len - 9; i > len - 108; i -= 10) {
        $(birthsList[i]).appendTo($('.panel-births ul'));
      }
    },
    error: function (errorMessage) {
    }
  });
}

function holidaysLookup(url) {
  $.ajax({
    type: "GET",
    url: url,
    contentType: "application/json; charset=utf-8",
    async: false,
    dataType: "json",
    success: function (data, textStatus, jqXHR) {
      var markup = data.parse.text["*"];
      var blurb = $('<div></div>').html(markup);

      // remove links as they will not work
      blurb.find('a').each(function() { $(this).replaceWith($(this).html()); });
      // remove any references
      blurb.find('sup').remove();
      // remove cite error
      blurb.find('.mw-ext-cite-error').remove();
      
      // random sample of wikipedia holidays
      var holidaysList = $(blurb).find('li');
      for (i = 1; i < 11; i ++) {
        $(holidaysList[i]).appendTo($('.panel-holidays ul'));
      }
    },
    error: function (errorMessage) {
    }
  });
}

function yearLookup(url) {
  $.ajax({
    type: "GET",
    url: url,
    contentType: "application/json; charset=utf-8",
    async: false,
    dataType: "json",
    success: function (data, textStatus, jqXHR) {
      var markup = data.parse.text["*"];
      var blurb = $('<div></div>').html(markup);

      // remove links as they will not work
      blurb.find('a').each(function() { $(this).replaceWith($(this).html()); });
      // remove any references
      blurb.find('sup').remove();
      // remove cite error
      blurb.find('.mw-ext-cite-error').remove();

      // add wikipedia summary
      $('.jumbo-year').html($(blurb).find('p')[0]);
    },
    error: function (errorMessage) {
    }
  });
}

function eventsLookup(url) {
  $.ajax({
    type: "GET",
    url: url,
    contentType: "application/json; charset=utf-8",
    async: false,
    dataType: "json",
    success: function (data, textStatus, jqXHR) {
      var markup = data.parse.text["*"];
      var blurb = $('<div></div>').html(markup);

      // remove links as they will not work
      blurb.find('a').each(function() { $(this).replaceWith($(this).html()); });
      // remove any references
      blurb.find('sup').remove();
      // remove cite error
      blurb.find('.mw-ext-cite-error').remove();

      // random sample of wikipedia events
      var eventsList = $(blurb).find('li');
      for (i = 20; i < 140; i += 13) {
        $(eventsList[i]).appendTo($('.panel-events ul'));
      }

    },
    error: function (errorMessage) {
    }
  });
}