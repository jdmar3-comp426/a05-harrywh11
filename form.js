window.addEventListener( "load", function () {
    function sendData() {
      const XHR = new XMLHttpRequest();
  
      // Bind the FormData object and the form element
      const FD = new FormData( emailform );
      const userd = new FormData( userform );
      const passd = new FormData( passform );
  
      // Define what happens on successful data submission
      XHR.addEventListener( "load", function(event) {
        alert( event.target.responseText );
      } );
  
      // Define what happens in case of error
      XHR.addEventListener( "error", function( event ) {
        alert( 'Oops! Something went wrong.' );
      } );
  
      // Set up our request
      XHR.open( "POST", "https://example.com/cors.php" );
  
      // The data sent is what the user provided in the form
      XHR.send( FD );
      XHR.send( userd );
      XHR.send( passd );
    }
  
    // Access the form element...
    const emailform = document.getElementById( "email" );
    const userform = document.getElementById( "username" );
    const passform = document.getElementById( "password" );
  
    // ...and take over its submit event.
    emailform.addEventListener( "submit", function ( event ) {
      event.preventDefault();
  
      sendData();
    } );
    userform.addEventListener( "submit", function ( event ) {
        event.preventDefault();
    
        sendData();
      } );
    passform.addEventListener( "submit", function ( event ) {
        event.preventDefault();
    
        sendData();
      } );
  } );