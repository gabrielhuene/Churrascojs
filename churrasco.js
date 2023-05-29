function Calcular() {
    const bebes = Number (document.getElementById('bebes').value);
    const normais = Number (document.getElementById('normais').value);
    const criança = Number (document.getElementById('criança').value);

    const QuantidadeCarne = (bebes + normais) * 0.400 + criança * 0.200;
    const QuantidadeAcompanhamentos = (bebes + normais + criança) * 0.200;
    const QuantidadeCerveja = bebes * 2;
    const QuantidadeRefrigerante = (bebes + normais + criança) * 0.500;
    const QuantidadeAgua = (bebes + normais + criança) * 0.400;

    alert(`Quantidade nescessária:\n
    ${QuantidadeCarne}Kg de carne
    ${QuantidadeAcompanhamentos}Kg de acompanhamentos
    ${QuantidadeCerveja}L de cerveja
    ${QuantidadeRefrigerante}L de refrigerente
    ${QuantidadeAgua}L de aguá
    `);
}

