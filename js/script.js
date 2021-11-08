function getInfo() {
    let charId = document.getElementById("charCapture").value
    document.getElementById("charCapture").value = ""

   // alert(charId)
   // console.log(charId)

    //let url = "https://rickandmortyapi.com/api/character/"+charId

   let url = `https://rickandmortyapi.com/api/character/${charId}` 

    //alert(url)

    fetch(url)
        .then(res => res.json())
        .then(data =>{
            console.log(data)

            let html = `<center><img src="${data.image}"</center>
                        <center><h1>${data.name}</h1></center>
                        <center><h1>${data.status}</h1></center>`

            document.getElementById("charContent").innerHTML = html
        })
        .catch(err => console.log(err))

        

}