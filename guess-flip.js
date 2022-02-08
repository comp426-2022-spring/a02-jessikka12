// import functions
import * as coin from  "./modules/coin.mjs";

// take call argument
const args = require('minimist')(process.argv.slice(2));
args['call'];

// error if call is wrong
if (args.call != "heads" || args.call != "tails") {
    console.log("Error: no input");
} else {

    console.log(coin.flipACoin(args.call));

}