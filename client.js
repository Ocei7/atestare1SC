const axios = require('axios');

const serverUrl = 'http://localhost:8081';

async function performOperation(operation, first, second) {
  try {
    const response = await axios.post(`${serverUrl}/${operation}`, { first, second });
    if (response.status === 200) {
      console.log(`Succes: ${response.data.result}`);
    } else {
      console.log(`Fail: ${response.data.error}`);
    }
  } catch (error) {
    console.error(`Eroare: ${error.message}`);
  }
}

// Exemple de utilizare
performOperation('add', 23, 56);
performOperation('subtract', 10, 4);
performOperation('multiply', 7, 2);
performOperation('divide', 8, 0);

