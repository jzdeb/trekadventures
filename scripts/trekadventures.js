/*
The Star Trek Adventures game system for Foundry Virtual Tbale Top
*/

//Import Configuration
import TrekAdventures from "../module/config.js";

//Import Modules
import * as applications from "../module/applications/_module.js";


//Register sheet application classes
Actors.unregisterSheet("core", ActorSheet);
Actors.registerSheet("trekadventures", applications.actor.ActorSheetSTACharacter, {
    types:["character"],
    makeDefault: true,
    label: "TrekAdventures.SheetClassCharacter"
});