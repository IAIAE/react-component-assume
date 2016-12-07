module.exports = function(item){
    return item?item:function(){return false};
}