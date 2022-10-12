/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function () {
  return loadTemplates([
    "systems/trekadventures/templates/actor/parts/actor-header.html",
    "systems/trekadventures/templates/actor/parts/actor-abilities.html",
    "systems/trekadventures/templates/actor/parts/actor-talents.html",
    "systems/trekadventures/templates/actor/parts/actor-spells.html",
    "systems/trekadventures/templates/actor/parts/actor-weapons.html",
    "systems/trekadventures/templates/actor/parts/actor-armor.html",
    "systems/trekadventures/templates/actor/parts/actor-skillkit.html",
    "systems/trekadventures/templates/actor/parts/actor-equipment.html",
    "systems/trekadventures/templates/actor/parts/actor-encumbrance.html",
    "systems/trekadventures/templates/actor/parts/actor-effects.html",
    "systems/trekadventures/templates/actor/parts/npc-abilities.html",
    "systems/trekadventures/templates/actor/parts/npc-header.html",
    "systems/trekadventures/templates/actor/parts/vehicle-header.html",
    "systems/trekadventures/templates/actor/parts/vehicle-abilities.html",
    "systems/trekadventures/templates/item/parts/item-header.html",
    "systems/trekadventures/templates/item/parts/item-effects.html",
    "systems/trekadventures/templates/actor/parts/simple-expandable-item.html"
  ]);
};
