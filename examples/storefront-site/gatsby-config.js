require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-use-shopping-cart",
      options: {
        stripePublicKey: process.env.STRIPE_API_PUBLIC,
        successUrl: "https://stripe.com",
        cancelUrl: "https://twitter.com/Dayhaysoos",
      },
    },
  ],
};
