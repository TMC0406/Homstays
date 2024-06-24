import generateCode from "./generateCode"

const prices = [
    {
        min: 0,
        max: 1,
        value:  'Dưới 1 triệu',
    },
    {
        min: 1,
        max: 2,
        value:  'Từ 1-2 triệu', 
    },
    {
        min: 2,
        max: 3,
        value:  'Từ 2-3 triệu', 
    },
    {
        min: 3,
        max: 5,
        value:  'Từ 3-5 triệu',
    },
    {
        min: 5,
        max: 7,
        value:  'Từ 5-7 triệu',
    },
    {
        min: 7,
        max: 10,
        value:  'Từ 7-10 triệu',
    },
    {
        min: 10,
        max: 15,
        value:  'Từ 10-15 triệu',
    },
    {
        min: 15,
        max: 99999999999,
        value:  'Trên 15 triệu'
    },
    
    
     
     
     
    
]

export const dataPrice = prices.map(item => ({
    code: generateCode(item),
    value: item
}))