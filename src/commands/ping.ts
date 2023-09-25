import { CommandInteraction, InteractionResponse, SlashCommandBuilder } from "discord.js";
import { Command, ICommand } from "src";

export class PingCommand extends Command implements ICommand<CommandInteraction> {
    constructor() {
        super(
            {
                names: ['ping'],
                builder: new SlashCommandBuilder()
                    .setName('ping')
                    .setDescription('Pinging the bot'),
                owner: false
            }
        )
    }

    async execute(interaction: CommandInteraction): Promise<InteractionResponse> {
        return interaction.reply({ content: `Pong!` })
    }
}