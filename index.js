module.export = function(item){
    return item?item:function(){return false};
}