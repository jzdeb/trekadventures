export function registerSettings() {
    game.settings.register('trekadventures', 'partyMomentum', {
        name: 'Party Momentum',
        scope: 'world',
        config: false,
        default: 0,
        type: Number,
    });
    game.settings.register('trekadventures', 'gmMomentum', {
        name: 'GM Momentum',
        scope: 'world',
        config: false,
        default: 0,
        type: Number,
    });
    game.settings.register('trekadventures', 'maxMomentum', {
        name: 'Max Momentum',
        scope: 'world',
        config: false,
        default: 6,
        type: Number,
    });
    game.settings.register('trekadventures', 'gmMomentumShowToPlayers', {
        name: 'Show GM Momentum To Players',
        hint: "Shows the GM momentum window to everyone. Requires refresh on players side.",
        scope: 'world',
        config: true,
        default: false,
        type: Boolean,
    });
    game.settings.register('trekadventures', 'maxAppShowToPlayers', {
        name: 'Players Can Setup Max App',
        hint: "Allows players to settup the Party's MAX AP. Requires refresh on players side.",
        scope: 'world',
        config: true,
        default: false,
        type: Boolean,
    });
    game.settings.register('trekadventures', 'compendium-skills', {
        name: 'Skills Compendium',
        scope: 'world',
        config: true,
        default: "trekadventures.skills",
        type: String,
    });
}