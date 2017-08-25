import { getProfileObj } from 'Util/common'
import i18nFactory from 'Util/i18n'

const lang = {
    sv: {
        'New Year\'s Day': 'Nyårsdagen',
        'Epiphany': 'Trettondedag Jul',
        'Good Friday': 'Långfredagen',
        'Easter Sunday': 'påskdagen',
        'Easter Monday': 'Annandag påsk',
        'International Workers\' Day': 'Första Maj',
        'Ascension Day': 'Kristi himmelsfärds dag',
        'Pentecost': 'pingstdagen',
        'National Day of Sweden': 'Sveriges nationaldag',
        'Midsummer\'s Day': 'Midsommardagen',
        'All Saints\' Day': 'Alla helgons dag',
        'Christmas Eve': 'julafton',
        'Christmas Day': 'Juldagen',
        'Second Day of Christmas': 'Annandag Jul',
        'New Year\'s Eve': 'nyårsafton'
    },
    da: {
        'New Year\'s Day': 'Nytårsdag',
        'Maundy Thursday': 'Skærtorsdag',
        'Good Friday': 'Langfredag',
        'Easter Sunday': 'Påskedag',
        'Easter Monday': 'Anden påskedag',
        'General Prayer Day': 'Store bededag',
        'Ascension Day': 'Kristi Himmelfartsdag',
        'Pentecost': 'Pinsedag',
        'Christmas Day': 'Juledag',
        'Second Day of Christmas': 'Anden juledag',
        'New Year\'s Eve': 'Nytårsaften'
    },
    no: {
        'New Year\'s Day': 'Første nyttårsdag',
        'Maundy Thursday': 'Skjærtorsdag',
        'Good Friday': 'Langfredag',
        'Easter Sunday': 'Første påskedag',
        'Easter Monday': 'Andre påskedag',
        'International Workers\' Day': 'Første mai',
        'Constitution Day': 'Syttende mai or Grunnlovsdagen',
        'Ascension Day': 'Kristi himmelfartsdag',
        'Pentecost': 'Første pinsedag',
        'Whit Monday': 'Andre pinsedag',
        'Christmas Day': 'Første juledag',
        'Second Day of Christmas': 'Anden juledag',
        'New Year\'s Eve': 'Nyttårsaftan'
    }
}

const countryLanguage = {
    'se': 'sv',
    'dk': 'da',
    'no': 'no'
}

