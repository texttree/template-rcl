/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const webpack = require('webpack')
const { name, version, url, description } = require('./package.json')

let sections = [
  {
    name: 'README',
    content: 'README.md',
  },
  {
    name: 'Components',
    components: ['src/components/Button/Button.tsx'],
  },
  {
    name: 'Hooks',
    components: ['src/components/hooks/useWindowScrollPosition.tsx'],
  },
]

module.exports = {
  components: 'src/components/**/[A-Z]*.js',
  propsParser: require('react-docgen-typescript').withCustomConfig('./tsconfig.json', [
    { savePropValueAsString: true },
  ]).parse,
  ribbon: {
    url,
    text: 'Open on GitHub',
  },
  title: `${name} v${version}`,
  template: {
    head: {
      meta: [
        {
          name: 'description',
          content: description,
        },
      ],
      // Если вам нужно подключить Tailwind в компонентах то раскомментируйте эти строки
      // scripts: [
      //   {
      //     src: 'https://cdn.tailwindcss.com',
      //   },
      // ],
    },
  },
  moduleAliases: { [name]: path.resolve(__dirname, 'src') },
  skipComponentsWithoutExample: true,
  sections,
  styles: function styles() {
    return {
      ComponentsList: {
        isSelected: {
          fontWeight: 'normal',
          '&>a': {
            fontWeight: 'bold !important',
          },
        },
      },
      Code: {
        code: {
          // make inline code example appear the same color as links
          backgroundColor: '#eff1f3',
          fontSize: 14,
          borderRadius: '6px',
          padding: '.2em .4em',
        },
      },
    }
  },
  theme: {
    color: {
      link: '#4B4E6A',
      linkHover: '#2B3847',
      baseBackground: '#fff',
      border: '#D0DAE4',
      sidebarBackground: '#fff',
    },
    fontFamily: {},
  },
  exampleMode: 'expand',
  usageMode: 'expand',
  pagePerSection: true,
  getComponentPathLine(componentPath) {
    const componentName = path.basename(componentPath, '.js').split('.')[0]
    return `import { ${componentName} } from '${name}';`
  },
  updateExample(props, exampleFilePath) {
    const { settings, lang } = props
    if (typeof settings?.file === 'string') {
      const filepath = path.resolve(path.dirname(exampleFilePath), settings.file)
      settings.static = true
      delete settings.file
      return {
        content: fs.readFileSync(filepath, 'utf8'),
        settings,
        lang,
      }
    }
    return props
  },
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: 'ts-loader',
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        process: { env: {} },
      }),
    ],
  },
}
