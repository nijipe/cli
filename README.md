# @nijipe/cli

**Command-line tools for Nijipe developers.**

Nijipe is a non-custodial Bitcoin and Lightning payment infrastructure platform for developers and merchants.

## Installation

```bash
npm install -g @nijipe/cli
```

Or run via npx:

```bash
npx @nijipe/cli init
```

## Commands

- `nijipe login`: Authenticate with your Nijipe account
- `nijipe init`: Generate boilerplate code and configure environment variables
- `nijipe listen`: Forward webhook events to your local machine
- `nijipe trigger <event>`: Trigger a sandbox webhook event
- `nijipe sandbox create-invoice`: Create a test invoice

## Local Webhook Testing

Forward webhooks to your local development server:

```bash
nijipe listen --forward-to localhost:3000/api/nijipe/webhook
```

## Links

- [Website](https://nijipe.com)
- [Documentation](https://nijipe.com/docs)
- [GitHub Organization](https://github.com/nijipe)

## License
MIT
