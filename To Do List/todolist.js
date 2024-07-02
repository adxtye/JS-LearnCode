let input = prompt('What would you like to do?');
let arrlist = [];

while (input !== 'quit') {
    
    if (input === 'new') {
        let todo = prompt('Enter new todo');
        console.log(`${todo} added to list`);
        arrlist.push(todo);
    } 
    
    else if (input === 'list') {
        console.log('************');
        for (let i = 0; i < arrlist.length; i++) {
            console.log(`${i}: ${arrlist[i]}`);
        }
        console.log('************');
    } 
    
    else if (input === 'delete') {
        let deleteInd = parseInt(prompt('Enter the index of todo to delete'));
        while (!deleteInd) {
            deleteInd = parseInt(prompt('Enter a valid index of todo to delete'));
        }
        const deleted = arrlist.splice(deleteInd, 1);
        console.log(`Ok!, deleted ${deleted}`);
    }

    else {
        console.log('Put a valid argument')
    }
    input = prompt('What would you like to do?');

}


if (input = 'quit') {
    console.log('Ok, You have quit the app')
}