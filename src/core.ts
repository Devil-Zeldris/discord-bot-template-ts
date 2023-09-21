import { GatewayIntentBits, Partials } from "discord.js";
import { env } from "node:process";
import { DevilClient } from "./classes/Client";

const { Guilds } = GatewayIntentBits
const { GuildMember } = Partials

const client = new DevilClient({ token: env.TOKEN, intents: [Guilds], partials: [GuildMember], failIfNotExists: false })

client.init().catch(error => console.log(`[LOGIN]`, `Error:`, error))