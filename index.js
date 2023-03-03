



const loadHubs = async(dataLimit) => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data = await res.json();
    displayHubs(data.data.tools, dataLimit);
}

const displayHubs = (hubs,dataLimit)=> {
    const hubsContainer = document.getElementById('hub-container')
    // display 6 items only-------------
    const seeMore = document.getElementById('btn-see-more');
    if(hubs.length > 6 ){
        hubs = hubs.slice(0,6);
        seeMore.classList.remove('d-none');
    }
    else{
        seeMore.classList.add('d-none');
    }

    hubs.forEach(hub =>{
        const hubDiv = document.createElement('div');
        hubDiv.classList.add('col');
        hubDiv.innerHTML = `
        <div class="card  p-3 shadow p-3  bg-body-tertiary rounded text-start"  style="height: 500px;">
            <img src="${hub.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Features</h5>
                    <p class="card-text text-secondary">${hub.features}</p>
                    <hr>
                    <div class="mt-5 d-flex justify-content-between">
                        <div>
                            <p class="card-text fw-bold">${hub.name}</p>
                            <p class="card-text text-secondary">${hub.published_in}</p>
                        </div>
                        <div>
                        <button id="btn-motal" class="button bg-info border border-info-subtle"><i class="fa-solid fa-hand-pointer"></i>  </button>
                        </div>
                    </div>
                </div>
        </div>
        `;
        hubsContainer.appendChild(hubDiv);
    })
    toggleSpinner(false);
    
}

const processSeach = (dataLimit) => {
    loadHubs(dataLimit);
}


document.getElementById('btn-see-more').addEventListener('click', function(){
    toggleSpinner(true);
    processSeach();
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














