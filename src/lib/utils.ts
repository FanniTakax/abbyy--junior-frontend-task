export const formatDate = (dateString: string) => {
    const isValidDate = !isNaN(Date.parse(dateString));
    if (!isValidDate) {
        return 'Unknown date';
    }

    const date = new Date(dateString);
    let day: string | number = date.getDate();
    let month: string | number = date.getMonth() + 1;
    const year = date.getFullYear();
    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;

    return `${day}/${month}/${year}`;
};

export const multiplyText = (text: string) => {
    const multiplier = Math.floor(Math.random() * 20);
    let bodyMultiplied = '';

    for (let i = 0; i <= multiplier; i++) {
        bodyMultiplied = bodyMultiplied.concat(' ', text);
    }

    return bodyMultiplied;
};
