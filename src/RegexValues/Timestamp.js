const { checkRegex } = require('rulr');

const YEAR = "(\\d{4})";
const MONTH = "((0[1-9])|(1[012]))";
const DAY = "((0[1-9])|([12]\\d)|(3[01]))";
const P_HOUR = "(([01]\\d)|(2[0123]))";
const N_HOUR = "((0[1-9])|(1\\d)|(2[0123]))";
const MINUTE = "([012345]\\d)";
const SECOND = "([012345]\\d)";
const FRACTION = "(\\d+)";
const DATE_SEPARATOR = "-";
const TIME_SEPARATOR = ":";
const BASIC_SECONDS = `(${SECOND}${FRACTION}?)`;
const BASIC_DATE = `(${YEAR}${MONTH}${DAY})`;
const BASIC_TIME = `(${P_HOUR}(${MINUTE}${BASIC_SECONDS}?)?)`;
const BASIC_P_ZONE = `(\\+${P_HOUR}${MINUTE}?)`;
const BASIC_N_ZONE = `(\\-${N_HOUR}${MINUTE}?)`;
const BASIC_ZONE =  `(Z|${BASIC_P_ZONE}|${BASIC_N_ZONE})`;
const BASIC = `(${BASIC_DATE}(T${BASIC_TIME}${BASIC_ZONE})?)`;
const EXT_MONTH = `(${DATE_SEPARATOR}${MONTH})`;
const EXT_DAY = `(${DATE_SEPARATOR}${DAY})`;
const EXT_MINUTE = `(${TIME_SEPARATOR}${MINUTE})`;
const EXT_SECOND = `(${TIME_SEPARATOR}${SECOND})`;
const EXT_FRACTION = `(\\.${FRACTION})`;
const EXT_SECONDS = `(${EXT_SECOND}${EXT_FRACTION}?)`;
const EXT_DATE = `(${YEAR}${EXT_MONTH}${EXT_DAY})`;
const EXT_TIME = `(${P_HOUR}(${EXT_MINUTE}${EXT_SECONDS}?)?)`;
const EXT_P_ZONE = `(\\+${P_HOUR}${EXT_MINUTE}?)`;
const EXT_N_ZONE = `(\\-${N_HOUR}${EXT_MINUTE}?)`;
const EXT_ZONE = `(Z|${EXT_P_ZONE}|${EXT_N_ZONE})`;
const EXT = `(${EXT_DATE}(T${EXT_TIME}${EXT_ZONE})?)`;
const TIMESTAMP = new RegExp(`^(${EXT}|${BASIC})$`);

module.exports = checkRegex(TIMESTAMP);
