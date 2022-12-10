function tuyenSinh() {
    const diemChuan = document.getElementById('diemChuan').value*1;
    const diemToan = document.getElementById('diemToan').value*1;
    const diemLy = document.getElementById('diemLy').value*1;
    const diemHoa = document.getElementById('diemHoa').value*1;
    const khuVuc = document.getElementById('khuVuc').value*1;
    const doiTuong = document.getElementById('doiTuong').value*1;
    const diemTongKet = diemToan + diemLy + diemHoa + khuVuc + doiTuong;
    console.log(diemChuan,diemToan,diemLy,diemHoa,khuVuc,doiTuong, diemTongKet);
    
    if(diemToan > 0 && diemLy > 0 && diemHoa > 0){
        if (diemTongKet >= diemChuan){
            document.getElementById('showArea').innerHTML = `<b>Điểm tổng kết: ${diemTongKet} <br> Chúc mừng bạn đã trúng tuyển</b>`;
        }
        else
        {
            document.getElementById('showArea').innerHTML = `<b>Điểm tổng kết: ${diemTongKet} <br> Không trúng tuyển</b>`;
        }
    }
    else
    {
        document.getElementById('showArea').innerHTML = `<b>Điểm tổng kết: ${diemTongKet} <br> Không trúng tuyển</b>`;
    }
}

function tienDien() {
    var hoTen = document.getElementById('hoTen').value;
    const soDien = document.getElementById('soDien').value*1;
    var tienDien = null;
    console.log(hoTen, soDien);

    if(soDien >= 0){
        if(soDien <=50){
            tienDien = soDien * 500;
            document.getElementById('showArea2').innerHTML = `Khách hàng: ${hoTen} <br> Số tiền phải trả: ${tienDien}`
        }
        else  if(soDien <=100){
            tienDien = 50*500 + (soDien - 50)*650;
            document.getElementById('showArea2').innerHTML = `Khách hàng: ${hoTen} <br> Số tiền phải trả: ${tienDien}`
        }
        else  if(soDien <=200){
            tienDien = 50*500 + 50*650 + (soDien - 100)*850;
            document.getElementById('showArea2').innerHTML = `Khách hàng: ${hoTen} <br> Số tiền phải trả: ${tienDien}`
        }
        else  if(soDien <=350){
            tienDien = 50*500 + 50*650 + 100*850 (soDien - 200)*1100;
            document.getElementById('showArea2').innerHTML = `Khách hàng: ${hoTen} <br> Số tiền phải trả: ${tienDien}`
        }
        else{
            tienDien = 50*500 + 50*650 + 100*850 + 150*1100 + (soDien - 350)*1300;
            document.getElementById('showArea2').innerHTML = `Khách hàng: ${hoTen} <br> Số tiền phải trả: ${tienDien}`
        }
    }
    else
    {
        document.getElementById('showArea2').innerHTML = `Giá trị nhập vào không hợp lệ`
    }
}