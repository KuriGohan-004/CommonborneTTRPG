Hooks.once('init', async function() {
  console.log('Commonborne | Initializing');

  // Optional: actor setup
  CONFIG.Actor.documentClass = class CommonborneActor extends Actor {
    prepareData() {
      super.prepareData();
      const actorData = this.data;
      actorData.data.hp = actorData.data.hp || { value: 10, max: 10 };
    }
  };

  // Register a simple actor sheet
  class CommonborneActorSheet extends ActorSheet {
    static get defaultOptions() {
      return mergeObject(super.defaultOptions, {
        classes: ["commonborne", "sheet", "actor"],
        template: "systems/commonborne/templates/actor-sheet.html",
        width: 400,
        height: 300
      });
    }
  }

  Actors.registerSheet("commonborne", CommonborneActorSheet, { makeDefault: true });
});
