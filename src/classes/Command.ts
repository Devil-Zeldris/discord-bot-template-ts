import { type Interaction } from "discord.js";

export interface ICommand {
    execute: (interaction: Interaction) => Promise<Interaction>;
    isOwner: (member_id: string) => boolean;
}

export type CommandOptions = {
    name: string;
    cmd: string[];
    isOwner: boolean;
}