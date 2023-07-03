import { InputGeneric } from "./inputGeneric";
export class Checkbox extends InputGeneric<string>{
    override controlType="check";
}