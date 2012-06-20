//= require application
//= require refresh
//= require twitter
//= require versionCheck
//= require projectCheck
//= require spin

$(function() {
  VersionCheck.init();
  ProjectCheck.init();

  if ($('body').hasClass('tiles_15')) {
    $('.building-indicator').spin({radius:8, length:9, width:3, lines:12, top:2, left:16});
  }
  else if ($('body').hasClass('tiles_48')) {
    $('.building-indicator').spin({radius:4, length:6, width:1, lines:12, top:1, left:10});
  }
  else if ($('body').hasClass('tiles_63')) {
    $('.building-indicator').spin({radius:4, length:4, width:1, lines:12, top:3, left:12});
  }
  else {
    $('.building-indicator').spin({radius:6, length:7, width:2, lines:12, top:4, left:6});
  }
});

$.fn.spin = function(opts) {
  this.each(function() {
    var $this = $(this),
        data = $this.data();

    if (data.spinner) {
      data.spinner.stop();
      delete data.spinner;
    }
    if (opts !== false) {
      data.spinner = new Spinner($.extend({color: $this.css('color')}, opts)).spin(this);
    }
  });
  return this;
};
