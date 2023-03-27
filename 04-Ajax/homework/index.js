const [boton]=$("#boton")
const [lista] = $ ("#lista")
const [search] = $("#search")
const [deleteBtn] = $("delete")
const url = "http://localhost:5000/amigos"

const listFriends =(response)=>{
     lista.innerHTML = "";
    response.forEach((friend) => {
        const newLi= document.createElement("li");
        newLi.innerText= friend.name;
        lista.appendChild(newLi);
    });

}

const showFriends =()=>{
    // lista.innerHTML=""; // esta linea funciona para que solo se despliegue una ves las lista al hacer click en ver amigos 
   
    $.get(url, listFriends);

}


// console.log(search)
const searchFriend =()=>{

    const [input]=$("#input")
    const id= input.value;
    
    input.value=""
    $.get(`${url}/${id}` ,(response) =>{
        const [amigo] = $("#amigo");
        amigo.innerText =response.name;
    })

}

const deleteFriend=()=>{
    const [inputDelete]=$("#inputDelete")
    const id=inputDelete.value; // 1
    
    $.ajax({
        url: `${url}/${id}`,
        type:"DELETE",
        success:(response)=>listFriends(response)
    })
    
}
boton.addEventListener("click", showFriends);
search.addEventListener("click", searchFriend);
deleteBtn.addEventListener("click", deleteFriend)






