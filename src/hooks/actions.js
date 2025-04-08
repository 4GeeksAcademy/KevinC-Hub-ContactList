export const fetchAgenda = async (dispatch, payload) => {
    let response = await fetch("https://playground.4geeks.com/contact/agendas/KevinC-Hub");
    let data = await response.json()

    if (data.detail == `Agenda "KevinC-Hub" doesn't exist.`) {
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
        headers: {"Content-type": "application/json"},
    })
    let data = await response.json()
    fetchAgenda()
}
export const getContacts = async (dispatch, payload) => {
    let response = await fetch("https://playground.4geeks.com/contact/agendas/KevinC-Hub/contacts");
    let data = await response.json()
    console.log(data.contacts)
    dispatch({
        type: "get_contacts",
        payload: { contacts: data.contacts },
    });
}
export const createContact = async (dispatch, payload) => {
    let response = await fetch("https://playground.4geeks.com/contact/agendas/KevinC-Hub/contacts", {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({ 
            "name": payload.name,
            "phone": payload.phone,
            "email": payload.email,
            "address": payload.address
        }) 
    })
}
export const updateContact = async (dispatch, payload) => {
    let response = await fetch("https://playground.4geeks.com/contact/agendas/KevinC-Hub/contacts/"+ payload.id, {
        method: "PUT",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({ 
            "name": payload.name,
            "phone": payload.phone,
            "email": payload.email,
            "address": payload.address
        }) 
    })
}
export const deleteContact = async (dispatch, payload) => {
    let response = await fetch("https://playground.4geeks.com/contact/agendas/KevinC-Hub/contacts/"+payload, {
        method: "DELETE",
        headers: {"Content-type": "application/json"},
    })
}