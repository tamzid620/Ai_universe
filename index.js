



const loadHubs = async() => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data = await res.json();
    displayHubs(data.data.tools);
}

const displayHubs = hubs => {
    const hubsContainer = document.getElementById('hub-container')
    hubs.forEach(hub =>{
        const hubDiv = document.createElement('div');
        hubDiv.classList.add('col');
        hubDiv.innerHTML = `
        <div class="card h-100 p-3"  style="height: 900px;">
            <img src="${hub.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Features</h5>
                    <p class="card-text">${hub.features}</p>
                </div>
        </div>
        `;
        hubsContainer.appendChild(hubDiv);
    })
}





loadHubs();