//List of easters in past and future. It's complicated to calculate Easters
const easters = {
    /*'1900': ['15', '04'],
    '1901': ['07', '04'],
    '1902': ['30', '03'],
    '1903': ['12', '04'],
    '1904': ['03', '04'],
    '1905': ['23', '04'],
    '1906': ['15', '04'],
    '1907': ['31', '03'],
    '1908': ['19', '04'],
    '1909': ['11', '04'],
    '1910': ['27', '03'],
    '1911': ['16', '04'],
    '1912': ['07', '04'],
    '1913': ['23', '03'],
    '1914': ['12', '04'],
    '1915': ['04', '04'],
    '1916': ['23', '04'],
    '1917': ['08', '04'],
    '1918': ['31', '03'],
    '1919': ['20', '04'],
    '1920': ['04', '04'],
    '1921': ['27', '03'],
    '1922': ['16', '04'],
    '1923': ['01', '04'],
    '1924': ['20', '04'],
    '1925': ['12', '04'],
    '1926': ['04', '04'],
    '1927': ['17', '04'],
    '1928': ['08', '04'],
    '1929': ['31', '03'],
    '1930': ['20', '04'],
    '1931': ['05', '04'],
    '1932': ['27', '03'],
    '1933': ['16', '04'],
    '1934': ['01', '04'],
    '1935': ['21', '04'],
    '1936': ['12', '04'],
    '1937': ['28', '03'],
    '1938': ['17', '04'],
    '1939': ['09', '04'],
    '1940': ['24', '03'],
    '1941': ['13', '04'],
    '1942': ['05', '04'],
    '1943': ['25', '04'],
    '1944': ['09', '04'],
    '1945': ['01', '04'],
    '1946': ['21', '04'],
    '1947': ['06', '04'],
    '1948': ['28', '03'],
    '1949': ['17', '04'],
    '1950': ['09', '04'],
    '1951': ['25', '03'],
    '1952': ['13', '04'],
    '1953': ['05', '04'],
    '1954': ['18', '04'],
    '1955': ['10', '04'],
    '1956': ['01', '04'],
    '1957': ['21', '04'],
    '1958': ['06', '04'],
    '1959': ['29', '03'],
    '1960': ['17', '04'],
    '1961': ['02', '04'],
    '1962': ['22', '04'],
    '1963': ['14', '04'],
    '1964': ['29', '03'],
    '1965': ['18', '04'],
    '1966': ['10', '04'],
    '1967': ['26', '03'],
    '1968': ['14', '04'],
    '1969': ['06', '04'],
    '1970': ['29', '03'],
    '1971': ['11', '04'],
    '1972': ['02', '04'],
    '1973': ['22', '04'],
    '1974': ['14', '04'],
    '1975': ['30', '03'],
    '1976': ['18', '04'],
    '1977': ['10', '04'],
    '1978': ['26', '03'],
    '1979': ['15', '04'],
    '1980': ['06', '04'],
    '1981': ['19', '04'],
    '1982': ['11', '04'],
    '1983': ['03', '04'],
    '1984': ['22', '04'],
    '1985': ['07', '04'],
    '1986': ['30', '03'],
    '1987': ['19', '04'],
    '1988': ['03', '04'],
    '1989': ['26', '03'],
    '1990': ['15', '04'],
    '1991': ['31', '03'],
    '1992': ['19', '04'],
    '1993': ['11', '04'],
    '1994': ['03', '04'],
    '1995': ['16', '04'],
    '1996': ['07', '04'],
    '1997': ['30', '03'],
    '1998': ['12', '04'],
    '1999': ['04', '04'],*/
    '2000': ['23', '04'],
    '2001': ['15', '04'],
    '2002': ['31', '03'],
    '2003': ['20', '04'],
    '2004': ['11', '04'],
    '2005': ['27', '03'],
    '2006': ['16', '04'],
    '2007': ['08', '04'],
    '2008': ['23', '03'],
    '2009': ['12', '04'],
    '2010': ['04', '04'],
    '2011': ['24', '04'],
    '2012': ['08', '04'],
    '2013': ['31', '03'],
    '2014': ['20', '04'],
    '2015': ['05', '04'],
    '2016': ['27', '03'],
    '2017': ['16', '04'],
    '2018': ['01', '04'],
    '2019': ['21', '04'],
    '2020': ['12', '04'],
    '2021': ['04', '04'],
    '2022': ['17', '04'],
    '2023': ['09', '04'],
    '2024': ['31', '03'],
    '2025': ['20', '04'],
    '2026': ['05', '04'],
    '2027': ['28', '03'],
    '2028': ['16', '04'],
    '2029': ['01', '04'],
    '2030': ['21', '04'],
    '2031': ['13', '04'],
    '2032': ['28', '03'],
    '2033': ['17', '04'],
    '2034': ['09', '04'],
    '2035': ['25', '03'],
    '2036': ['13', '04'],
    '2037': ['05', '04'],
    '2038': ['25', '04'],
    '2039': ['10', '04'],
    '2040': ['01', '04'],
    '2041': ['21', '04'],
    '2042': ['06', '04'],
    '2043': ['29', '03'],
    '2044': ['17', '04'],
    '2045': ['09', '04'],
    '2046': ['25', '03'],
    '2047': ['14', '04'],
    '2048': ['05', '04'],
    '2049': ['18', '04'],
    '2050': ['10', '04'],
    /*'2051': ['02', '04'],
    '2052': ['21', '04'],
    '2053': ['06', '04'],
    '2054': ['29', '03'],
    '2055': ['18', '04'],
    '2056': ['02', '04'],
    '2057': ['22', '04'],
    '2058': ['14', '04'],
    '2059': ['30', '03'],
    '2060': ['18', '04'],
    '2061': ['10', '04'],
    '2062': ['26', '03'],
    '2063': ['15', '04'],
    '2064': ['06', '04'],
    '2065': ['29', '03'],
    '2066': ['11', '04'],
    '2067': ['03', '04'],
    '2068': ['22', '04'],
    '2069': ['14', '04'],
    '2070': ['30', '03'],
    '2071': ['19', '04'],
    '2072': ['10', '04'],
    '2073': ['26', '03'],
    '2074': ['15', '04'],
    '2075': ['07', '04'],
    '2076': ['19', '04'],
    '2077': ['11', '04'],
    '2078': ['03', '04'],
    '2079': ['23', '04'],
    '2080': ['07', '04'],
    '2081': ['30', '03'],
    '2082': ['19', '04'],
    '2083': ['04', '04'],
    '2084': ['26', '03'],
    '2085': ['15', '04'],
    '2086': ['31', '03'],
    '2087': ['20', '04'],
    '2088': ['11', '04'],
    '2089': ['03', '04'],
    '2090': ['16', '04'],
    '2091': ['08', '04'],
    '2092': ['30', '03'],
    '2093': ['12', '04'],
    '2094': ['04', '04'],
    '2095': ['24', '04'],
    '2096': ['15', '04'],
    '2097': ['31', '03'],
    '2098': ['20', '04'],
    '2099': ['12', '04']*/
}

