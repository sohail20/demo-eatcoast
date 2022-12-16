
const toast = store => next => action => {
    // if (action.payload.status === 200) {
    //   Swal.fire("Failed", "action.payload", "error");
    // }
    //else 
    return next(action);
  };
  
  export default toast;
  