import { merge } from 'webpack-merge';
import commonconfig from './webpack.common.js';


export default merge(commonconfig, {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        watchFiles: ['./src/**/*'],
        port: 8800,
    },
});