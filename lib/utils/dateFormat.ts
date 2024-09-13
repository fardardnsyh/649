const months : Array<string> = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const dateFormat = (dateString : string) : string => {
    const dataArray = dateString.split('T');
    const date = dataArray[0];
    const splitDate = date.split("-")
    const monthIndex = parseInt(splitDate[1]);
    const month = months[monthIndex - 1];
    return splitDate[2] + " " + month + " " + splitDate[0];
}

export default dateFormat;