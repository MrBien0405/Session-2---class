// Lý thuyết:
//Var, let, const là khai báo biến
//let tạo ra 1 biến chỉ có thể truy cập được trong block bao quanh nó
// var tạo ra 1 biến có phạm vi truy cập xuyên suốt function chứa nó.
// const là để khai báo 1 hằng số.
// boolean lưu trữ các giá trị đúng hay sai của 1 mệnh đề so sánh nào đấy
// Bài tập
// Câu 1: prompt nhập vào 1 số. test nó ở trong khoảng bé hơn hay lớn hơn trong khoảng 0 -9
// let a = Number(prompt("nhập vào 1 số"));
// if( 0 <= a && a <= 4.5){
//     alert("Lower Half of 9")
// } else if( 4.5 < a && a <= 9){
//     alert("Hight Lalf of 9")
// } else {alert("Included")}

// Câu 2: prompt nhập 1 số n và 1 số x. test x thuộc nửa bé hơn hay lớn hơn 0- n
// let x = Number(prompt("nhập số x vào"));
// let n = Number(prompt("nhập số n vào"));
// if(0 <= x && x <= n/2){
//     alert(`${x} is in Lower Half of ${n}`);
// }else if(n/2 <= x && x <= n){
//     alert(`${x} is in Hight Half of ${n}`);
// }else { alert("Included")}

// Câu 3:prompt nhập vào 1 số x. test chẵn hay lẻ in ra màn hình
// let n = Number(prompt("nhập vào 1 số x"))
// if( 0 <= n && n % 2 == 0) {
//     alert(`${n} is an even number`)
// } else { alert(`${n} is an odd number`)}
//
//
//Câu 4: Prompt BMI = mass/( hight*hight). phân loại thông tin cơ thể người dùng trong các trường hợp
// let mass = Number(prompt("your weiht in kg"));
// let hight = Number(prompt("your hight in cm"));
// let BMI = (mass*10000) / ( hight * hight );
// if(0 <= BMI && BMI< 16 ){
//     alert(`you are a skinny skeleton`)
// }else if(16 <= BMI && BMI < 18.5){
//     alert("you are a korean idol")
// }else if(18.5 <= BMI && BMI < 25){
//     alert("you are handsome")
// }else if(25 <= BMI && BMI < 30){
//     alert("You are over weight")
// }else { alert("you don't need to lose weight anymore")}

//Câu 5: Prompt 5 môn học. Tính % tổng điểm các môn tb cộng lại với nhau và so sánh
// let a = Number(prompt("nhập điểm môn Toán vào đây"));
// let b = Number(prompt("nhập điểm môn Lý vào đây"));
// let c = Number(prompt("nhập môn Hóa vào đây"));
// let d = Number(prompt("nhập điểm môn Văn vào đây"));
// let e = Number(prompt("nhập điểm môn Anh vào đây"))
// let Percentage = (( a + b + c + d + e) *100)/50;
// if(Percentage >= 90) {
//     alert("Grade A");
// }else if(Percentage >= 80){
//     alert("Grade B")
// }else if(Percentage >= 70){
//     alert("Grade C")
// }else if(performance >= 60){
//     alert("Grade D")
// }else if(performance >= 40){
//     alert("Grade E")
// } else {alert("Grade F")}
//

//Câu 6:prompt nhập 1 năm kiểm tra năm đo co hợp lệ hay ko.năm nhuạn hay ko
// let year = Number(prompt("nhập 1 năm bất kỳ vào đây"));
// if(Number.isInteger(year) && year % 4 === 0 ){
//     alert("là năm nhuận")
// }else{alert("là năm không nhuận")}
//
//
// Câu 7: prompt nhập chiều cao người đó. tiến hành phân loại
// let hight = Number(prompt("nhập chiều cao vào đây cm"))
// if(hight >= 0 && hight < 150){
//     alert("you are a dwarf")
// }else if(hight >= 150 && hight <= 169){
//     alert("it's temporary in you. give 3 points")
// }else(alert("you look good too"))
//
//
// Câu8: prompt a và b test số nào lớn hơn và in ra màn hình
// let a = Number(prompt("nhập số a vào đây"))
// let b = Number(prompt("nhập số b vào đây"))
// if(a > b){
//     alert("number a is greater than number b")
// }else if(a == b){
//     alert("number a aquals number b")
// }else{
//     alert("number b is greater than a")}


