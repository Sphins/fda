export default class fdaActorSheet extends ActorSheet {
    get template() {
        console.log(`fda | recuperation du fichier html ${this.actor.data.type}-sheet.`);

        return `system/fda/template/sheets/${this.actor.data.type}-sheet.html`;
    }
    getData() {
        const data = super.getData();

        console.log(data);

        return data;
    }
}