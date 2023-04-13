import 'dotenv/config';

const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;


const request_dance = {
    action: "select",
    table: "c_dance",
    columns: ["id","name","normal_price"],
};


const request_program = {
    action: "select",
    table: "c_program",
    columns: ["id","day","start_time","dances"],
    orderby: "start_time ASC",
    where: "status = 1",
};

const days = [
    {nom: "Lundi", cours: []},
    {nom: "Mardi", cours: []},
    {nom: "Mercredi", cours: []},
    {nom: "Jeudi", cours: []},
    {nom: "Vendredi", cours: []},
    {nom: "Samedi", cours: []},
    {nom: "Dimanche", cours: []},
  ];

async function fetchDanceData() {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': API_KEY
      },
      body: JSON.stringify(request_dance),
    });
    const data = await response.json();
    return data;
  }

async function fetchProgramData() {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': API_KEY
      },
      body: JSON.stringify(request_program),
    });
    const data = await response.json();
    return data;
  }

  function formatDanceData(danceData) {
    return danceData.map(dance => {
      return {id: dance.id, nom: dance.name, prix: dance.normal_price};
    });
  }


  function formatProgramData(programData, danceData) {
    programData.forEach(cours => {
        const heure = cours.start_time;
        const matieres = JSON.parse(cours.dances).map(danceId => {
            const dance = danceData.find(d => d.id === danceId);
            return {id: dance.id, nom: dance.nom, prix: dance.prix};
        });
  
        const jourIndex = cours.day - 1;
        days[jourIndex].cours.push({heure, matieres});
    });
  
    days.forEach(jour => {
      jour.cours.sort((a, b) => a.heure.localeCompare(b.heure));
    });
  
    return days;
  }
  
  function displayData(days) {
    return JSON.stringify({jours: days})
  }

  async function main() {
    try {
      const danceData = await fetchDanceData();
      const programData = await fetchProgramData();
      const formattedDanceData = formatDanceData(danceData);
      const formattedProgramData = formatProgramData(programData, formattedDanceData);
    console.log(displayData(formattedProgramData));
    } catch (error) {
      console.error(error);
    }
  }

export { fetchDanceData, fetchProgramData, formatDanceData, formatProgramData ,displayData,main}
  