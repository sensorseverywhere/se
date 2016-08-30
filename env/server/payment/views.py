from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.conf import settings
import stripe

# Create your views here.
#stripe.api_key = "sk_test_5vk3CX0YjSCSipm9B0Bmuu7U"
stripe.api_key = settings.STRIPE_SECRET

@login_required
def single(request):
    publishKey = settings.STRIPE_PUBLISHABLE
    customer_id = request.user.userstripe.stripe_id
    if request.method == 'POST':
        token = request.POST['stripeToken']
        # Create the charge on Stripe's servers - this will charge the user's card
        try:
          customer = stripe.Customer.retrieve(customer_id)
          customer.cards.create(card=token)
          charge = stripe.Charge.create(
              amount=1599, # amount in cents, again
              currency="aud",
              customer=customer,
              description="Example charge"
          )
        except stripe.error.CardError as e:
          # The card has been declined
          pass
    context = {'publishKey': publishKey}
    template = 'payments/single.html'
    return render(request, template, context)



@login_required
def subscription(request):
    publishKey = settings.STRIPE_PUBLISHABLE
    if request.method == 'POST':
        token = request.POST['stripeToken']
        try:
          charge = stripe.Charge.create(
              amount=1599, # amount in cents, again
              currency="aud",
              source=token,
              description="Example charge"
          )
        except stripe.error.CardError as e:
          # The card has been declined
          pass
        context = {'publishKey': publishKey}

        #token = request.
    context = {}
    template = 'payments/subscription.html'
    return render(request, template, context)
