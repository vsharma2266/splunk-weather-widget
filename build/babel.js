
module.exports = {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {node: 6},
          modules: false
        }
      ],
      ['@babel/preset-react', {runtime: 'automatic'}]
    ],
    plugins :[
      '@babel/plugin-proposal-optional-chaining',
      '@babel/plugin-proposal-nullish-coalescing-operator',
      [
        '@babel/plugin-transform-runtime',
        {
          regenerator: true
        }
      ],
    ]
}