function calculate(){
  
  // 1. init & validate
  const num = input.get('fraction_number_num').integer().raw();
  const denom = input.get('fraction_number_denom').natural().raw();
  if(num == '0') {
    input.error('fraction_number_num', 'fraction_number_num must be a non zero value');
  } 
  if(!input.valid()) return;

  // 2. calculate
  const frac = math.fraction(num, denom); 

  // 3. output
  $$('#result tr>*').forEach((node, index) => {
    const num = frac.s * frac.n * (index + 1); 
    const denom = frac.d * (index + 1); 
    node.innerText = `${num}/${denom}`;
  });
  
}