const fixedHolidays = {
    general: {
        'New Year\'s Day': ['01', '01'],
        'Christmas Eve': ['24', '12'],
        'Christmas Day': ['25', '12'],
        'Second Day of Christmas': ['26', '12'],
        'New Year\'s Eve': ['31', '12'],
    },
    se: {
        'International Workers\' Day': ['01', '05'],
        'Epiphany': ['06', '01'],
        'National Day of Sweden': ['06', '06'],
    },
    dk: {
    },
    no: {
        'International Workers\' Day': ['01', '05'],
        'Constitution Day': ['17', '05'],
    }
}

const moveableHolidays = {
    general: {
        'Good Friday' : year => relativeToEaster_weekDay(year, 5, -1),
        'Easter Sunday' : year => getEaster(year),
        'Easter Monday' : year => relativeToEaster_weekDay(year, 1),
        'Ascension Day' : year => relativeToEaster(year, 39),
        'Pentecost' : year => relativeToEaster(year, 49),
        'All Saints\' Day': year => weekdayRelativeTo(year, 6, ['31', '10'])
    },
    se: {
        'Midsummer\'s Day': year => weekdayRelativeTo(year, 6, ['20', '06']),
    },
    dk: {
        'Maundy Thursday' : year => relativeToEaster_weekDay(year, 4, -1),
        'General Prayer Day' : year => relativeToEaster_weekDay(year, 5, 1, 4),
    },
    no: {
        'Maundy Thursday' : year => relativeToEaster_weekDay(year, 4, -1),
        'Whit Monday' : year => relativeToEaster(year, 50),
    }
}


// Util function
// Get day month year in an array of strings
const getDayMonthYear = (date) => {
    let str = date.toISOString()
    const year = str.slice(0,4)
    const month = str.slice(5,7)
    const day = str.slice(8,10)

    return [day, month, year]
}
//Convert a raw formatted date to a Date Object
const getDateFromRaw = (year, raw) => {
    return new Date(`${year}-${raw[1]}-${raw[0]}`)
}
// Combine the general holidays and country specific holidays from a given dict
const combineHolidays = (dict, country) => {
    return Object.assign({}, dict['general'], dict[country])
}


