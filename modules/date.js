import { DateTime } from './luxon.js';

const date = () => {
    const now = DateTime.now();
    document.querySelector('#date').innerHTML = now.toLocaleString(DateTime.DATETIME_MED);
};

export default date;