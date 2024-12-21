import { Row } from "../util/Row.js";

export class WelcomeCenter{
    openingTag = "<div class='row'>";
    closingTag = "</div>";
    innerHTML = "";

    addRow(row = new Row() ){
        this.innerHTML += row;
    }

    toString(){
        return `${this.openingTag} ${this.innerHTML} ${this.closingTag}`
    }

    

}