import isHoliday from '../dist/holidays-nordic.js'
import assert from 'assert'

let countries = ['se', 'dk', 'no']

describe('Someday is a holiday or not', () => {
    it('checks if Christmas is in all countries', () => {
        countries.forEach( cty => {
            let christmas = isHoliday(new Date('2017-12-25'), cty)
            assert(christmas !== false, `It is ${christmas} in ${cty}`)
        })
    })

    it('checks if Easter is in all countries', () => {
        countries.forEach( cty => {
            let easter = isHoliday(new Date('2017-04-16'), cty)
            assert(easter !== false, `It is ${easter} in ${cty}`)
        })
    })

    it('checks if Maundy Thursday is in dk and no', () => {
        ['dk', 'no'].forEach( cty => {
            let maundy = isHoliday(new Date('2017-04-13'), cty)
            assert(maundy !== false, `It is ${maundy} in ${cty}`)
        })
        let maundy = isHoliday(new Date('2017-04-13'), 'se')
        assert(maundy === false, `It is ${maundy} in ${'se'}`)
    })
    it('checks if 01-04 is not a holiday', () => {
        countries.forEach( cty => {
            let easter = isHoliday(new Date('2017-01-04'), cty)
            assert(easter === false, `It is not a holiday in ${cty}`)
        })
    })
})