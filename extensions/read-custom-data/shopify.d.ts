import '@shopify/ui-extension';

//@ts-ignore
declare module './src/Checkout.jsx' {
  const shopify: import('@shopify/ui-extensions/purchase.checkout.cart-line-item.render-after').Api;
  const globalThis: { shopify: typeof shopify };
}
