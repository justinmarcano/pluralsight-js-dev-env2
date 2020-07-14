/*eslint-disable no-console*/
import  webpack  from 'webpack';
import webpackConfig from './webpack.config,prod';
import chalk from 'chalk';

prpcess.env,NODE_ENV = 'production';

console.log(chalk.blue('Generating minified bundle for productions. This will take a moment '));

webpack(webpackConfig).run((err, stats) => {
  if (err) { // so a fatal error occured. Stop here.
  console.log(chalk.red(err));
    return 1;
   }
   return 0;
});
