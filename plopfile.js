
const config = (plop) => {
    plop.setGenerator('component', {
        description: 'Generated by plop',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'name your component'
            }
        ],
        actions: [
            {
                type: 'add',
                path: 'components/{{name}}/{{name}}.component.tsx',
                templateFile: 'templates/component/component.tsx.hbs'
            },
            {
                type: 'add',
                path: 'components/{{name}}/{{name}}.styles.sass',
                templateFile: 'templates/component/styles.sass.hbs'
            },
            {
                type: 'modify',
                path: 'pages/_app.tsx',
                pattern: '',
                template: 'import \'/components/{{name}}/{{name}}.styles.sass\'\n'
            }
        ]
    })
    plop.setGenerator('page', {
        description: 'Generated by plop',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'name your component'
            }
        ],
        actions: [
            {
                type: 'add',
                path: 'pages/{{name}}/page.tsx',
                templateFile: 'templates/component/component.tsx.hbs'
            },
            {
                type: 'add',
                path: 'pages/{{name}}/{{name}}.styles.sass',
                templateFile: 'templates/component/styles.sass.hbs'
            },
            {
                type: 'modify',
                path: 'pages/_app.tsx',
                pattern: '',
                template: 'import \'/pages/{{name}}/{{name}}.styles.sass\'\n'
            }
        ]
    })
}

module.exports = config