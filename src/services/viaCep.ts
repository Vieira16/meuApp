export async function getAddressByCep(cep: string) {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  
    if (!response.ok) {
      throw new Error('Erro na requisição');
    }
  
    return response.json();
  }
  