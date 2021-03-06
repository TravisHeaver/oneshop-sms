declare global {
  interface PluginRegistry {
    OneShopSms?: OneShopSmsPlugin;
  }
}

export interface OneShopSmsPlugin {
  openMessenger(options: OpenMessengerOptions): Promise<void>;
}

export interface OpenMessengerOptions {
  number: string;
  body: string;
  attachments: string[];
}
