export default {
  convertDate(dateStr) {
    try {
        // Chuyển đổi từ chuỗi ngày tháng sang đối tượng Date
        const dateObj = new Date(dateStr);

        // Lấy ngày, tháng và năm
        const day = dateObj.getDate();
        const month = dateObj.getMonth() + 1; // Tháng bắt đầu từ 0
        const year = dateObj.getFullYear();

        // Định dạng lại thành chuỗi theo định dạng mong muốn
        const formattedDate = `${day}/${month}/${year}`;

        return formattedDate;
    } catch (error) {
        return "Ngày tháng không hợp lệ!";
    }
}


}
