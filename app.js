const list = document.querySelector(e){

//delete books
list.addEventLister('click',function(e){
    if(e.target.className == 'dlete'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
});

// add books
const addForm = document.forms['add-book'];
addForm.addEventLister('subit',function(e){
    e.preventDefult();
    const value =addForm.querySelector('input[type="text"]').value

    //crate elements
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBth = document.createElement('span');

    // add contenet
    deleteBtn.textContent = 'delete';
    bookName.textContent = value;

    //append to document
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);

});