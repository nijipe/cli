export async function sandbox(action: string) {
  if (action === 'create-invoice') {
    console.log("Creating test invoice in sandbox...");
    console.log("Invoice ID: inv_test_" + Math.random().toString(36).substring(7));
    console.log("Amount: 1500 USD");
    console.log("Checkout URL: https://checkout.nijipe.com/test/...");
  } else {
    console.log(`Unknown sandbox action: ${action}`);
  }
}
