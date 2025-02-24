export const formatDate = (dateString: string) => {
    // to do: handle non-valid dateString
    
    const date = new Date(dateString);
    let day: string | number = date.getDate();
    let month: string | number = date.getMonth() + 1;
    const year = date.getFullYear();

    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;

    return `${day}/${month}/${year}`;
}