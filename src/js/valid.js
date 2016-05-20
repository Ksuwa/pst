 
$(document).ready(function() {
  var form = $('#myForm');
  form.validate({
    rules: {
      phone: {
        required: true,
        minlength: 2
      },
      email: {
        required: true
      }
    },
    messages: {
        phone : {
          required : "Введите телефон",
          regex: /\+7\(\d{3}\) \d{3}-\d{4}/
        },
        email: {
          required: "Введите e-mail",
          email: "Введите корректный e-mail"
        }
    },
    errorClass:'has-error',
    highlight: function(element, errorClass, validClass) {
      $(element).closest('.need-valid').addClass(errorClass);
    },
    unhighlight: function(element, errorClass, validClass) {
      $(element).closest('.need-valid').removeClass(errorClass);
    }

  });
  $("#phone").mask("+7(999) 999-9999")
});