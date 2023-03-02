



const loadHubs = async() => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data = await res.json();
    displayHubs(data.data.tools);
}

const displayHubs = hubs => {
    const hubsContainer = document.getElementById('hub-container')
    // display 6 items only-------------
    hubs = hubs.slice(0,6);
    hubs.forEach(hub =>{
        const hubDiv = document.createElement('div');
        hubDiv.classList.add('col');
        hubDiv.innerHTML = `
        <div class="card  p-3 shadow p-3  bg-body-tertiary rounded"  style="height: 550px;">
            <img src="${hub.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Features</h5>
                    <p class="card-text">${hub.features}</p>
                </div>
        </div>
        `;
        hubsContainer.appendChild(hubDiv);
    })
    toggleSpinner(false);
}


document.getElementById('btn-dekho').addEventListener('click', function(){
    toggleSpinner(true);
})
const toggleSpinner = isLoading => {
    const spinnerSection = document.getElementById('spinner');
    if(isLoading){
        spinnerSection.classList.remove('d-none');
    }else{
        loaderSection.classList.add('d-none');
    }
}

loadHubs();














