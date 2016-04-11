$(document).ready(function(){

// ---------- column layout -----------------------------------------

  if ($('.eaRightColumnContent').length && $('.eaLeftColumnContent').length) {
    $('body').addClass('twocolumn');
    sortTwoColumn();

    // append submit button to column with form fields, show this column first
    if ($('.eaRightColumnContent .eaFormField').length ||
        $('.eaRightColumnContent .eaMessageContent').length ) {
      $('.eaSubmitResetButtonGroup').appendTo($('.en_right_wrapper').last());
     } else {
      $('.eaSubmitResetButtonGroup').appendTo($('.en_left_wrapper').last());
    }

  } else {
    $('body').addClass('onecolumn');
    $('form').addClass('middle');
  }

  // button placement (shift buttons above first below-form element)
  if ($('.below-form').length) {
    $('.below-form').first().parent().before($('.eaSubmitResetButtonGroup'));
  }

// ---------- "show more" toggle ------------------------------------

  $('.info-toggle').each(function(){
    var $toggle = $(this);
    var $target = $($toggle.attr('href'));
    var $close  = $('.close', $target);

    if ($toggle.is(':visible') && $target.length) {
      $target.hide();
      $toggle.on('click', function(e) {
        $target.slideDown();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
        e.preventDefault();
      });
      $close.on('click', function(e) {
        $target.slideUp();
        e.preventDefault();
      });
    }
  })

// ---------- fancy forms -------------------------------------------

  // enable Picker and Selector
  // see http://www.benplum.com/formstone/
  if (typeof $.fn.selecter == 'function') {
    $('select').selecter();
  }
  if (typeof $.fn.picker == 'function') {
    $('input[type=radio], input[type=checkbox]').picker();
  }

  // add a class for picker label height
  $('.picker-label').each(function(){
    var $label = $(this);
    var oneline = parseInt($label.css('line-height'), 10);
    if ($label.height() > oneline){
      $label.parent().addClass('multiline');
    } else {
      $label.parent().addClass('oneline');
    }
  });

// ---------- validations -------------------------------------------

  // move error message below the label
  $('.eaErrorMessage').each(function() {
    var $self = $(this);
    var $field = $self.siblings('.eaFormField');
    $self.appendTo($field);
  });

  // add class to field, where error occured
  $(window).on('DOMSubtreeModified', '.eaErrorMessage', function(e) {
    var $self = $(e.target);
    if (!$self.is(':empty')) {
      $self.parent().not('form').addClass('validationError');
    } else {
      $self.parent().not('form').removeClass('validationError');
    }
  });

  // remove #eaerrors if empty
  $(window).on('DOMSubtreeModified', '#eaerrors', function(e) {
    var $self = $(e.target);
    if ($self.text().trim() == "") {
      $self.hide();
    } else {
      $self.show();
    }
  });

// ---------- undo EN contact list formatting -----------------------

  $('.eaContactNameContainer').each(function(){
    var $checkbox = $(this).children('.eaContactSelectCheckbox');
    if ($checkbox.length) {
      // keep checkbox + label, remove node text + &nbsp;s but not links
      var $link = $(this).children('a')
      $(this).addClass('has-checkbox').wrapInner('<div class="remove"></div>');
      if ($link.length){
        $('label', this).text('').append($link);
      }
      $('.remove', this).replaceWith($checkbox);
    }
  });

// ---------- progress bar ------------------------------------------

  // configure progressbar = thermometer = counter
  var $thermometerEl = $('.pgbar-thermometer');
  var thermometerTarget = 250; // default
  var thermometerStart = 0; // default

  // read target value from data-target
  var thermometerDataTarget = $thermometerEl.data('target');
  if (typeof thermometerDataTarget !== 'undefined') {
    var parsedTarget = parseInt(thermometerDataTarget, 10);
    if (!isNaN(parsedTarget) && parsedTarget > 0) {
      thermometerTarget = parsedTarget;
    }
  }
  // read start value from data-start
  var thermometerDataStart = $thermometerEl.data('start');
  if (typeof thermometerDataStart !== 'undefined') {
    var parsedStart = parseInt(thermometerDataStart, 10);
    if (!isNaN(parsedStart) && parsedStart > 0) {
      thermometerStart = parsedStart;
    }
  }
  // initialize eActivistThermometer
  $thermometerEl.eActivistThermometer({
    token: 'd0120c28-2bdb-46a6-9086-b8d22e0f5669',
    campaignId: $('input[name="ea.campaign.id"]').val(),
    target: thermometerTarget,
    initialValue: thermometerStart,
    service: 'EaEmailAOTarget',
    targetDataColumn: 'participatingSupporters'
  });

// ---------- mobile link button ------------------------------------

  var $waypointContainer = $('#fixed-waypoint-container');
  var $waypointTarget = $('.en_right_wrapper').first(); // if no anchor then default to form
  // if we have a visible button then use the anchor to determine, when to switch
  if ($('#fixed-waypoint-container').hasClass('visible') && $('#fixed-waypoint-anchor').length > 0) {
    $waypointTarget = $('#fixed-waypoint-anchor');
  }
  var waypoint = new Waypoint({
    element: $waypointTarget[0],
    handler: function(direction) {
      if (direction === 'down') {
        $('#fixed-waypoint-container').removeClass('sticky');
      } else {
        $('#fixed-waypoint-container').addClass('sticky');
      }
    },
    offset: '110%'
  })

  $('#fixed-waypoint-container a.button').on('click', function(e) {
    var $toggle = $(this);
    var $target = $('a[name=action]');
    // if no #action anchor is set, try the .en_right_wrapper
    if ($target.length > 0) {
      $target = $('.en_right_wrapper').first();
    }
    if ($target.length > 0) {
      $('html,body').animate({scrollTop:$target.offset().top - 10}, 500);
    }
    e.preventDefault();
  });

// ---------- birthday toggle ---------------------------------------

  if (typeof moBirthdayToggleId !== 'undefined' && typeof moBirthdayFieldId !== 'undefined') {
    $('#' + moBirthdayToggleId).click(function(){
      if( $(this).attr('checked')=='checked' )
        {
          $('#' + moBirthdayFieldId).show();
        }
        else{
          $('#' + moBirthdayFieldId).hide();
        }
    });
  }
});
