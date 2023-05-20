import { Client, Utils } from "./index";
import discord  from "discord.js";


declare module "discord-helper.js" {
    const Client: Client;
    const Utils: Utils
}

export declare class Client {
    constructor(name: string, client: discord.Client)
    threadCreateAsync: (threadName: string, channel: discord.Channel, message: discord.Message, guild: discord.Guild) => {
        threadName: string;
        channel: discord.ChannelFlags;
        message: discord.Message;
        guild: discord.Guild;
    };
    clientpingAsync: () => {

    };

    executeconsole: (type: string, text: string) => {
        type: string;
        text: string;
    }

    channelsend: (channel: discord.TextChannel|discord.ThreadChannel|discord.Snowflake, context: string, embed?: discord.MessageEmbed) => {
        channel: discord.TextChannel|discord.ThreadChannel|discord.Snowflake;
        context: string;
        embed?: discord.MessageEmbed | {};
    }


}

export declare class Utils {
    constructor(name: string);

    pagesAsync: (array: array, itemsPerPage: number, page?: number) => {
        array: Array;
        itemsPerPage: number;
        page?: number | 1;
    }

    discordWebhookAsync: (webhookurl: string, context: string, embed?: discord.MessageEmbed) => {
        webhookurl: string;
        context: string,
        embed?: discord.MessageEmbed | {};
    }

    versioninfoAsync: () => {

    };

    checkipportAsync: (ip: number, port: number) => {
        ip: number;
        port: number;
    };

    math: (num1: number, num2: number) => {
        num1: number;
        num2: number;
    }

    permCheckerAsync: (perm: any, member: discord.GuildMember, channel: discord.Channel) => {
        perm: any;
        member: discord.GuildMember;
        channel: discord.Channel;
    }
}