const get_request = async (url) => {
    const sender = await fetch (url, {method: 'GET'})
    const data = await JSON.stringify(sender)
    return data
}

const del_request = async (url) => {
    await fetch (url, {method: 'DELETE'})
}

const post_request = async (data, url) => {
    await fetch (url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify (data)
    })
}

const put_request = async (data, url) => {
    await fetch (url, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify (data)
    })
}