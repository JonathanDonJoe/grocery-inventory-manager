import axios from 'axios';

export default (dept) => {
    const getDairyUrl = `${window.apiHost}/dairy-inv`
    const data = axios.get(getDairyUrl);
    return ({
        type:`getInv-${dept}`,
        payload: data
    })
}