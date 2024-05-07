let addButtons = document.querySelectorAll('.pros-btn');



   addButtons.forEach(button => {
     button.addEventListener('click', function (event) {
       event.preventDefault();
       
       let name = button.getAttribute('data-name');
       let price = button.getAttribute('data-price');
       let img = button.getAttribute('data-img');
 
       // Call the item function with item details
       item(name, price, img);
     });
   });


   let twodiv = document.querySelector('.offf');
let badge = document.querySelector('.badge')
count=0
function item(name, price, img) {
    let div = document.createElement('div');
    badge.innerHTML=++count
    // twodiv.style.border = "2px solid red";
    twodiv.style.display = "flex";
    twodiv.style.flexWrap = "wrap";
    twodiv.style.gap = "10px";
    div.innerHTML += `
        <div class="card rounded bg-dark text-white" style="width: 14rem; border-radius: 10px; padding: 6px;">
            <button type="button" class="btn-close btn-close-white close" aria-label="Close" onclick="closeItem(this.parentElement.parentElement)"></button>
            <img src="${img}" alt="" style="width: 100%; height: 14rem;">
            <div class="card-title bg-dark">
                <p class="p" style="word-wrap: break-word;">${name}</p>
                <p class="p1">₹${price}</p>
            </div>
        </div>
    `;
    twodiv.appendChild(div);
}

function closeItem(div) {
    console.log("clicked");
    twodiv.removeChild(div);
    badge.innerHTML=--count
}