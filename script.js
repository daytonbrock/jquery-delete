$( readyNow );

function readyNow(){
    console.log( 'JQ' );
    $('body').append( `<button id="clickMe">Click Me!</button>` )

    $( '#clickMe' ).on( 'click', function(){
        console.log( 'hello world!' );
    } )
}