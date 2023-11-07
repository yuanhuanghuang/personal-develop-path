const playGuitar = () =>{
    return 'playing guitar';
};

const shredding = () =>{
    return 'shredding';
};



//export the functions for use in another JS file
export default playGuitar; //there can be only one line of default
export {shredding};
export function plucking(){ // if this is the first default , we can put export defualt function
    return 'plucking';      //this is the way of doing export inline
};


