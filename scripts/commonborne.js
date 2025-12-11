Hooks.once('init', async function() {
    console.log('Commonborne | Initializing');

    // --------------------
    // Actor setup
    // --------------------
    CONFIG.Actor.documentClass = class CommonborneActor extends Actor {
        prepareData() {
            super.prepareData();
            const actorData = this.data;
            // Example: ensure HP structure exists
            actorData.data.hp = actorData.data.hp || { value: 10, max: 10 };
        }
    };

    // --------------------
    // Item setup
    // --------------------
    CONFIG.Item.documentClass = class CommonborneItem extends Item {
        prepareData() {
            super.prepareData();
            // Item logic can go here
        }
    };

    // --------------------
    // Register Actor Sheet
    // --------------------
    class CommonborneActorSheet extends ActorSheet {
        static get defaultOptions() {
            return mergeObject(super.defaultOptions, {
                classes: ["commonborne", "sheet", "actor"],
                template: "systems/commonborne/templates/actor-sheet.html",
                width: 400,
                height: 300
            });
        }

        getData(options) {
            const data = super.getData(options);
            return data;
        }
    }

    Actors.registerSheet("commonborne", CommonborneActorSheet, { makeDefault: true });
});
