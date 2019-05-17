$( readyNow );

let dogCount = 2;

function readyNow(){
    // activate click listeners
    $( '#addDog' ).on( 'click', handleAddClick );
    $( '#dogTable' ).on( 'click', '.deleteBtn' /* this is a DESCENDANT SELECTOR */, handleDeleteClick );
    updateDogCount();
} // end readyNow

function handleAddClick(){
    // get user inputs
    const common = $( '#commonIn' ).val();
    const scientific = $( '#scienceIn' ).val();
    console.log( 'in handleAddClick: ' + common, scientific );
    // add input dog to the table
    $( '#dogTable' ).append( `
            <tr>
                <td>${common}</td>
                <td>${scientific}</td>
                <td>
                    <button class="deleteBtn">Delete</button>
                </td>
            </tr>
    ` );
    // clear inputs
    $( '#commonIn' ).val( '' );
    $( '#scienceIn' ).val( '' );
    // update dog count
    dogCount++;
    updateDogCount()
    // if count is over 3 number is should be red
    if ( dogCount > 3 ){
        $( '#dogCountDiv' ).css( 'color', 'red' );
    }
} // end funk

function handleDeleteClick(){
    console.log( 'in deleteRow:' );
    // delete the row functionality
    $(this).closest('tr').remove();
    // update dog count
    dogCount--;
    updateDogCount();
    // if count is less than or equal to 3 remove class red
    if ( dogCount <= 3 ){
        $( '#dogCountDiv' ).css( 'color', 'black' );
    }
}

function updateDogCount(){
    // append dog count
    $( '#dogCountDiv' ).text( dogCount );
}