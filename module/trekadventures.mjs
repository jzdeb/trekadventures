// Import document classes.
import { ACActor } from "./documents/actor.mjs";
import { ACItem } from "./documents/item.mjs";
// Import sheet classes.
import { ACActorSheet } from "./sheets/actor-sheet.mjs";
import { ACNPCSheet } from "./sheets/npc-sheet.mjs";
import { ACVehicleSheet } from "./sheets/vehicle-sheet.mjs";
import { ACItemSheet } from "./sheets/item-sheet.mjs";
// Import helper/utility classes and constants.
import { trekadventures } from "./helpers/config.mjs";
import { preloadHandlebarsTemplates } from "./helpers/templates.mjs";
import { registerHandlebarsHelpers } from "./helpers/handlebars.mjs"
//Import Roll2D20
import { Roller2D20 } from "./roller/trekadventures-roller.mjs"
import { Dialog2d20 } from './roller/dialog2d20.js'
import { DialogD6 } from './roller/dialogD6.js'
import DieACChallenge from './roller/challengeDie.js'
//Settings
import { registerSettings } from './settings.js';
//Momentum
import { MomentumTracker } from './app/momentum-tracker.mjs'

/* -------------------------------------------- */
/*  Handlebars Helpers                          */
/* -------------------------------------------- */
registerHandlebarsHelpers();


Hooks.once('init', async function () {
    // Add utility classes to the global game object so that they're more easily
    // accessible in global contexts.

    game.trekadventures = {
        ACActor,
        ACItem,
        Roller2D20,
        Dialog2d20,
        DialogD6
    };

    // Add custom constants for configuration.
    CONFIG.trekadventures = trekadventures;

    /**
   * Set an initiative formula for the system
   * @type {String}
   */
    CONFIG.Combat.initiative = {
        formula: "1",
        decimals: 0
    };

    // Define custom Document classes
    CONFIG.Actor.documentClass = ACActor;
    CONFIG.Item.documentClass = ACItem;
    CONFIG.Dice.terms["s"] = DieACChallenge;

    // Register sheet application classes
    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("trekadventures", ACActorSheet, { types: ["character"], makeDefault: true });
    Actors.registerSheet("trekadventures", ACNPCSheet, { types: ["npc"], makeDefault: true });
    Actors.registerSheet("trekadventures", ACVehicleSheet, { types: ["vehicle"], makeDefault: true });
    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("trekadventures", ACItemSheet, { makeDefault: true });

    // Register custom system settings
    registerSettings();

    return preloadHandlebarsTemplates();
});


Hooks.on('renderChatMessage', (message, html, data) => {
    let rrlBtn = html.find('.reroll-button');
    if (rrlBtn.length > 0) {
        rrlBtn[0].setAttribute('data-messageId', message.id);
        rrlBtn.click((el) => {
            //let selectedDiceForReroll = $(el.currentTarget).parent().find('.dice-selected');
            let selectedDiceForReroll = html.find('.dice-selected');
            let rerollIndex = [];
            for (let d of selectedDiceForReroll) {
                rerollIndex.push($(d).data('index'));
            }
            if (!rerollIndex.length) {
                ui.notifications.notify('Select Dice you want to Reroll');
            }
            else {
                let trekadventuresRoll = message.flags.trekadventuresroll;
                if (trekadventuresRoll.diceFace == "d20") {
                    Roller2D20.rerollD20({
                        rollname: trekadventuresRoll.rollname,
                        rerollIndexes: rerollIndex,
                        successTreshold: trekadventuresRoll.successTreshold,
                        critTreshold: trekadventuresRoll.critTreshold,
                        complicationTreshold: trekadventuresRoll.complicationTreshold,
                        dicesRolled: trekadventuresRoll.dicesRolled
                    });
                } else if (trekadventuresRoll.diceFace == "d6") {
                    Roller2D20.rerollD6({
                        rollname: trekadventuresRoll.rollname,
                        rerollIndexes: rerollIndex,
                        dicesRolled: trekadventuresRoll.dicesRolled,
                        itemId: message.flags.itemId,
                        actorId: message.flags.actorId,
                    });
                } else {
                    ui.notifications.notify('No dice face reckognized');
                }

            }
        })
    }
    html.find('.dice-icon').click((el) => {
        //if ($(el.currentTarget).hasClass('reroll'))
        //return;
        if ($(el.currentTarget).hasClass('dice-selected')) {
            $(el.currentTarget).removeClass('dice-selected');
        } else {
            $(el.currentTarget).addClass('dice-selected')
        }
    });
    let addBtn = html.find('.add-button');
    if (addBtn.length > 0) {
        addBtn[0].setAttribute('data-messageId', message.id);
        addBtn.click((ev) => {
            let trekadventuresRoll = message.flags.trekadventuresroll;
            let itemId = message.flags.itemId;
            let actorId = message.flags.actorId;
            game.trekadventures.DialogD6.createDialog({ rollname: trekadventuresRoll.rollname, diceNum: 1, trekadventuresRoll: trekadventuresRoll, itemId: itemId, actorId: actorId })
        });
    }

});



/* -------------------------------------------- */
/*  DICE SO NICE                                */
/* -------------------------------------------- */

Hooks.once("diceSoNiceReady", (dice3d) => {
    dice3d.addSystem(
        { id: "trekadventures", name: "Achtung Cthulhu 2d20" },
        true
    );

    dice3d.addColorset(
        {
            name: "trekadventures",
            description: "Achtung Cthulhu 2d20",
            category: "Colors",
            foreground: "#000000",
            background: "#000000",
            outline: "#000000",
            texture: "none",
        }
    );

    dice3d.addDicePreset({
        type: "ds",
        labels: [
            "systems/trekadventures/assets/dice/d1.webp",
            "systems/trekadventures/assets/dice/d2.webp",
            "systems/trekadventures/assets/dice/d3.webp",
            "systems/trekadventures/assets/dice/d4.webp",
            "systems/trekadventures/assets/dice/d5.webp",
            "systems/trekadventures/assets/dice/d6.webp",
        ],
        system: "trekadventures",
        colorset: "trekadventures"
    });
});