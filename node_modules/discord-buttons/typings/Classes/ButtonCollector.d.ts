export = ButtonCollector;
declare class ButtonCollector extends Collector<any, any> {
    static key(button: object): string;
    constructor(message: Message, filter: any, options?: {});
    message: Message;
    users: Collection<any, any>;
    total: number;
    empty(): void;
    _handleChannelDeletion(channel: Channel): void;
    _handleGuildDeletion(guild: Guild): void;
    _handleMessageDeletion(message: Message): void;
}
import { Collector, Message, Channel, Guild } from "discord.js";
import Collection_1 = require("discord.js");
import Collection = Collection_1.Collection;
