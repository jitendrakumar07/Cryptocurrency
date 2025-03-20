const searchInput = document.getElementById('searchInput');
const sortByMarketCapBtn = document.getElementById('sortByMarketCap');
const sortByPercentageBtn = document.getElementById('sortByPercentageChange');
const tableBody = document.querySelector('#Table tbody');

let Data = [];

function fetchDataWithThen() {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
        .then(response => response.json())
        .then(data => {
            Data = data;  
            renderData(Data);
        })
        .catch(error => console.error('Error:', error));
}

function renderData(data) {
    tableBody.innerHTML = '';
    data.forEach(coin => {
        const row = document.createElement('tr');
        const priceChangeClass = coin.price_change_percentage_24h > 0 ? 'positive-change' : 'negative-change';
        row.innerHTML = ` 
            <td>
                <img src="${coin.image}" alt="${coin.name}" width="30" height="30" style="vertical-align: middle">
                <span style="margin-left: 10px">${coin.name}</span>
            </td>
            <td>${coin.symbol.toUpperCase()}</td>
            <td>$${coin.current_price.toLocaleString()}</td>
            <td class="${priceChangeClass}" style="color: ${coin.price_change_percentage_24h > 0 ? 'green' : 'red'}">
                ${coin.price_change_percentage_24h.toFixed(2)}%
            </td>
            <td>$${coin.market_cap.toLocaleString()}</td>
            <td>$${coin.total_volume.toLocaleString()}</td>
        `;
        tableBody.appendChild(row);
    });
}

searchInput.addEventListener('input', (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredData = Data.filter(coin => 
        coin.name.toLowerCase().includes(searchTerm) || 
        coin.symbol.toLowerCase().includes(searchTerm)
    );
    renderData(filteredData);
});

sortByMarketCapBtn.addEventListener('click', () => {
    const sortedData = [...Data].sort((a, b) => b.market_cap - a.market_cap);
    renderData(sortedData);
});

sortByPercentageBtn.addEventListener('click', () => {
    const sortedData = [...Data].sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h);
    renderData(sortedData);
});

fetchDataWithThen();