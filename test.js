//
// const nameMap = {}
//
// arr.forEach(({name, color}) => {
//     if (nameMap[name]) {
//         nameMap[name] = [...nameMap[name], color]
//     } else {
//         nameMap[name] = [color]
//     }
// })
//
// let newArr = arr.map(({name}) => {
//     return {name, colors: nameMap[name]}
// })

colors= [
    {
        code: '#fffcf5',
        slug: 'milk'
    },
    {
        code: '#212121',
        slug: 'black'
    },
    {
        code: '#910951',
        slug: 'purple'
    },
    {
        code: '#cfc0b6',
        slug: 'grey'
    },
    {
        code: '#ffffff',
        slug: 'white'
    },
    {
        code: '#a86540',
        slug: 'light brown'
    },
    {
        code: '#a77752',
        slug: 'beige'
    },
    {
        code: '#442d25',
        slug: 'coffee'
    },
    {
        code: '#735435',
        slug: 'brown'
    },
    {
        code: '#87ceb',
        slug: 'sky'
    },
    {
        code: '#87776b',
        slug: 'cocoa'
    },
    {
        code: '#4d4d59',
        slug: 'metallic'
    },
    {
        code: '#d4b2a7',
        slug: 'dusty-rose'
    },
    {
        code: '#ffeede',
        slug: 'cream'
    },
    {
        code: '#1800cc',
        slug: 'blue'
    },
    {
        code: '#ff0000',
        slug: 'red'
    },
    {
        code: '#87cefa',
        slug: 'blue'
    },
    {
        code: '#dadeaf',
        slug: 'pearl-gray'
    },
    {
        code: '#313126',
        slug: 'graphite'
    },
    {
        code: '#ededed',
        slug: 'light-gray'
    },
    {
        code: '#f2e8c9',
        slug: 'creamy'
    }
]

const uaColors = [
    'молочний',
    'чорний',
    'пурпурний',
    'сірий',
    'білий',
    'світло-коричневий',
    'біжовий',
    'кав\'яний',
    'коричневий',
    'небесний',
    'какао',
    'металік',
    'пильна троянда',
    'кремовий',
    'синій',
    'червоний',
    'блакитий',
    'перливо-сірий',
    'графітовий',
    'світло-сірий',
    'верховий'
]

const enColors= [
    'milk',
    'black',
    'purple',
    'grey',
    'white',
    'light brown',
    'beige',
    'coffee',
    'brown',
    'sky',
    'cocoa',
    'metallic',
    'dusty trojan',
    'cream',
    'blue',
    'red',
    'blue',
    'pearl grey',
    'graphite',
    'light grey',
    'creamy'
]

const ruColors = [
    'молочный',
    'черный',
    'пурпурный',
    'серый',
    'белый',
    'светло-коричневий',
    'бежовый',
    'кофейный',
    'коричневый',
    'небесный',
    'какао',
    'металлик',
    'пыльная троянда',
    'кремовый',
    'синий',
    'красный',
    'голубой',
    'жечужно-серый',
    'графитовый',
    'светло-серый',
    'сливочный'
]

console.log(colors.length, uaColors.length)
