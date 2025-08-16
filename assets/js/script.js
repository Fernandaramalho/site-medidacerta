// Exemplo simples para mostrar interação futura
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            alert("Em breve você poderá comprar este produto!");
        });
    });
});
