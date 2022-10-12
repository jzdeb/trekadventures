import { trekadventures } from "../helpers/config.mjs";
import { onManageActiveEffect, prepareActiveEffectCategories } from "../helpers/effects.mjs";
import { ACActorSheet } from "./actor-sheet.mjs";

/**
 * Extend the basic ActorSheet with some very simple modifications
 * @extends {ACActorSheet}
 */
export class ACNPCSheet extends ACActorSheet {

    /** @override */
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["trekadventures", "sheet", "actor"],
            template: "systems/trekadventures/templates/actor/npc-sheet.html",
            width: 550,
            height: 780,
            tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "abilities" }]
        });
    }
}
