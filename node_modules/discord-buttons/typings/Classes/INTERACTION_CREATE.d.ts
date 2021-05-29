export = INTERACTION_CREATE;
declare class INTERACTION_CREATE {
    constructor(client: Client, data: object);
    client: Client;
    id: string;
    version: number;
    token: string;
    discordID: Snowflake;
    applicationID: Snowflake;
    guild: Guild;
    channel: Channel;
    clicker: {};
    message: Message;
    webhook: WebhookClient;
    replied: boolean;
    deferred: boolean;
    defer(ephemeral: boolean): Promise<void>;
    think(ephemeral: boolean): Promise<void>;
    get reply(): {
        send: (content: string, options?: object) => Promise<void>;
        fetch: () => Promise<string>;
        edit: (content: any, options?: object) => Promise<any>;
        delete: () => Promise<void>;
    };
}
import Message = require("./Message");
import WebhookClient = require("./WebhookClient");
import { Client, Snowflake, Guild, Channel } from "discord.js";
