export = exports;
declare class exports extends WebhookClient {
    editMessage(message: any, content: string, options?: object): Promise<any>;
    deleteMessage(message: any): Promise<void>;
    fetchMessage(message: any, cache?: boolean): Promise<any>;
}
import { WebhookClient } from "discord.js";
