import {setConfig} from "@skyra/discord-components-react";

export const profiles = {
    mlb: {
        author: 'MLB Game Feed',
        avatar: 'https://cdn.discordapp.com/avatars/987144502374436895/ed55321dd8b8d693012156efa135db58.png?size=2048',
        roleColor: '#f9d61b',
        bot: true,
        verified: true,
    },
    chew: {
        author: 'olivia // chew',
        avatar: 'https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/avatwo.png',
        roleColor: '#e7a1e7'
    }
}

export const emojis = {
    diamond: {
        name: 'diamond',
        url: 'https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/diamond.png'
    },
    dragonite: {
        name: 'dragonite',
        url: 'https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/dragonite.png'
    },
    sapphire: {
        name: 'sapphire',
        url: 'https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/sapphire.png'
    }
}

setConfig({
    profiles,
    emojis
});
