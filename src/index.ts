#!/usr/bin/env node

import { Command } from 'commander';
import { login } from './commands/login';
import { init } from './commands/init';
import { listen } from './commands/listen';
import { trigger } from './commands/trigger';
import { sandbox } from './commands/sandbox';

const program = new Command();

program
  .name('nijipe')
  .description('Command-line tools for Nijipe developers.')
  .version('1.0.0');

program
  .command('login')
  .description('Authenticate with your Nijipe account')
  .action(login);

program
  .command('init')
  .description('Generate boilerplate code and configure environment variables')
  .action(init);

program
  .command('listen')
  .description('Forward webhook events to your local machine')
  .option('-f, --forward-to <url>', 'URL to forward webhooks to')
  .action(listen);

program
  .command('trigger')
  .description('Trigger a sandbox webhook event')
  .argument('<event>', 'The event type to trigger (e.g. invoice.confirmed)')
  .action(trigger);

program
  .command('sandbox')
  .description('Sandbox tools (e.g. create-invoice)')
  .argument('<action>', 'Action to perform')
  .action(sandbox);

program.parse();
