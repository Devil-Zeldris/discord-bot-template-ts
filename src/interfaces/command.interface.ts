import { CommandInteraction, InteractionResponse } from "discord.js";

export interface ICommand<T extends CommandInteraction> {
    names: string[];
    owner: boolean;
    execute: (interaction: T) => Promise<InteractionResponse>
}