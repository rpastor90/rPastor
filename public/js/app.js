$(function () {
  $('button').on('click', function () {
    $(this).hide('slow');
    $('head').append('<link rel="stylesheet" type="text/css" href="/css/style.css" />');
    $('#navigation').addClass('navbar navbar-inverse navbar-fixed-top navbar-pad');
  });
});