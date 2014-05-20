var config = require(__dirname+'/../../config/config.js');

function setColdWallet(address, fn){
  var key = 'COLD_WALLET';
  var cold_wallet = config.get(key);
  if (cold_wallet) {
    fn('cold wallet address already set: '+ cold_wallet, null);
  } else {
    config.set(key, address);
    config.save(function(){
      cold_wallet = config.get(key);
      fn(null, 'set the cold wallet:', cold_wallet);
    });
  }
}

module.exports = setColdWallet;
