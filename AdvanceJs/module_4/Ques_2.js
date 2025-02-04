// <!--  What is promises -->
 
const promise = new Promise((resolve, reject) => {
    // Perform an asynchronous operation
    const success = true; // Simulate success or failure
  
    if (success) {
      resolve("Operation successful!");
    } else {
      reject("Operation failed!");
    } 
});

  
