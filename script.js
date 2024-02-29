function submitQuiz() {
    // Lấy thông tin người dùng
    var fullName = document.getElementById('fullName').value;
    var dob = document.getElementById('dob').value;
    var studentID = document.getElementById('studentID').value;
    var classInfo = document.getElementById('class').value;

    var tong=0;
    var q1Result = document.querySelector('input[name="c1"]:checked').value
    if (q1Result==="Đúng") tong+=1
    var q2Result = document.querySelector('input[name="c2"]:checked').value
    if (q2Result==="Đúng") tong+=1
    var q3Result = document.querySelector('input[name="c3"]:checked').value
    if (q3Result==="Đúng") tong+=1
    var q4Result = document.querySelector('input[name="c4"]:checked').value
    if (q4Result==="Sai") tong+=1
    var q5Result = document.querySelector('input[name="c5"]:checked').value
    if (q5Result==="Sai") tong+=1
    var q6Result = document.querySelector('input[name="c6"]:checked').value
    if (q6Result==="Đúng") tong+=1
    var q7Result = document.querySelector('input[name="c7"]:checked').value
    if (q7Result==="Đúng") tong+=1
    var q8Result = document.querySelector('input[name="c8"]:checked').value
    if (q8Result==="Sai") tong+=1
    var q9Result = document.querySelector('input[name="c9"]:checked').value
    if (q9Result==="Sai") tong+=1
    var q10Result = document.querySelector('input[name="c10"]:checked').value
    if (q10Result==="Đúng") tong+=1

    var q11Result = document.querySelector('input[name="c11"]:checked').value
    if (q11Result==="a") tong+=1
    var q12Result = document.querySelector('input[name="c12"]:checked').value
    if (q12Result==="a") tong+=1
    var q13Result = document.querySelector('input[name="c13"]:checked').value
    if (q13Result==="d") tong+=1
    var q14Result = document.querySelector('input[name="c14"]:checked').value
    if (q14Result==="d") tong+=1
    var q15Result = document.querySelector('input[name="c15"]:checked').value
    if (q15Result==="b") tong+=1
    var q16Result = document.querySelector('input[name="c16"]:checked').value
    if (q16Result==="c") tong+=1
    var q17Result = document.querySelector('input[name="c17"]:checked').value
    if (q17Result==="b") tong+=1
    var q18Result = document.querySelector('input[name="c18"]:checked').value
    if (q18Result==="b") tong+=1
    var q19Result = document.querySelector('input[name="c19"]:checked').value
    if (q19Result==="c") tong+=1
    var q20Result = document.querySelector('input[name="c20"]:checked').value
    if (q20Result==="c") tong+=1
    
    var q21Results = [];
    var da21=["a","c"]
    var q21Checkboxes = document.querySelectorAll('input[name="c21"]:checked');
    q21Checkboxes.forEach(function (checkbox) {
        q21Results.push(checkbox.value);
    });
    if (q21Results.length === da21.length && q21Results.every((value, index) => value === da21[index])) tong+=1

    var q22Results = [];
    var da22=["a","b","d"]
    var q22Checkboxes = document.querySelectorAll('input[name="c22"]:checked');
    q22Checkboxes.forEach(function (checkbox) {
        q22Results.push(checkbox.value);
    });
    if (q22Results.length === da22.length && q22Results.every((value, index) => value === da22[index])) tong+=1

    var q23Results = [];
    var da23=["a","d"]
    var q23Checkboxes = document.querySelectorAll('input[name="c23"]:checked');
    q23Checkboxes.forEach(function (checkbox) {
        q23Results.push(checkbox.value);
    });
    if (q23Results.length === da23.length && q23Results.every((value, index) => value === da23[index])) tong+=1

    var q24Results = [];
    var da24=["b","c"]
    var q24Checkboxes = document.querySelectorAll('input[name="c24"]:checked');
    q24Checkboxes.forEach(function (checkbox) {
        q24Results.push(checkbox.value);
    });
    if (q24Results.length === da24.length && q24Results.every((value, index) => value === da24[index])) tong+=1

    var q25Results = [];
    var da25=["a","d"]
    var q25Checkboxes = document.querySelectorAll('input[name="c25"]:checked');
    q25Checkboxes.forEach(function (checkbox) {
        q25Results.push(checkbox.value);
    });
    if (q25Results.length === da25.length && q25Results.every((value, index) => value === da25[index])) tong+=1

    var q26Results = [];
    var da26=["b","d"]
    var q26Checkboxes = document.querySelectorAll('input[name="c26"]:checked');
    q26Checkboxes.forEach(function (checkbox) {
        q26Results.push(checkbox.value);
    });
    if (q26Results.length === da26.length && q26Results.every((value, index) => value === da26[index])) tong+=1

    var q27Results = [];
    var da27=["a","b", "d"]
    var q27Checkboxes = document.querySelectorAll('input[name="c27"]:checked');
    q27Checkboxes.forEach(function (checkbox) {
        q27Results.push(checkbox.value);
    });
    if (q27Results.length === da27.length && q27Results.every((value, index) => value === da27[index])) tong+=1

    var q28Results = [];
    var da28=["b","c"]
    var q28Checkboxes = document.querySelectorAll('input[name="c28"]:checked');
    q28Checkboxes.forEach(function (checkbox) {
        q28Results.push(checkbox.value);
    });
    if (q28Results.length === da28.length && q28Results.every((value, index) => value === da28[index])) tong+=1

    var q29Results = [];
    var da29=["a"]
    var q29Checkboxes = document.querySelectorAll('input[name="c29"]:checked');
    q29Checkboxes.forEach(function (checkbox) {
        q29Results.push(checkbox.value);
    });
    if (q29Results.length === da29.length && q29Results.every((value, index) => value === da29[index])) tong+=1

    var q30Results = [];
    var da30=["a","c","b","d"]
    var q30Checkboxes = document.querySelectorAll('input[name="c30"]:checked');
    q30Checkboxes.forEach(function (checkbox) {
        q30Results.push(checkbox.value);
    });
    if (q30Results.length === da30.length && q30Results.every((value, index) => value === da30[index])) tong+=1

    var q31Result = document.getElementById('c31').value
    if (q31Result==="Robert Peel") tong+=1

    var q32Result = document.getElementById('c32').value
    if (q32Result==="Ag") tong+=1

    var q33Result = document.getElementById('c33').value
    if (q33Result==="Shawy") tong+=1

    var q34Result = document.getElementById('c34').value
    if (q34Result==="Chim ưng") tong+=1

    var q35Result = document.getElementById('c35').value
    if (q35Result==="Lewis Collins và Martin Shaw") tong+=1

    var q36Result = document.getElementById('c36').value
    if (q36Result==="Barbara Millicent Roberts") tong+=1

    var q37Result = document.getElementById('c37').value
    if (q37Result==="Ợ lớn nhất") tong+=1

    var q38Result = document.getElementById('c38').value
    if (q38Result==="Một nhân viên bán đồ nội thất đã qua sử dụng") tong+=1

    var q39Result = document.getElementById('c39').value
    if (q39Result==="24 giờ") tong+=1

    var q40Result = document.getElementById('c40').value
    if (q40Result==="1947") tong+=1

    // Hiển thị kết quả
    displayResult(fullName, dob, studentID, classInfo, tong,/*thêm tham số kết quả ở đây*/);
}

function displayResult(fullName, dob, studentID, classInfo, tong,/*kết quả*/) {
    var resultContainer = document.getElementById('result');
    var resultHTML = `
        
        <p><strong>Kết quả:</strong> ${tong}/30</p>
    `;

    resultContainer.innerHTML = resultHTML;
    resultContainer.style.display = 'block';
}
