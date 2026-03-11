const btn=document.querySelector("#modal-btn")
const modal=document.querySelector("#myModal")
btn.addEventListener("click",(event)=>{
    const modalId=event.target.dataset.modal
    const modal=document.querySelector(modalId)
    modal.classList.add("active")
 })
modal.addEventListener("click",(event)=>{
    const target=event.target
    if(target.classList.contains("close")||target.classList.contains("modal")){
        modal.classList.remove("active")
    }
})
