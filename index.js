const containerelement=document.querySelector('.container');
window.addEventListener("mousemove",(result)=>{
    containerelement.innerHTML=`<div class="mouse-event">
    ${result.clientX}
    <h4>Mouse X Postion(px)</h4>
    </div>
    <div class="mouse-event">
        ${result.clientY}
        <h4>Mouse Y Postion(px)</h4>
    </div>
    </div>`
})
