# holidays-nordic
Javascript library for checking nordic public holidays. It is intended to be light-weight, but also possible to be extended for more holidays/other county's holidays.

## How to install:
`npm install holidays-nordic`

## How to use:
```
import isHoliday from 'holidays-nordic'

//provide a Date object, and country code: 'se', 'dk' or 'no'
let holidayToday = isHoliday(new Date(), 'se')  

/* Result: false if not a public holiday. Or holiday name in the country's language. */
```

## Supported Holidays
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
