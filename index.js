



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
                    <p class="card-text text-secondary">1.${hub.features[0]}</p>
                    <p class="card-text text-secondary">2.${hub.features[1]}</p>
                    <p class="card-text text-secondary">3.${hub.features[2]}</p>
                    <hr>
                    <div class="mt-5 d-flex justify-content-between">
                        <div>
                            <p class="card-text fw-bold">${hub.name}</p>
                            <p class="card-text text-secondary">-${hub.published_in}</p>
                        </div>
                        <div>
                        <button onclick="loadHubsDetails(${hub.id})" id="btn-modal" class="button bg-info border border-info-subtle" data-bs-toggle="modal" data-bs-target="#hubDetailModal"><i class="fa-solid fa-hand-pointer"></i>  </button>
                        
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
        spinnerSection.classList.add('d-none');
    }

}

const loadHubsDetails = async id => {
    const url = `https://openapi.programming-hero.com/api/ai/tool/01`;
    const res = await fetch(url);
    const data = await res.json();
    displayHubDetails(data.data);
}

const displayHubDetails = hub=> {
    console.log(hub);
    // const modalTittle = document.getElementById('hubDetailModalLabel')
    // modalTittle.innerText = hub.description;
    const hubDetails = document.getElementById('hub-details');
    hubDetails.innerHTML = `
<section class ="d-flex text-center">
<div class="row gap-3">
  <div class="col text-center border border-info rounded p-2">
      <h4>
      <p class="fw-bold">${hub.description}</p>
      </h4>
      <div class="d-flex gap-3 ">
        <div class=" border border-success-subtle bg-white p-2 rounded">
            <p class="text-success">${hub.pricing[0].plan}</p>
            <p class="text-success">${hub.pricing[0].price}</p>
        </div>
        <div class="border border-danger bg-white p-2 rounded">
            <p class="text-danger">${hub.pricing[1].plan}</p>
            <p class="text-danger">${hub.pricing[1].price}</p>
        </div>
        <div class="border border-warning bg-white p-2 rounded">
            <p class="text-warning-emphasis">${hub.pricing[2].plan}</p>
            <p class="text-warning-emphasis">${hub.pricing[2].price}</p>
        </div>
      </div>
      <div class ="d-flex gap-5">
        <div>
        <h5 class=" text-start mt-4">Features</h5>
        <p class="text-start text-secondary">1.${hub.features[1].feature_name}</p>
        <p class="text-start text-secondary">2.${hub.features[2].feature_name}</p>
        <p class="text-start text-secondary">3.${hub.features[3].feature_name}</p>
        </div>
        <div>
        <h5 class=" text-start mt-4">Integrations</h5>
        <p class="text-start text-secondary">1.${hub.integrations[0]}</p>
        <p class="text-start text-secondary">1.${hub.integrations[1]}</p>
        <p class="text-start text-secondary">1.${hub.integrations[2]}</p>
        </div>
      </div>
  </div>
  <div class= "col border border-danger-subtle rounded p-2">
        <div>
            <img src="${hub.image_link[0] ? hub.image_link[0] : 'No image found'}" id="modal-img" class=" rounded" alt="..." style="width: 400px; height: 300px;">
            <button id="modal-img-btn" class=" bg-info fw-semibold text-white rounded border border-info-subtle p-2 ">94% accuracy</button>
        </div>
        <div>
            <p class= "fw-bold text-secondary mt-2">
            ${hub.input_output_examples[0].output ? hub.input_output_examples[0].output : 'no caption found'}
            </p>
        </div>
  </div>
</div>
</section>
`; 
}


loadHubs();














