module.exports = {
    // ...other webpack config options
    module: {
      rules: [
        // ...other rules
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                limit: 8192, // or any other limit you prefer
                name: 'static/media/[name].[hash:8].[ext]',
                esModule: false,
              },
            },
          ],
        },
      ],
    },
  };
  