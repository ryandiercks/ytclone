import axios from 'axios';

const KEY = 'AIzaSyAqWRAH1HCuxLS74jbOdS3DFN5UQ_KODrg';


export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