// Câu 9: prompt nhập 2 số a b, nhập phep toán. sử dụng switch case mô phỏng chiếc máy tính đơn giản
// let a = Number(prompt("nhập số a vào đây"));
// let b = Number(prompt("nhập số b vào đây"));
// let math = prompt("nhập phép toán")
// switch(math){
//     case "+":
//     alert(`Kết quả phép toán là ${a + b}`);
//     break;
//     case "-":
//     alert(`Kết quả phép toán là ${a-b}`);
//     break;
//     case "*":
//     alert(`Kết quả phép toán là ${a * b}`)
//     break;
//     case "/":
//     alert(`Kết quả phép toán là ${a / b}`)
//     break;
// }
//Câu 10: prompt nhập vào 3 số a b c. số nào max, số nào min. In ra màn hình
// let a = Number(prompt("nhập số a vào đây"))
// let b = Number(prompt("nhập số b vào đây"))
// let c = Number(prompt("nhập số c vào đây"))
// alert(`Max là ${Math.max(a,b,c)}`);
// alert(`Min là ${Math.min(a,b,c)}`);
//
//C2
// let a = Number(prompt("nhập số a vào đây"));
// let b =  Number(prompt("nhập sô b vào đây"));
// let c = Number(prompt("nhập số c vào đây"));
// if(a> b && a > c){
//     alert(`Max là ${a}`)
// }else if(b > a && b > c){
//     alert(`Max là$ {b}`)
// }else{
//     alert(`Max là ${c}`)
// }
// if(a < b && a < c ){
//     alert(`Min là ${a}`)
// } else if( b < a && b < c){
//     alert(`Min là ${b}`)
// }else{alert(`Min là ${c}`)}
//
// Câu 11: prompt nhập 1 sô a vào xem số a có phải là số chính phương hay ko
// let a = Number(prompt("nhập số a vào đây"));
// let b = Math.sqrt(a);
// if(Number.isInteger(b)){
//     alert(`${a} is a perfect square`)
// }else{
//     alert(`${a} is not a perfect square`)
// }

//Câu 12:prompt nhập vào 2 đại lượng date and month. test ng dùng thuộc chòm sao nào trong cung hoàng đạo. sử dụng swith case
// let date = Number(prompt("nhập ngày sinh của bạn vào đây"));
// let month= Number(prompt("nhập số tháng bạn sinh vào đây"));
// let year = Number(prompt("nhập số năm bạn sinh vào đây"));
// if(year < 0){
//     alert(`Bạn nhập sai thông tin`);
// } else{
//     switch(month){
//         case 1:
//             if(date <= 19 && date > 0){
//                 alert(`Bạn sinh ngày ${date} tháng ${month} năm ${year}\nBạn thuộc cung ma kết`);
//             }
//             else if(date > 19 && date<= 31){
//                 alert(`Bạn sinh ngày ${date} tháng ${month} năm ${year}\nBạn thuộc cung bảo bình`);
//             }else{
//                     alert("Không có ngày bạn nhập.")}
//                     break;
//         case 2:
//             if(date <= 18 && date > 0){
//                 alert(`Bạn sinh ngày ${date} tháng ${month} năm ${year}\nBạn thuộc cung bảo bình`);
//             }
//             else if(date > 18 && date<= 28){
//                 alert(`Bạn sinh ngày ${date} tháng ${month} năm ${year}\nBạn thuộc cung song ngư`);
//             }else{
//                     alert("Không có ngày bạn nhập.")}
//                     break;
               
