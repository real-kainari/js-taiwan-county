const COUNTY = require('./county.js');

let county = new COUNTY();

let iso = county.toIso('Taipei');
console.log(iso);           // TPE

let chinese = county.toChinese('Taipei');
console.log(chinese);       // 臺北市

let chinese_short = county.toChineseShort('Taipei');
console.log(chinese_short); // 臺北

let english = county.toEnglish('臺北市');
console.log(english);       // Taipei City

let english_short = county.toEnglishShort('臺北');
console.log(english_short); //Taipei