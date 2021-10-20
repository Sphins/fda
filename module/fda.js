import fdaActorSheet from "./sheet/fda-actor-sheet.js";

Hooks: once("init",() => {
    console.log("fda | initialisation du systeme fda");

    Actors.unregisterSheet("core",ActorSheet);
    Actors.registerSheet("fda",fdaActorSheet, {makeDefault:true});
})