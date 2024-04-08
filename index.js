async function fetchPlayers() {
    try {
      const response = await fetch('https://api.mcsrvstat.us/3/135.181.237.60:25718');
      const data = await response.json();
      console.log(data);
      if (data.players) {
        return data.players
      } else {
        throw new Error('Failed to fetch player list');
      }
    } catch (error) {
      console.error('Error fetching players:', error);
      throw error;
    }
  }
  
module.exports = { fetchPlayers };