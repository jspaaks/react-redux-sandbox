"use strict";
var Item = (function () {
    function Item(word, isitalic, isbold, isunderlined) {
        if (isitalic === void 0) { isitalic = false; }
        if (isbold === void 0) { isbold = false; }
        if (isunderlined === void 0) { isunderlined = false; }
        this.word = word;
        this.isitalic = isitalic;
        this.isbold = isbold;
        this.isunderlined = isunderlined;
    }
    return Item;
}());
exports.Item = Item;