//         case 3:
//             if(date <= 20 && date > 0){
//                 alert(`Bạn sinh ngày ${date} tháng ${month} năm ${year}\nBạn thuộc cung song ngư`);
//             }
//             else if(date > 20 && date<= 31){
//                 alert(`Bạn sinh ngày ${date} tháng ${month} năm ${year}\nBạn thuộc cung bạch dương`);
//             }else{
//                 alert("Không có ngày bạn nhập.")}
//             break;            
//         case 4:
//             if(date <= 19 && date > 0){
//                 alert(`Bạn sinh ngày ${date} tháng ${month} năm ${year}\nBạn thuộc cung bạch dương`);
//             }
//             else if(date > 19 && date<= 30){
//                  alert(`Bạn sinh ngày ${date} tháng ${month} năm ${year}\nBạn thuộc cung kim ngưu`);
//             }else{
//                 alert("Không có ngày bạn nhập.")}
//             break;            
//         case 5:
//             if(date <= 20 && date > 0){
//                 alert(`Bạn sinh ngày ${date} tháng ${month} năm ${year}\nBạn thuộc cung kim ngưu`);
//             }
//             else if(date > 20 && date<= 31){
//                 alert(`Bạn sinh ngày ${date} tháng ${month} năm ${year}\nBạn thuộc cung song tử`);
//             }else{
//                 alert("Không có ngày bạn nhập.")}
//             break;     
//         case 6:
//             if(date <= 21 && date > 0){
//                 alert(`Bạn sinh ngày ${date} tháng ${month} năm ${year}\nBạn thuộc cung song tử`);
//             }
//             else if(date > 21 && date<= 30){
//                 alert(`Bạn sinh ngày ${date} tháng ${month} năm ${year}\nBạn thuộc cung cự giải`);
//             }else{
//                 alert("Không có ngày bạn nhập.")}
//             break;                               
//         case 7:
//             if(date <= 22 && date > 0){
//                 alert(`Bạn sinh ngày ${date} tháng ${month} năm ${year}\nBạn thuộc cung cự giải`);
//             }
//             else if(date > 22 && date<= 31){
//                 alert(`Bạn sinh ngày ${date} tháng ${month} năm ${year}\nBạn thuộc cung sư tử`);
//             }else{
//                 alert("Không có ngày bạn nhập.")}
//             break;                           
//         case 8:
//             if(date <= 22 && date > 0){
//                 alert(`Bạn sinh ngày ${date} tháng ${month} năm ${year}\nBạn thuộc cung sư tử`);
//             }
//             else if(date > 22 && date<= 31){
//                 alert(`Bạn sinh ngày ${date} tháng ${month} năm ${year}\nBạn thuộc cung xử nữ`);
//             }else{
//                 alert("Không có ngày bạn nhập.")}
//             break;
//         case 9:
//             if(date <= 22 && date > 0){
//                 alert(`Bạn sinh ngày ${date} tháng ${month} năm ${year}\nBạn thuộc cung xử nữ`);
//             }
//             else if(date > 22 && date<= 30){
//                 alert(`Bạn sinh ngày ${date} tháng ${month} năm ${year}\nBạn thuộc cung thiên bình`);
//             }else{
//                 alert("Không có ngày bạn nhập.")}
//             break;                
//         case 10:
//             if(date <= 23 && date > 0){
//                 alert(`Bạn sinh ngày ${date} tháng ${month} năm ${year}\nBạn thuộc cung thiên bình`);
//             }
//             else if(date > 23 && date<= 31){
//                 alert(`Bạn sinh ngày ${date} tháng ${month} năm ${year}\nBạn thuộc cung hổ cáp`);
//             }else{
//                 alert("Không có ngày bạn nhập.")}
//             break;            
//             case 11:
//             if(date <= 21 && date > 0){
//                 alert(`Bạn sinh ngày ${date} tháng ${month} năm ${year}\nBạn thuộc cung hổ cáp`);
//             }
//             else if(date > 21 && date<= 30){
//                 alert(`Bạn sinh ngày ${date} tháng ${month} năm ${year}\nBạn thuộc cung nhân mã`);
//             }else{
//                 alert("Không có ngày bạn nhập. ")}
//             break;            
//         case 12:
//             if(date <= 21 && date > 0){
//                 alert(`Bạn sinh ngày ${date} tháng ${month} năm ${year}\nBạn thuộc cung nhân mã`);
//             }
//             else if(date > 21 && date<= 31){
//                 alert(`Bạn sinh ngày ${date} tháng ${month} năm ${year}\nBạn thuộc cung ma kết`);
//             }else{
//                 alert("Không có ngày bạn nhập. ")}
//             break;     
//         default: alert("bạn nhập thông tin bị sai");
//         break;
//             }
//         }
//
// Câu 13: prompt nhập 3 số a b c. tìm và in ra nghiệm pt bậc 2
// let a = Number(prompt("nhập số a vào đây nhé"));
// let b = Number(prompt("nhập số b vào đây nhé"));
// let c = Number(prompt("nhập số c vào đây nhé"));
// let delta = Math.pow(b,2) - 4 * a *c;
// if(delta < 0){
//     alert("Phương trình vô nghiệm")
// }else if(delta = 0){
//     alert(`Phương trình có nghiệm kép là x = ${-b / (2 * a)}`)
// }else{
//     alert(`Phương trình có 2 nghiệm là x1 = ${(-b + Math.sqrt(delta))/(2 * a)} và x2 = ${(-b - Math.sqrt(delta) / (2 * a))}`)
// }

///Câu 14: prompt nhập 3 số a b c tương ứng vs 3 cạnh of 1 tam giac kiem tra đây có phải la 1 tam giac hay khong
// let a = Number(prompt("nhập số a vào là 1 cạnh của tam giác"));
// let b = Number(prompt("nhập số b vào là 1 cạnh của tam giác"));
// let c = Number(prompt("nhập số c vào là 1 cạnh của tam giác"));
// if( a + b > c && b + c > a && a + c > b){
//     alert("Tạo thành 1 hình tam giác")
// }else{alert("Không phải là 1 hình tam giác")}
//
//













