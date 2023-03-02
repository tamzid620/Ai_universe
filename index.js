



const loadHubs = async() => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data = await res.json();
    displayHubs(data.data);
}

const displayHubs = hubs => {
    const hubsContainer = document.getElementById('hub-container')
    hubs.forEach(hub =>{
        const hubDiv = document.createElement('div');
        hubDiv.classList.add('col');
        hubDiv.innerHTML = `
        <div class="card h-100">
            <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
        </div>
        `;
        hubsContainer.appendChild(hubDiv);
    })
}

loadHubs();














