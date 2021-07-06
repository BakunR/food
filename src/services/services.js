const postData = async (url, data) => {//asynс позначаємо що це асинхронний код
    const res = await fetch(url, {// await каже щоб чекав виконання фетча
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });
    return await res.json();// чекати виконання переводу з json формату в js 
};

const getResource = async (url) => {
    let res = await fetch(url);
        if (!res.ok) {// якшо результат не ок
            throw new Error (`Could not fatch ${url} , status ${res}`);// викидуємо помилку якщо запит на сервер не пройде
        }
            return await res.json();
};

export {postData};
export {getResource};