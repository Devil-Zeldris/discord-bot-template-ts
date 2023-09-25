import { type GuildMember } from 'discord.js';
import { CommandOptions } from 'src/index.js';

export class Command {
    public readonly names: string[];
    public readonly owner: boolean

    constructor(options: CommandOptions) {
        this.names = new Array<string>().concat(options.names);
        this.owner = options.owner
    }

    isOwner(member: GuildMember) { }
}