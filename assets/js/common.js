//Datepicker
(function (window, document, $, undefined) {

  $(function () {
    $('.date-picker-default').datepicker({
      format: 'mm-dd-yyyy',
      autoclose: true,
      orientation: "bottom",
      templates: {
        leftArrow: '<i class="fa fa-angle-left"></i>',
        rightArrow: '<i class="fa fa-angle-right"></i>'
      }
    });


    $('.display-years').datepicker({
      autoclose: true,
      orientation: "bottom",
      templates: {
        leftArrow: '<i class="fa fa-angle-left"></i>',
        rightArrow: '<i class="fa fa-angle-right"></i>'
      }
    });

    $('.display-months').datepicker({
      format: 'mm-dd',
      autoclose: true,
      orientation: "bottom",
      templates: {
        leftArrow: '<i class="fa fa-angle-left"></i>',
        rightArrow: '<i class="fa fa-angle-right"></i>'
      }
    });


    $('#datepicker-inline').datepicker({
      todayHighlight: true,
      autoclose: true,
      orientation: "bottom",
      templates: {
        leftArrow: '<i class="fa fa-angle-left"></i>',
        rightArrow: '<i class="fa fa-angle-right"></i>'
      }
    });


    $('#datepicker-action').datepicker({
      todayBtn: "linked",
      clearBtn: true,
      autoclose: true,
      todayHighlight: true,
      orientation: "bottom",
      templates: {
        leftArrow: '<i class="fa fa-angle-left"></i>',
        rightArrow: '<i class="fa fa-angle-right"></i>'
      }
    });


    $('#datepicker-top-left').datepicker({
      orientation: "top left",
      todayHighlight: true,
      autoclose: true,
      templates: {
        leftArrow: '<i class="fa fa-angle-left"></i>',
        rightArrow: '<i class="fa fa-angle-right"></i>'
      }
    });

    $('#datepicker-top-right').datepicker({
      orientation: "top right",
      todayHighlight: true,
      autoclose: true,
      templates: {
        leftArrow: '<i class="fa fa-angle-left"></i>',
        rightArrow: '<i class="fa fa-angle-right"></i>'
      }
    });

    $('#datepicker-bottom-left').datepicker({
      orientation: "bottom left",
      todayHighlight: true,
      autoclose: true,
      templates: {
        leftArrow: '<i class="fa fa-angle-left"></i>',
        rightArrow: '<i class="fa fa-angle-right"></i>'
      }
    });

    $('#datepicker-bottom-right').datepicker({
      orientation: "bottom right",
      todayHighlight: true,
      autoclose: true,
      templates: {
        leftArrow: '<i class="fa fa-angle-left"></i>',
        rightArrow: '<i class="fa fa-angle-right"></i>'
      }
    });

    var checkin = $('.range-from').datepicker({
      onRender: function (date) {
        return date.valueOf() < now.valueOf() ? 'disabled' : '';
      }
    }).on('changeDate', function (ev) {
      if (ev.date.valueOf() > checkout.date.valueOf()) {
        var newDate = new Date(ev.date)
        newDate.setDate(newDate.getDate() + 1);
        checkout.setValue(newDate);
      }
      checkin.hide();

      $('.range-to')[0].focus();
    }).data('datepicker');
    var checkout = $('.range-to').datepicker({
      onRender: function (date) {
        return date.valueOf() <= checkin.date.valueOf() ? 'disabled' : '';
      }
    }).on('changeDate', function (ev) {
      checkout.hide();
    }).data('datepicker');

  });

})(window, document, window.jQuery);
//Sidenavbar - desktop & mobile
(function (window, document, $, undefined) {
  $(function () {
    window.addEventListener('load', function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);

    getSelectorFromElement: function getSelectorFromElement(element) {
      var selector = element.getAttribute('data-target');

      if (!selector || selector === '#') {
        selector = element.getAttribute('href') || '';
      }

      try {
        return document.querySelector(selector) ? selector : null;
      } catch (err) {
        return null;
      }
    }

    $('.mobile-toggle').on('click', function () {
      $('body').toggleClass('sidebar-toggled');
    });

    $(document).on('click', '.mega-menu.dropdown-menu', function (e) {
      e.stopPropagation();
    });

    $('.sidebar-toggle').on('click', function () {
      $('body').toggleClass('sidebar-mini');
      $('.app-navbar').toggleClass('expand');
    });

    $('.app-navbar').hover(function () {
      //if ($('body').hasClass('sidebar-mini')) {
      //   $('.navbar-header').toggleClass('expand');
      // }
    });

    $('.search').on('click', function () {
      $('.search-wrapper').fadeIn(200);
    });

    //Search Box Close 
    $('.close-btn').on('click', function () {
      $('.search-wrapper').fadeOut(200);
    });
  });
})(window, document, window.jQuery);