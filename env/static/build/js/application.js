$(function(){$("#user_form").submit(function(){if($("#credit-card").is(":visible")){var r=this,e={number:$("#credit_card_number").val(),expMonth:$("#expiry_month").val(),expYear:$("#expiry_year").val(),cvc:$("#cvv").val()};return Stripe.createToken(e,function(e,t){200===e?(console.log(e,t),$("#credit-card-errors").hide(),$("#last_4_digits").val(t.card.last4),$("#stripe_token").val(t.id),r.submit()):($("#stripe-error-message").text(t.error.message),$("#credit-card-errors").show(),$("#user_submit").attr("disabled",!1))}),!1}return!0}),$("#change-card a").click(function(){return $("#change-card").hide(),$("#credit-card").show(),$("#credit_card_number").focus(),!1})});