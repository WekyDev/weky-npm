/// <reference types="discord.js" />
export = Message;
declare const Message_base: typeof import("discord.js").Message;
declare class Message extends Message_base {
    createButtonCollector(filter: any, options?: {}): ButtonCollector;
    awaitButtons(filter: any, options?: {}): Promise<Array>;
}
import ButtonCollector = require("./ButtonCollector");
