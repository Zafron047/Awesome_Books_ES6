import { DateTime } from "./modules/luxon";

const date = () => {
    const now = DateTime.now();
    document.querySelector('#date').innerHTML = dt.toLocaleString(DateTime.DATETIME_MED);
};

export default date;