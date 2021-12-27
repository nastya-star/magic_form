const tableHead = document.querySelector(".table");
const addBtn = document.getElementById("add");
const clearBtn = document.getElementById("clear");
const inputUsername = document.querySelector("input[name='username']");
const inputEmail = document.querySelector("input[name='email']");

const URL = 'http://localhost:3000/';
const users = [];

const checkEmail = email => {
    return Boolean(users.find(item => item.email == email));
}

const writeUser = (username, email, date) => {
    if (checkEmail(email)) {
        return alert('Error! Such user already exists!');
    }

    users.push({
        id: users.length + 1,
        username,
        email,
        date
    });

    return users[users.length - 1];
}

const createField = (username, email, date) => {
    const user = writeUser(username, email, date);

    if (!user) return null;

    return `
        <tr>
            <td>${user.id}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.date}</td>
        </tr>`;
}

const postData = async (url = '', data = {}) => {
    const headers = {
        'Content-Type': 'application/json'
    };

    const response = await fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify(data)
    });

    return await response.json();
}

clearBtn.addEventListener("click", e => {
    e.preventDefault();

    window.location.reload();
});

addBtn.addEventListener("click", e => {
    e.preventDefault();

    const response = postData('/', {
        username: inputUsername.value.trim(),
        email: inputEmail.value.trim()
    });

    response.then(data => {
        if (data?.error)
            return alert("Error! " + data.error);

        const field = createField(data.username, data.email, data.date);

        if (!field) return;

        tableHead.insertAdjacentHTML('beforeend', field);

        inputEmail.value = '';
        inputUsername.value = '';
    });
});