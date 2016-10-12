export class Item {

    static id = 0;
    private static readonly bold = 1;
    private static readonly italic = 2;
    private static readonly underlined = 4;

    public id: number;
    private isbold: boolean;
    private isitalic: boolean;
    private isunderlined: boolean;
    private serialized: number;
    public readonly word: string;


    constructor(word: string, isitalic: boolean = false, isbold: boolean = false, isunderlined: boolean = false) {
        this.word = word;
        this.isitalic = isitalic;
        this.isbold = isbold;
        this.isunderlined = isunderlined;
        this.id = Item.id;
        Item.id += 1;
        this.serialize();
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


    private serialize(): Item {
        let serialized = 0;
        if (this.isbold) {
            serialized += Item.bold;
        }
        if (this.isitalic) {
            serialized += Item.italic;
        }
        if (this.isunderlined) {
            serialized += Item.underlined;
        }
        this.serialized = serialized;
        return this;
    }


    public toggle(str: string): Item {
        switch (str) {
            case "bold": {
                this.isbold = !this.isbold;
                this.serialize();
                return this;
            }
            case "italic": {
                this.isitalic = !this.isitalic;
                this.serialize();
                return this;
            }
            case "underlined": {
                this.isunderlined = !this.isunderlined;
                this.serialize();
                return this;
            }
            default: {
                throw new Error("Can't toggle unknown property.");
            }
        }
    }

}
