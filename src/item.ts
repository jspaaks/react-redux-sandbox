export class Item {

    static id = 0;

    public id: number;
    public isbold: boolean;
    public isitalic: boolean;
    public isunderlined: boolean;
    public word: string;


    constructor(word: string, isitalic: boolean = false, isbold: boolean = false, isunderlined: boolean = false) {
        this.word = word;
        this.isitalic = isitalic;
        this.isbold = isbold;
        this.isunderlined = isunderlined;
        this.id = Item.id;
        Item.id += 1;
    }


    public clone(retainId:boolean = true): Item {

        let clone:Item = new Item(this.word, this.isitalic, this.isbold, this.isunderlined);
        if (retainId) {
            // use the old id in the new object
            clone.id = this.id;
            // reset the static id
            Item.id -= 1;
        }
        return clone;
    }
}
