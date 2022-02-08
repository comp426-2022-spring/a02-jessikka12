// import functions
import * as coin from  "./modules/coin.mjs";
import minimist from 'minimist';

// take call argument
const args = minimist(process.argv.slice(2));
args['call'];

const call = args.call;

// error if call is wrong
if (args.call != "tails" && args.call != "heads") {
    console.log("Error: no input");
} else {

    console.log(coin.flipACoin(args.call));

}