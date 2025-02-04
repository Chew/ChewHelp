import {
    DiscordCommand,
    DiscordEmbed,
    DiscordEmbedDescription,
    DiscordEmbedField,
    DiscordEmbedFields,
    DiscordMention,
    DiscordMessage,
    DiscordMessages
} from "@skyra/discord-components-react";
import React from "react";

export const HelpCommand = () => {
    const inviteUrl = "https://discord.com/api/oauth2/authorize?client_id=604362556668248095&permissions=939879492&scope=bot%20applications.commands";
    const baseUrl = "/bots/discord/chewbotcca";

    return (
        <DiscordMessages>
            <DiscordMessage profile="chewbotcca" bot={true} verified={true}>
                <DiscordCommand slot="reply" profile="chew" command="help" compactMode={true}></DiscordCommand>
                <DiscordEmbed embedTitle="Welcome to the Chewbotcca Discord Bot" slot="embeds" color="#43B582">
                    <DiscordEmbedDescription slot="description">
                        Chewbotcca is a multi-purpose, semi-functional, almost always online, Discord bot!
                        <br /><br />
                        This bot is powered by <a href="https://www.skysilk.com/ref/4PRQpuQraD" target="_blank">SkySilk Cloud Services</a>!
                    </DiscordEmbedDescription>
                    <DiscordEmbedFields slot="fields">
                        <DiscordEmbedField fieldTitle="Commands" inline={true} inlineIndex={1}>
                            You can find all my commands <a href={baseUrl + "/commands"}>here</a>.
                        </DiscordEmbedField>
                        <DiscordEmbedField fieldTitle="Invite me!" inline={true} inlineIndex={2}>
                            You can invite me to your server with <a href={inviteUrl}>this link</a>.
                        </DiscordEmbedField>
                        <DiscordEmbedField fieldTitle="Help Server" inline={true} inlineIndex={3}>
                            Click <a href="https://discord.gg/UjxQ3Bh" target="_blank">me</a> to join the help server.
                        </DiscordEmbedField>
                        <DiscordEmbedField fieldTitle="Privacy Policy" inline={true} inlineIndex={1}>
                            <a href={baseUrl + "/privacy"}>View Privacy Policy</a>
                        </DiscordEmbedField>
                        <DiscordEmbedField fieldTitle="More Bot Stats" inline={true} inlineIndex={2}>
                            Run <a href={baseUrl + "/commands/stats"}><DiscordMention type="slash">stats</DiscordMention></a> to see more stats!
                    </DiscordEmbedField>
                    </DiscordEmbedFields>
                </DiscordEmbed>
            </DiscordMessage>
        </DiscordMessages>
    )
}
