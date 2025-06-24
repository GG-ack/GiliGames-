// Menu hamburguer para mobile
document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.querySelector('.menu-hamburguer');
  const nav = document.querySelector('nav.header');
  const overlay = document.querySelector('.menu-overlay');

  function toggleMenu() {
    nav.classList.toggle('show');
    overlay.classList.toggle('show');
  }

  menuBtn.addEventListener('click', toggleMenu);
  if (overlay) {
    overlay.addEventListener('click', toggleMenu);
  }
});

// Seleção de opção de produto
if (document.querySelectorAll('.produto-opcao').length) {
  document.querySelectorAll('.produto-opcao').forEach(opcao => {
    opcao.addEventListener('click', function() {
      document.querySelectorAll('.produto-opcao').forEach(o => o.classList.remove('selected'));
      this.classList.add('selected');
    });
  });
}

// Número de itens no carrinho
const btnCarrinho = document.querySelector('.btn-carrinho');
const cartBadge = document.getElementById('cart-badge');
const quantidadeInput = document.getElementById('quantidade');

if (btnCarrinho && cartBadge && quantidadeInput) {
  btnCarrinho.addEventListener('click', function() {
    const quantidade = parseInt(quantidadeInput.value, 10) || 1;
    cartBadge.textContent = quantidade;
    cartBadge.style.display = quantidade > 0 ? 'inline-block' : 'none';
    cartBadge.classList.add('animate');
    setTimeout(() => cartBadge.classList.remove('animate'), 300);
  });
}

document.querySelectorAll('.cart-button').forEach(btn => {
  btn.addEventListener('click', function() {
    window.location.href = 'checkout.html';
  });
});

const btnComprar = document.querySelector('.btn-comprar');
if (btnComprar) {
  btnComprar.addEventListener('click', function() {
    window.location.href = 'checkout.html';
  });
}

// Interatividade de soma e subtração no checkout
const menosBtn = document.querySelector('.menos');
const maisBtn = document.querySelector('.mais');
const quantidadeSpan = menosBtn && maisBtn ? menosBtn.parentElement.querySelector('span') : null;
const precoTd = menosBtn && maisBtn ? menosBtn.parentElement.parentElement.querySelectorAll('td')[1] : null;
const subtotalTd = menosBtn && maisBtn ? menosBtn.parentElement.parentElement.querySelectorAll('td')[3] : null;
const totalPedidoSpan = document.getElementById('total-pedido');

if (menosBtn && maisBtn && quantidadeSpan && precoTd && subtotalTd && totalPedidoSpan) {
  let quantidade = parseInt(quantidadeSpan.textContent, 10) || 1;
  const preco = parseFloat(precoTd.textContent) || 0;
  function atualizarValores() {
    subtotalTd.textContent = preco * quantidade;
    totalPedidoSpan.textContent = preco * quantidade;
  }
  maisBtn.addEventListener('click', function() {
    quantidade++;
    quantidadeSpan.textContent = quantidade;
    atualizarValores();
  });
  menosBtn.addEventListener('click', function() {
    if (quantidade > 1) {
      quantidade--;
      quantidadeSpan.textContent = quantidade;
      atualizarValores();
    }
  });
  atualizarValores();
}