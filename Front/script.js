const resultsDiv = document.getElementById("results")

async function fetchFruits(){ 
    resultsDiv.innerHTML = "<p>Carregando...</p>"

    try {
        const response = await fetch('../Dados/data.json')
        const data = await response.json()

        if(data.error){
            resultsDiv.innerHTML = "<p> Erro ao buscar!</p>"
            return
        }
        resultsDiv.innerHTML = ''

        data.forEach(fruits => {
            const card = document.createElement("div")
            card.className = "card"
            card.innerHTML = `
                <img src="${fruits.imagem}" alt="${fruits.nome}"
                <h2>${fruits.nome}</h2>
                <h3>${fruits.descricao}</h3>
                <p>R$${fruits.preco.toFixed(2)}</p>
            `
            resultsDiv.appendChild(card)
            
            });

    } catch (error) {
        resultsDiv.innerHTML = "<p>Erro ao buscar produtos!</p>"
    }
}
        

fetchFruits()