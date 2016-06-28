// run every 1 minutes
var getData = requester();
  // What happens:
    // Determine which module to query (currently handled in requester)
    // Get current settings for that request 
    // Make the request
    // Receive returned XML and convert to JSON (done to this point)

 
    // Decrypt current dataset
    // Diff new module against current dataset module
      // if something new, trigger notifications module (checks settings, alerts appropriately)
    // Write new module dataset
    // Re-encrypt dataset (json) and write to file    
