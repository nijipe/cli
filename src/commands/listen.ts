export async function listen(options: { forwardTo?: string }) {
  const url = options.forwardTo || 'localhost:3000/api/nijipe/webhook';
  console.log(`Listening for Nijipe webhooks...`);
  console.log(`Forwarding events to: ${url}`);
  console.log(`(Simulated) Webhook server started.`);
  // Real implementation would connect to a WebSocket or SSE stream from Nijipe
}
