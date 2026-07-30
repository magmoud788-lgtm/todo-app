import { merge } from 'webpack-merge';
import commonconfig from './webpack.common.js';


export default merge(commonconfig, {
    mode: 'production',
})