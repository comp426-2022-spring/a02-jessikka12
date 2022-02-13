// import functions
import * as coin from  "./modules/coin.mjs";
import minimist from 'minimist';

// take call argument
const args = minimist(process.argv.slice(2));
args['number'];

const number = args.number || 1;

// flip coins
const flips = coin.coinFlips(args.number);
console.log(flips);
console.lot(coin.countFlips(flips))