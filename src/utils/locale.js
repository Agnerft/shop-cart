const locale = (word, currency) => {
  
  return word.toLocaleString('pt-br',
    {
      style: 'currency',
      currency
    });

  
};

export default locale;
