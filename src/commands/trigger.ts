export async function trigger(event: string) {
  console.log(`Triggering sandbox event: ${event}`);
  console.log(`Sending payload to connected listeners...`);
  // Real implementation would hit the Nijipe API to trigger an event
}
