
Number.prototype.toMoney = function () {
  return this.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
  });
};

export {};
