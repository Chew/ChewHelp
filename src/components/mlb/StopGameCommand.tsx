import {
    DiscordCommand,
    DiscordEmbed,
    DiscordEmbedDescription,
    DiscordEmbedFooter,
    DiscordMessage,
    DiscordMessages,
    DiscordTime
} from "@skyra/discord-components-react";
import React from "react";

export const StopGameCommand = () => {
    return (
        <DiscordMessages>
            <DiscordMessage profile="mlb" bot={true} verified={true}>
                <DiscordCommand slot="reply" profile="chew" command="stopgame"></DiscordCommand>
                <DiscordEmbed embedTitle="Stopped Game Cubs @ Marlins" slot="embeds" color="#d23d33">
                    <DiscordEmbedDescription slot="description">
                        Game Date: <DiscordTime>August 24, 2024</DiscordTime>
                    </DiscordEmbedDescription>
                    <DiscordEmbedFooter slot="footer">
                        Game PK: 746022
                    </DiscordEmbedFooter>
                </DiscordEmbed>
            </DiscordMessage>
        </DiscordMessages>
    )
}
