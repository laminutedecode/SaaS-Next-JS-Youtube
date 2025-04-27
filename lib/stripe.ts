import Stripe from "stripe"


export const stripe = new Stripe(process.env.STRIPE_KEY_SECRET as string, {
  typescript: true,
});


export const getStripeSession = async({priceId, domainUrl, customerId}:{priceId: string, domainUrl: string, customerId: string}) => {
  const session = await stripe.checkout.sessions.create({
    customer: customerId,
    mode: "subscription",
    billing_address_collection: "auto",
    line_items: [{price: priceId, quantity: 1}],
    payment_method_types: ["card"],
    customer_update: {
      address: "auto",
      name: "auto",
    },
    success_url: `${domainUrl}/dashboard/payment/success`,
    cancel_url: `${domainUrl}/dashboard/payment/cancel`,
  });
  return session.url as string
}