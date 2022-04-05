import axios from 'axios'

const Url = '';

export const getEvents = async (id) => {
    id = id || '';
    return await axios.get(`${eventsUrl}${id}`);
}

export const addEvent = async (event) => {
    return await axios.post(eventsUrl, event);
}

export const deleteEvent = async (id) => {
    return await axios.delete(`${eventsUrl}${id}/`);
}

export const editEvent = async (id, event) => {
    return await axios.put(`${id}/`, `${event}`)
}