//Get the Date object of certain days past a date
const relativeToDay = (year, fromRaw, days) => {
    let res = getDateFromRaw(year, fromRaw)

    res.setDate(res.getDate() + days)
    return res
}
//A specific weekday after 'from', on a given year.
// weekday: 0-6 representing the weekday.
// from: an array [day, month] of the reference day. i.e. ['25', '07'] = July the 25th
// dire: direction, 1 or -1.
// nth: nth x-day after 'from'. e.g. "The 4th Friday after Easter"
const weekdayRelativeTo = (year, weekday, fromRaw, dire = 1, nth = 0) => {
    let res = getDateFromRaw(year, fromRaw)
    const fromDay = res.getDay()
    const datesToGo = (weekday - fromDay + 7 * dire ) % 7 + nth * 7

    res.setDate(res.getDate() + datesToGo)
    return res
}


// Get the easter of a given year.
// If returnRaw: use day, month pair: ['16', '04']
// Otherwise: Return Date object
const getEaster = (year, returnRaw = false) => {
    let easterRaw = easters[year]

    if(returnRaw){
        return easterRaw
    }
    return getDateFromRaw(year, easterRaw)
}
//certain days after easter
const relativeToEaster = (year, days) => {
    let easterRaw = getEaster(year, true)
    return relativeToDay(year, easterRaw, days)
}
//certain weekday before/after easter
const relativeToEaster_weekDay = (year, day, dire = 1, nth = 0) => {
    let easterRaw = getEaster(year, true)
    return weekdayRelativeTo(year, day, easterRaw, dire, nth)
}



//Check if a given day, month matches the given dict of fixed holidays
// fh: fixed holiday dict.
// day, month: strings representing day and month. i.e. '05', '12'
const checkFixedHoliday = (fh, day, month) => {
    for(let i in fh) {
        if(!fh.hasOwnProperty(i)) {
            continue
        }

        let md = fh[i]
        if(md[0] === day && md[1] === month) {
            return i
        }
    }

    return false
}
//Check if a given day, month matches the given dict of movable holidays
// mh: movable holiday dict.
// day, month: strings representing day and month. i.e. '05', '12'
const checkMovableHoliday = (mh, day, month, year) => {
    for(let i in mh){
        if(!mh.hasOwnProperty(i)) {
            continue
        }

        let res = getDayMonthYear(mh[i](year))
        if(res[1] === month && res[0] === day) {
            return i
        }
    }

    return false
}


//Check if a given Date object is a holiday of the given country.
//Return the english name of the holiday if match, false if no match
const isHolidayByCountry = (dt, country) => {
    const dmy = getDayMonthYear(dt)
    const year = dmy[2]
    const month = dmy[1]
    const date = dmy[0]

    let res

    let fh = combineHolidays(fixedHolidays, country)
    res = checkFixedHoliday(fh, date, month)
    if(res) return res

    let mh = combineHolidays(moveableHolidays, country)
    res = checkMovableHoliday(mh, date, month, year)
    if(res) return res

    return false
}

//Check if a given Date object is a holiday of the given country.
//Return the name in the country's language of the holiday if match, false if no match
const isHolidayByCountryTranslated = (dt, country) => {
    const holiday = isHolidayByCountry(dt, country)
    const res = lang[countryLanguage[country]][holiday]
    if(!res) {
        return holiday
    } else {
        return res
    }
}

const i18n = i18nFactory(lang)

//Use getProfileObj to simplify the process of getting the specific translation.
const getHoliday = (dt) => {
    //return isHolidayByCountryTranslated(dt, getProfileObj()['country'])
    const holiday = isHolidayByCountry(dt, getProfileObj()['country'])
    if(holiday) {
        return i18n(holiday)
    }
    return holiday
}

export default getHoliday