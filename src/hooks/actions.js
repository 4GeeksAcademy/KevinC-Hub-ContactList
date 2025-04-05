export const fetchAgenda = async (dispatch, payload) => {
    let response = await fetch("https://playground.4geeks.com/contact/agendas/KevinC-Hub");
    let data = await response.json()

    if (data.detail == `Agenda "KevinC-Hub" doesn't exist`) {
        createAgenda();
    }

    dispatch({
        type: "set_agenda",
        payload: { agenda: data.slug, contacts: data.contacts },
    });
} 
export const createAgenda = async (dispatch, payload) => {
    let response = await fetch("https://playground.4geeks.com/contact/agendas/KevinC-Hub", {
        method: "POST",
        headers: {"Content-type": "application/json"}
    })
    let data = await response.json()
    fetchAgenda()
}
export const getContacts = async (dispatch, payload) => {
    let response = await fetch("https://playground.4geeks.com/contact/agendas/KevinC-Hub/contacts");
    let data = await response.json()

    dispatch({
        type: "get_contacts",
        payload: { contacts: data.contacts },
    });
} 