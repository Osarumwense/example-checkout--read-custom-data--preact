// [START read-custom-data.imports]
import '@shopify/ui-extensions/preact';
import {render} from "preact";
import {useAppMetafields} from "@shopify/ui-extensions/checkout/preact"
// [END read-custom-data.imports]

// 1. Export the extension
export default function() {
  render(<Extension />, document.body)
}

function Extension() {
  // Get the product ID from the cart line item
  const {merchandise: {product: {id: productId}}} = shopify.lines.value[0];
  
  // [START read-custom-data.use-metafields]
  // Use the merchant-defined metafield for watering instructions and map it to a cart line
  const [wateringMetafield] = useAppMetafields( {
    type: "product",
    namespace: "instructions",
    key: "watering",
  }).filter(
    (entry) =>  productId.endsWith(entry.target.id)
  );
  // [END read-custom-data.use-metafields]

  // Render the watering instructions if applicable
  if (wateringMetafield?.metafield?.value) {
    return (
        <s-text>
          {wateringMetafield?.metafield?.value}
        </s-text>
      );
  }
  
  return null;
}