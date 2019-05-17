$( readyNow );

function readyNow(){
    console.log( 'JQ' );
    // append button to DOM
    $('body').append( `<button id="clickMe">Click Me!</button>` )
    // activate click listeners
    $( '#clickMe' ).on( 'click', handleClick );
} // end readyNow

function handleClick(){
    console.log( 'hello events!' );
} // end funk