var expect = function(val) {
    console.log("reached");

    return obj = {
        toBe:function(local_val){
        if(val === local_val){
            console.log("reached_toBE");
            return true;
        }else{
           
           throw new Error("Not Equal");
        }
    },
    notToBe:function(not_val){
        if(val !== not_val){
            return true;
        }
        else{
            throw new Error("Equal");
        }
    }
    }
};