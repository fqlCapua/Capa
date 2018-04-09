
var ajpush = api.require('ajpush');

ajpush.init(function(ret) {
    if (ret && ret.status){
        console.log("OK");
    }else{
      console.log(222);
    }
});
