

export default class Item {

    static id = 0;
    private static readonly bold = 1;
    private static readonly italic = 2;
    private static readonly underlined = 4;

    public id: number;
    private _isbold: boolean;
    private _isitalic: boolean;
    private _isunderlined: boolean;
    private _serialized: number;
    public readonly word: string;

    constructor(word: string, isbold: boolean = false, isitalic: boolean = false, isunderlined: boolean = false) {
        this.word = word;
        this.isbold = isbold;
        this.isitalic = isitalic;
        this.isunderlined = isunderlined;
        this.id = Item.id;
        Item.id += 1;
    }


    public clone(retainId:boolean = true): Item {

        let clone:Item = new Item(this.word, this.isbold, this.isitalic, this.isunderlined);
        if (retainId) {
            // use the old id in the new object
            clone.id = this.id;
            // reset the static id
            Item.id -= 1;
        }
        return clone;
    }


    private serialize(): Item {
        // make _serialized consistent with the values of _isbold, _isitalic,
        // and _isunderlined
        let serialized = 0;
        if (this._isbold) {
            serialized += Item.bold;
        }
        if (this._isitalic) {
            serialized += Item.italic;
        }
        if (this._isunderlined) {
            serialized += Item.underlined;
        }
        this._serialized = serialized;
        return this;
    }


    private deserialize(): Item {
        // make the values of _isbold, _isitalic, and _isunderlined consistent
        // with the value of _serialized

        let serialized: number = this._serialized;
        if (serialized > Item.underlined + Item.italic + Item.bold) {
            throw new Error("number too big to deserialize");
        }
        if (serialized - Item.underlined > 0) {
            this._isunderlined = true;
            serialized -= Item.underlined;
        }
        if (serialized - Item.italic > 0) {
            this._isitalic = true;
            serialized -= Item.italic;
        }
        if (serialized - Item.bold > 0) {
            this._isbold = true;
            serialized -= Item.bold;
        }
        return this;
    }


    public toggle(str: string): Item {
        switch (str) {
            case "bold": {
                this.isbold = !this.isbold;
                return this;
            }
            case "italic": {
                this.isitalic = !this.isitalic;
                return this;
            }
            case "underlined": {
                this.isunderlined = !this.isunderlined;
                return this;
            }
            default: {
                throw new Error("Can't toggle unknown property.");
            }
        }
    }

    public get serialized(): number {
        return this._serialized;
    }
    public set serialized(serialized: number) {
        this._serialized = serialized;
        this.deserialize();
    }

    public get isbold(): boolean {
        return this._isbold;
    }
    public set isbold(isbold:boolean) {
        this._isbold = isbold;
        this.serialize();
    }

    public get isitalic(): boolean {
        return this._isitalic;
    }
    public set isitalic(isitalic:boolean) {
        this._isitalic = isitalic;
        this.serialize();
    }

    public get isunderlined(): boolean {
        return this._isunderlined;
    }
    public set isunderlined(isunderlined:boolean) {
        this._isunderlined = isunderlined;
        this.serialize();
    }

}
