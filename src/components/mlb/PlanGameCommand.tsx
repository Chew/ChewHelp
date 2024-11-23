import {
    DiscordActionRow,
    DiscordAttachments,
    DiscordButton,
    DiscordEmbed,
    DiscordEmbedDescription,
    DiscordEmbedField,
    DiscordEmbedFields,
    DiscordMessage,
    DiscordMessages,
    DiscordTime
} from "@skyra/discord-components-react";
import React from "react";
import '../../index';
import {profiles} from "../../index";

export const PlanGameCommand = () => {
    return (
        <DiscordMessages>
            <DiscordMessage profile="mlb" author={profiles.mlb.author} avatar={profiles.mlb.avatar} bot={true} verified={true}>
                <DiscordEmbed embedTitle="Orioles @ Rangers" url="https://rory.cat" slot="embeds">
                    <DiscordEmbedDescription slot="description">
                        <b>Game Time</b>: <DiscordTime>Saturday, August 28th, 2021 at 7:05 PM</DiscordTime>
                    </DiscordEmbedDescription>
                    <DiscordEmbedFields slot="fields">
                        <DiscordEmbedField fieldTitle="Probable Pitchers" inline={true} inlineIndex={1}>
                            Orioles: Grayson Rodriguez<br />
                            Rangers: Dane Dunning
                        </DiscordEmbedField>
                        <DiscordEmbedField fieldTitle="Records" inline={true} inlineIndex={2}>
                            Orioles: 59 - 38<br />
                            Rangers: 46 - 51
                        </DiscordEmbedField>
                        <DiscordEmbedField fieldTitle="📺 Watch" inline={true} inlineIndex={3}>
                            Orioles - MASN 2<br />
                            Rangers - BSSW
                        </DiscordEmbedField>
                        <DiscordEmbedField fieldTitle="📻 Listen" inline={true} inlineIndex={1}>
                            Orioles - 98 Rock FM/HD2 97.9, WBAL NewsRadio AM/FM<br />
                            Rangers - 105.3 The Fan, KFLC 1270
                        </DiscordEmbedField>
                    </DiscordEmbedFields>
                </DiscordEmbed>
                <DiscordAttachments slot="components">
                    <DiscordActionRow>
                        <DiscordButton type="success">Start</DiscordButton>
                        <DiscordButton type="secondary">Refresh</DiscordButton>
                        <DiscordButton type="primary" emoji="https://cdn.discordapp.com/emojis/1263633065700233248.webp?size=96">
                            Rangers Lineup
                        </DiscordButton>
                        <DiscordButton type="primary" emoji="https://cdn.discordapp.com/emojis/1263624234425651311.webp?size=96">
                            Orioles Lineup
                        </DiscordButton>
                    </DiscordActionRow>
                </DiscordAttachments>
            </DiscordMessage>
        </DiscordMessages>
    )
}
