'use strict';

var utils = {
    animationEnd: function() {
        return 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    },
    validateEmail: function(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
};
  
$(document).ready(function(){

    $('.cb-send').fadeOut();

    $('.form-input > input, textarea').on("focusin", function(){
        var $parent = $(this).parent();
        var $label = $parent.children('label');
        $parent.addClass('square-animate');
        $label.addClass('label-animate');
    });
  
    $('.form-input > input, textarea').on("focusout", function(){
      var $self = $(this);
      var $parent = $self.parent();
      var $label = $parent.children('label');
      $parent.removeClass('square-animate');
      if ($self.val() === '') {
        $label.removeClass('label-animate');
        $parent.removeClass('square-error');
      } else if ($self.is('#email')) {
        if (!utils.validateEmail($self.val())) {
          $parent.addClass('square-error');
        } else {
          $parent.removeClass('square-error');
        }
      }
      else{
        $parent.removeClass('square-error');
      }
    });


    $('#contact_submit').click(function(event) {
        event.preventDefault();
        var name = '';
        var mobile = '';
        var phone = '';
        var adress = '';
        var email = '';
        var comment = '';

        name = $('#name').val();
        mobile = $('#mobile').val();
        phone = $('#phone').val();
        adress = $('#adress').val();
        email = $('#email').val();
        comment = $('#comment').val();

        if (name !== '' && mobile !== '' && phone !== '' && adress !== '' && email !== '' && comment !== '') {
        var data = {
            'name': name,
            'email': email,
            'mobile': mobile,
            'phone': phone,
            'adress': adress,
            'comment': comment
        };
        $.ajax({
            type: 'POST',
            url: 'vendor/email/contacto.php',
            data: data,
            success: function () {
            var cbsend = $('.cb-send');
            cbsend.addClass('square-success').fadeIn();
            cbsend.children().html('<span>Gracias por enviarnos tu consulta</span>');
            },
            error: function () {
            var cbsend = $('.cb-send');
            cbsend.addClass('square-error').fadeIn();
            cbsend.children().html('<span>Error: Mensaje no enviado</span>');
            }
        });
        } else {
        if (name === '') {
            $('#name').parent().addClass('square-error');
        }
        if (mobile === '') {
            $('#mobile').parent().addClass('square-error');
        }
        if (phone === '') {
            $('#phone').parent().addClass('square-error');
        }
        if (adress === '') {
            $('#adress').parent().addClass('square-error');
        }
        if (!utils.validateEmail(email)) {
            $('#email').parent().addClass('square-error');
        }
        if (comment === '') {
            $('#comment').parent().addClass('square-error');
        }
        }
    });
  }
);