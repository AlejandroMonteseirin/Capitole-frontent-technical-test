import { HeroeModel } from "./heroeModel";

//Enum with edition or new
export enum formAction {
    new = 0,
    edition = 1
}

export interface editionData {
    hero: HeroeModel;
    formAction: formAction;
}
