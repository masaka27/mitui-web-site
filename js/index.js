$(function () {
  var biggestHeight = '0';
  $('.parent').each(function () {
    if ($(this).height() > biggestHeight) {
      biggestHeight = $(this).height();
    }
  });
  $('.parent').height(biggestHeight);
});
