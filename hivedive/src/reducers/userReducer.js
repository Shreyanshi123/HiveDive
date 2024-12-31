const INITIAL_STATE={
   first:null,
   second:null,
   third:null,
};

const userReducer = (state = INITIAL_STATE , action )=>{
    switch(action.type){
        default:
            return state;
    }
}

export default userReducer;