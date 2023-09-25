import { ClientOptions } from "discord.js";
import { DevilClient } from "src/classes/Client";

export interface IDevilClient {
    init: () => Promise<DevilClient>
}

export interface DevilOptions extends ClientOptions {
    readonly token: string | undefined
}