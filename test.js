export default async function handler(req, res) {
    if (req.method === 'POST') {
      // Extract data from the request body
      // const { input } = req.body;

      fetch('https://uatservices.mfcentral.com/oauth/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Basic ' + btoa('sumanjutech:D104ZD1UN2LUA1LPA7TF'), // Basic Authentication header
        },
        body: JSON.stringify({
          grant_type: 'password',
          username: '20855ZO2ECPKWMEVM0H9',
          password: '5X5J0LK3VGV9MM8EI5XP',
        }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error('Error:', error));
    } else {
      // Handle unsupported HTTP methods
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  
  
