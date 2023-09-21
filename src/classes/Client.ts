import { Client, ClientOptions } from "discord.js";

export interface IDevilClient {
    init: () => Promise<DevilClient>
}

export interface DevilOptions extends ClientOptions {
    readonly token: string | undefined
}

export class DevilClient extends Client implements IDevilClient {

    #token: string | undefined;

    constructor(options: DevilOptions) {
        super(options)
        this.#token = options.token
    }

    async init(): Promise<DevilClient> {
        if (!this.#token) throw new Error(`[LOGIN] No token acquired in Client params`);

        const login = await this.login(this.#token);

        if (!login) throw new Error(`[LOGIN] Can't logging into Discord`);


        return this;
    }
}