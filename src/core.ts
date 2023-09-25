import { GatewayIntentBits, Partials } from "discord.js";
import { env } from "node:process";
import { DevilClient } from "./classes/Client";

const client = new DevilClient(
    {
        token: env.TOKEN,
        intents: [GatewayIntentBits.Guilds],
        partials: [Partials.GuildMember],
        failIfNotExists: false
    }
)

client.init().catch(error => console.log(`[LOGIN]`, `Error:`, error))