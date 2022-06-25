const deleteText = document.querySelectorAll('.fa-trash')

Array.from(deleteText).forEach((element)=>{
    element.addEventListener('click', deleteItem)
})


async function deleteItem(){
    const iTitle = this.parentNode.childNodes[1].innerText
    const iBody = this.parentNode.childNodes[3].innerText
    try{
        const response = await fetch('deleteItem', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'iTitle': iTitle,
              'iBody': iBody
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}