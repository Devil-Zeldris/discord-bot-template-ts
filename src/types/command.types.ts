import { SlashCommandBuilder } from "discord.js";

export type CommandOptions = {
    names: Array<string>;
    owner: boolean;
    builder?: SlashCommandBuilder;
}
