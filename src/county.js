class TaiwanCounty {
    constructor() {
        this.co = require('./county.json');
    }

    getIndex(name) {
        for (var i = 0; i < this.co.length; i++) {
            var reg = new RegExp(`${this.co[i].iso}|${this.co[i].chinese}|${this.co[i].chinese_short}|${this.co[i].english}|${this.co[i].english_short}`);

            if (reg.test(name))
                return i;
        }

        return -1;
    }

    convert(name, key) {
        let index = this.getIndex(name);

        if (index != -1)
            return this.co[index][key];
        else
            return '';
    }

    toIso(name) {
        return this.convert(name, 'iso');
    }

    toChinese(name) {
        return this.convert(name, 'chinese');
    }

    toChineseShort(name) {
        return this.convert(name, 'chinese_short');
    }

    toEnglish(name) {
        return this.convert(name, 'english');
    }

    toEnglishShort(name) {
        return this.convert(name, 'english_short');
    }
}

module.exports = TaiwanCounty;