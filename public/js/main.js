document.addEventListener('DOMContentLoaded', ()=>{
//     const button = document.querySelector('#btn');

    
    getDevices = async (url, bod) => {
        const settings = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bod)
        };
        const data = await fetch(url, settings)
        return data;
}
    
    
    
    
    
    
    
    
//     if(button){
//         button.addEventListener('click', ()=>{
//             getDevices()
//         })
//     }




    function getProductId(){
        const cards = document.querySelectorAll('.delete-card');
       console.log(cards)
        cards.forEach((node)=>{
            node.addEventListener('click', _ => {
                getDevices("http://localhost:3002/", {id: node.dataset.id})
            })
        })
        }



getProductId()

})