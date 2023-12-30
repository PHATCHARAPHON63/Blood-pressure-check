document.addEventListener('DOMContentLoaded', function () {
  var modeSwitch = document.querySelector('.mode-switch');

  modeSwitch.addEventListener('click', function () {                     document.documentElement.classList.toggle('dark');
    modeSwitch.classList.toggle('active');
  });
  


});




let submit = document.querySelector("#submit"),
  reset = document.querySelector("#reset");
submit.addEventListener("click", getBMI, false);
reset.addEventListener("click", resetBMI, false);

let dataBMI = JSON.parse(localStorage.getItem("BMI")) || [];

function resetBMI(e) {
  e.preventDefault();
  window.location.reload();
}





function getBMI(e) {
  e.preventDefault();
  var checkBox = document.getElementById("myCheckbox");

  let SBP = parseFloat(document.querySelector("#SBP").value),
  DBP = parseFloat(document.querySelector("#DBP").value);
  FBS = parseFloat(document.querySelector("#FBS").value);

  var code ;
  let answer = "",
      advice = "";
      if (checkBox.checked) {
        if (SBP && DBP && FBS){
          if (SBP <= 139 ) {
            code = "3";
            answer = "สีเขียวเข้ม (กลุ่มป่วย)";
            advice =  "- เน้นกิจกรรม 3 อ. 3 ล. 1ย. ได้แก่ อาหาร ออกกำลังกาย อารมณ์"+
                      "<br>ลด/เลิกบุหรี่และเครื่องดื่มแอลกอฮอล์"+
                      "<br>ลดการรับประทานอาหาร หวาน มัน เค็ม"+
                      "<br>วัดความดันโลหิตทุกเดือน และตรวจน้ำตาลในเลือดทุก 2-3  เดือน";
                      if (code == "3") {
                        document.getElementById("circle").classList.add("Dark_green");
                    }
                      let adviceBox = document.getElementById("A_advice");
                      if (advice) {
                        adviceBox.classList.add("advice-box", "visible");
                        adviceBox.innerHTML = advice;
                  }   else {
                        adviceBox.classList.remove("advice-box", "visible");
                        adviceBox.innerHTML = "";
                    }
          } else if ((SBP >= 140 && SBP < 160)) {
            code = "4";
            answer = "สีเหลือง (กลุ่มป่วย)";
            advice =  "- จัดทำสมุดประจำตัว"+
                      "<br>- กรณีเป็นเบาหวาน ป้องกันภาวะแทรกซ้อน เช่น การตรวจตา, ตรวจเท้า, ตรวจปัสสาวะอย่างน้อยปีละ1 ครั้ง"+
                      "<br>- กรณีเป็นความดัน ป้องกันภาวะแทรกซ้อนจากโรคหัวใจ สมอง ไตวาย เช่น กรตรวจตา"+ 
                      "<br>- ตรวจการทำการทำงานของไตและหัวใจอย่างน้อยปีละ1 ครั้ง";
                      if (code == "4") {
                        document.getElementById("circle").classList.add("Yellow");
                    }
                    let adviceBox = document.getElementById("A_advice");
                    if (advice) {
                      adviceBox.classList.add("advice-box", "visible");
                      adviceBox.innerHTML = advice;
                }   else {
                      adviceBox.classList.remove("advice-box", "visible");
                      adviceBox.innerHTML = "";
                  }
          } else if (((SBP >= 160 && SBP < 180  ))) {
            code = "5";
            answer = "สีส้ม (กลุ่มป่วย)";
            advice =  "- วัดความดันโลหิตทุก 1-3 เดือน"+
                      "<br>- ลดการบริโภคอาหาร มัน เค็ม"+
                      "<br>- ป้องกันภาวะแทรกซ้อนจากโรคหัวใจ สมอง ไตวาย"+
                      "<br>- ตรวจการทำงานของไต"+
                      "<br>-ตรวจหัวใจอย่างน้อยปีละ 1 ครั้ง"+
                      "<br>-พบแพทย์ตามนัดทุก 4 สัปดาห์ หรือมีอาการผิดปกติ";
                      if (code == "5") {
                        document.getElementById("circle").classList.add("Orange");
                    }
                    let adviceBox = document.getElementById("A_advice");
                    if (advice) {
                      adviceBox.classList.add("advice-box", "visible");
                      adviceBox.innerHTML = advice;
                }   else {
                      adviceBox.classList.remove("advice-box", "visible");
                      adviceBox.innerHTML = "";
                  }
      
          } else if (SBP == 180  ) {
            code = "6";
            answer = "สีแดง (กลุ่มป่วย)";
            advice =  "- วัดความดันโลหิตทุก 1-3 เดือน"+
                      "<br>- ลดการบริโภคอาหาร มัน เค็ม"+
                      "<br>- ป้องกันภาวะแทรกซ้อนจากโรคหัวใจ สมอง ไตวาย"+
                      "<br>- ตรวจการทำงานของไต"+
                      "<br>- ตรวจหัวใจอย่างน้อยปีละ 1 ครั้ง"+
                      "<br>-พบแพทย์ตามนัดทุก 4 สัปดาห์ หรือมีอาการผิดปกติ";
                      if (code == "6") {
                        document.getElementById("circle").classList.add("red");
                    }
                    let adviceBox = document.getElementById("A_advice");
                    if (advice) {
                      adviceBox.classList.add("advice-box", "visible");
                      adviceBox.innerHTML = advice;
                }   else {
                      adviceBox.classList.remove("advice-box", "visible");
                      adviceBox.innerHTML = "";
                  }
      
          } else if ( SBP > 180 ) {
            code = "7"
            answer = "สีดำ (กลุ่มมีโรคแทรกซ้อน)";
            advice =  "- รีบโทรศัพท์รายงานเจ้าหน้าที่ให้ทราบเพื่อส่งต่อผู้บริการไปยังโรงพยาบาล "+
                      "<br>- หลังผู้รับบริการกลับจากโรงพยาบาลควรเยี่ยมบ้านผู้ป่วยเป็นระยะเฝ้าระวังความรุนแรงของ"+
                      "<br>- โรคแทรกซ้อน เช่น ความรุนแรงจากโรคหัวใจโรคหลอดเลือดสมอง ตาบอด เป็นต้น";
                      if (code == "7") {
                        document.getElementById("circle").classList.add("black");
                    }
                    let adviceBox = document.getElementById("A_advice");
                    if (advice) {
                      adviceBox.classList.add("advice-box", "visible");
                      adviceBox.innerHTML = advice;
                }   else {
                      adviceBox.classList.remove("advice-box", "visible");
                      adviceBox.innerHTML = "";
                  }
          }
      }else if( (isNaN(SBP)) && (isNaN(DBP)) && FBS ){
        
        if (FBS <= 125) {
          code = "3";
          answer = "สีเขียวเข้ม (กลุ่มป่วย)";
          advice =  "- เน้นกิจกรรม 3 อ. 3 ล. 1ย. ได้แก่ อาหาร ออกกำลังกาย อารมณ์"+
                    "<br>- ลด/เลิกบุหรี่และเครื่องดื่มแอลกอฮอล์"+
                    "<br>- ลดการรับประทานอาหาร หวาน มัน เค็ม"+
                    "<br>- วัดความดันโลหิตทุกเดือน และตรวจน้ำตาลในเลือดทุก 2-3  เดือน";
                    if (code == "3") {
                      document.getElementById("circle").classList.add("Dark_green");
                  }
                  let adviceBox = document.getElementById("A_advice");
                  if (advice) {
                    adviceBox.classList.add("advice-box", "visible");
                    adviceBox.innerHTML = advice;
              }   else {
                    adviceBox.classList.remove("advice-box", "visible");
                    adviceBox.innerHTML = "";
                }
        } else if ( FBS > 125 && FBS <= 154 ) {
          code = "4";
          answer = "สีเหลือง (กลุ่มป่วย)";
          advice =  "- จัดทำสมุดประจำตัว"+
                    "<br>- กรณีเป็นเบาหวาน ป้องกันภาวะแทรกซ้อน เช่น การตรวจตา, ตรวจเท้า, ตรวจปัสสาวะอย่างน้อยปีละ1 ครั้ง"+
                    "<br>- กรณีเป็นความดัน ป้องกันภาวะแทรกซ้อนจากโรคหัวใจ สมอง ไตวาย เช่น กรตรวจตา"+ 
                    "<br>- ตรวจการทำการทำงานของไตและหัวใจอย่างน้อยปีละ1 ครั้ง";
                    if (code == "4") {
                      document.getElementById("circle").classList.add("Yellow");
                  }
                  let adviceBox = document.getElementById("A_advice");
                  if (advice) {
                    adviceBox.classList.add("advice-box", "visible");
                    adviceBox.innerHTML = advice;
              }   else {
                    adviceBox.classList.remove("advice-box", "visible");
                    adviceBox.innerHTML = "";
                }
        } else if ( FBS >= 155 && FBS <= 182 ) {
          code = "5";
          answer = "สีส้ม (กลุ่มป่วย)";
          advice =  "- วัดความดันโลหิตทุก 1-3 เดือน"+
                    "<br>- ลดการบริโภคอาหาร มัน เค็ม"+
                    "<br>- ป้องกันภาวะแทรกซ้อนจากโรคหัวใจ สมอง ไตวาย"+
                    "<br>- ตรวจการทำงานของไต"+
                    "<br>- ตรวจหัวใจอย่างน้อยปีละ 1 ครั้ง"+
                    "<br>- พบแพทย์ตามนัดทุก 4 สัปดาห์ หรือมีอาการผิดปกติ";
                    if (code == "5") {
                      document.getElementById("circle").classList.add("Orange");
                  }
                  let adviceBox = document.getElementById("A_advice");
                  if (advice) {
                    adviceBox.classList.add("advice-box", "visible");
                    adviceBox.innerHTML = advice;
              }   else {
                    adviceBox.classList.remove("advice-box", "visible");
                    adviceBox.innerHTML = "";
                }
      
        } else if ( FBS >= 183 ) {
          code = "6";
          answer = "สีแดง (กลุ่มป่วย)";
          advice =  "- วัดความดันโลหิตทุก 1-3 เดือน"+
                    "<br>- ลดการบริโภคอาหาร มัน เค็ม"+
                    "<br>- ป้องกันภาวะแทรกซ้อนจากโรคหัวใจ สมอง ไตวาย"+
                    "<br>- ตรวจการทำงานของไต"+
                    "<br>- ตรวจหัวใจอย่างน้อยปีละ 1 ครั้ง"+
                    "<br>- พบแพทย์ตามนัดทุก 4 สัปดาห์ หรือมีอาการผิดปกติ";
                    if (code == "6") {
                      document.getElementById("circle").classList.add("red");
                  }
                  let adviceBox = document.getElementById("A_advice");
                  if (advice) {
                    adviceBox.classList.add("advice-box", "visible");
                    adviceBox.innerHTML = advice;
              }   else {
                    adviceBox.classList.remove("advice-box", "visible");
                    adviceBox.innerHTML = "";
                }
        }
      
      }else if (SBP && DBP && (isNaN(FBS))) {
          if (SBP <= 139) {
            code = "3";
            answer = "สีเขียวเข้ม (กลุ่มป่วย)";
            advice =  "- เน้นกิจกรรม 3 อ. 3 ล. 1ย. ได้แก่ อาหาร ออกกำลังกาย อารมณ์"+
                      "<br>- ลด/เลิกบุหรี่และเครื่องดื่มแอลกอฮอล์"+
                      "<br>- ลดการรับประทานอาหาร หวาน มัน เค็ม"+
                      "<br>- วัดความดันโลหิตทุกเดือน และตรวจน้ำตาลในเลือดทุก 2-3  เดือน";
                      if (code == "3") {
                        document.getElementById("circle").classList.add("Dark_green");
                    }
                    let adviceBox = document.getElementById("A_advice");
                    if (advice) {
                      adviceBox.classList.add("advice-box", "visible");
                      adviceBox.innerHTML = advice;
                }   else {
                      adviceBox.classList.remove("advice-box", "visible");
                      adviceBox.innerHTML = "";
                  }
          } else if ((SBP >= 140 && SBP < 160) ) {
            code = "4";
            answer = "สีเหลือง (กลุ่มป่วย)";
            advice =  "- จัดทำสมุดประจำตัว"+
                      "<br>- กรณีเป็นเบาหวาน ป้องกันภาวะแทรกซ้อน เช่น การตรวจตา, ตรวจเท้า, ตรวจปัสสาวะอย่างน้อยปีละ1 ครั้ง"+
                      "<br>- กรณีเป็นความดัน ป้องกันภาวะแทรกซ้อนจากโรคหัวใจ สมอง ไตวาย เช่น กรตรวจตา"+ 
                      "<br>- ตรวจการทำการทำงานของไตและหัวใจอย่างน้อยปีละ1 ครั้ง";
                      if (code == "4") {
                        document.getElementById("circle").classList.add("Yellow");
                    }
                    let adviceBox = document.getElementById("A_advice");
                    if (advice) {
                      adviceBox.classList.add("advice-box", "visible");
                      adviceBox.innerHTML = advice;
                }   else {
                      adviceBox.classList.remove("advice-box", "visible");
                      adviceBox.innerHTML = "";
                  }
          } else if ( SBP >= 160 && SBP < 180  ) {
            code = "5";
            answer = "สีส้ม (กลุ่มป่วย)";
            advice =  "- วัดความดันโลหิตทุก 1-3 เดือน"+
                      "<br>- ลดการบริโภคอาหาร มัน เค็ม"+
                      "<br>- ป้องกันภาวะแทรกซ้อนจากโรคหัวใจ สมอง ไตวาย"+
                      "<br>- ตรวจการทำงานของไต"+
                      "<br>- ตรวจหัวใจอย่างน้อยปีละ 1 ครั้ง"+
                      "<br>- พบแพทย์ตามนัดทุก 4 สัปดาห์ หรือมีอาการผิดปกติ";
                      if (code == "5") {
                        document.getElementById("circle").classList.add("Orange");
                    }
                    let adviceBox = document.getElementById("A_advice");
                    if (advice) {
                      adviceBox.classList.add("advice-box", "visible");
                      adviceBox.innerHTML = advice;
                }   else {
                      adviceBox.classList.remove("advice-box", "visible");
                      adviceBox.innerHTML = "";
                  }
      
          } else if (SBP == 180 ) {
            code = "6";
            answer = "สีแดง (กลุ่มป่วย)";
            advice =  "- วัดความดันโลหิตทุก 1-3 เดือน"+
                      "<br>- ลดการบริโภคอาหาร มัน เค็ม"+
                      "<br>- ป้องกันภาวะแทรกซ้อนจากโรคหัวใจ สมอง ไตวาย"+
                      "<br>- ตรวจการทำงานของไต"+
                      "<br>- ตรวจหัวใจอย่างน้อยปีละ 1 ครั้ง"+
                      "<br>- พบแพทย์ตามนัดทุก 4 สัปดาห์ หรือมีอาการผิดปกติ";
                      if (code == "6") {
                        document.getElementById("circle").classList.add("red");
                    }
                    let adviceBox = document.getElementById("A_advice");
                    if (advice) {
                      adviceBox.classList.add("advice-box", "visible");
                      adviceBox.innerHTML = advice;
                }   else {
                      adviceBox.classList.remove("advice-box", "visible");
                      adviceBox.innerHTML = "";
                  }
      
          } else if (SBP > 180 ) {
            code = "7"
            answer = "สีดำ (กลุ่มมีโรคแทรกซ้อน)";
            advice =  "- รีบโทรศัพท์รายงานเจ้าหน้าที่ให้ทราบเพื่อส่งต่อผู้บริการไปยังโรงพยาบาล "+
                      "<br>- หลังผู้รับบริการกลับจากโรงพยาบาลควรเยี่ยมบ้านผู้ป่วยเป็นระยะเฝ้าระวังความรุนแรงของ"+
                      "<br>- โรคแทรกซ้อน เช่น ความรุนแรงจากโรคหัวใจโรคหลอดเลือดสมอง ตาบอด เป็นต้น";
                      if (code == "7") {
                        document.getElementById("circle").classList.add("black");
                    }
                    let adviceBox = document.getElementById("A_advice");
                    if (advice) {
                      adviceBox.classList.add("advice-box", "visible");
                      adviceBox.innerHTML = advice;
                }   else {
                      adviceBox.classList.remove("advice-box", "visible");
                      adviceBox.innerHTML = "";
                  }
          }
      }else{
        alert("กรุณากรอกข้อมูล");
        return;
      }
      //return;
    }else {
      if (SBP && DBP && FBS){
        if (SBP <= 120  ) {
          code = "1";
          answer = "สีขาว(กลุ่มปกติ)";
          advice = "- เน้นกิจกรรม 3 อ. 3 ล. ได้แก่ อาหาร ออกกำลังกาย อารมณ์"+
                  "<br>- ลด/เลิกบุหรี่และเครื่องดื่มแอลกอฮอล์" +
                  "<br>- ลดการรับประทานอาหาร หวาน มัน เค็ม";
                  if (code == "1") {
                    document.getElementById("circle").classList.add("white");
                }
                  let adviceBox = document.getElementById("A_advice");
                  if (advice) {
                    adviceBox.classList.add("advice-box", "visible");
                    adviceBox.innerHTML = advice;
                } else {
                    adviceBox.classList.remove("advice-box", "visible");
                    adviceBox.innerHTML = "";
                  }
        } else if ((SBP >= 121 ) ) {
          code = "2";
          answer = "สีเขียวอ่อน (กลุ่มเสี่ยง)";
          advice =  "- เน้นกิจกรรม 3 อ. 3 ล. ได้แก่ อาหาร ออกกำลังกาย อารมณ์"+
                    "<br>- ลด/เลิกบุหรี่และเครื่องดื่มแอลกอฮอล์"+
                    "<br>- ลดการรับประทานอาหาร หวาน มัน เค็ม"+
                    "<br>- วัดความดันโลหิตทุกเดือน และตรวจน้ำตาลในเลือดทุก 1-3  เดือน";
                    if (code == "2") {
                      document.getElementById("circle").classList.add("Light_green");
                  }
                    let adviceBox = document.getElementById("A_advice");
                    if (advice) {
                      adviceBox.classList.add("advice-box", "visible");
                      adviceBox.innerHTML = advice;
                  }   else {
                      adviceBox.classList.remove("advice-box", "visible");
                      adviceBox.innerHTML = "";
                  }
        }
    }else if( (isNaN(SBP)) && (isNaN(DBP)) && FBS ){
      
      if (FBS <= 100 ) {
        code = "1";
        answer = "สีขาว(กลุ่มปกติ)";
        advice = "- เน้นกิจกรรม 3 อ. 3 ล. ได้แก่ อาหาร ออกกำลังกาย อารมณ์" +
                "<br>- ลด/เลิกบุหรี่และเครื่องดื่มแอลกอฮอล์" +
                "<br>- ลดการรับประทานอาหาร หวาน มัน เค็ม";
                if (code == "1") {
                  document.getElementById("circle").classList.add("white");
              }
              let adviceBox = document.getElementById("A_advice");
              if (advice) {
                adviceBox.classList.add("advice-box", "visible");
                adviceBox.innerHTML = advice;
          }   else {
                adviceBox.classList.remove("advice-box", "visible");
                adviceBox.innerHTML = "";
            }
    
      } else if (FBS >= 101 ) {
        code = "2";
        answer = "สีเขียวอ่อน (กลุ่มเสี่ยง)";
        advice =  "- เน้นกิจกรรม 3 อ. 3 ล. ได้แก่ อาหาร ออกกำลังกาย อารมณ์"+
                  "<br>- ลด/เลิกบุหรี่และเครื่องดื่มแอลกอฮอล์"+
                  "<br>- ลดการรับประทานอาหาร หวาน มัน เค็ม"+
                  "<br>- วัดความดันโลหิตทุกเดือน และตรวจน้ำตาลในเลือดทุก 1-3  เดือน";
                  if (code == "2") {
                    document.getElementById("circle").classList.add("Light_green");
                }
                let adviceBox = document.getElementById("A_advice");
                if (advice) {
                  adviceBox.classList.add("advice-box", "visible");
                  adviceBox.innerHTML = advice;
            }   else {
                  adviceBox.classList.remove("advice-box", "visible");
                  adviceBox.innerHTML = "";
              }
      } 
    }else if (SBP && DBP && (isNaN(FBS))) {
    
        if (SBP <= 120  ) {
          code = "1";
          answer = "สีขาว(กลุ่มปกติ)";
          advice = "- เน้นกิจกรรม 3 อ. 3 ล. ได้แก่ อาหาร ออกกำลังกาย อารมณ์" +
                  "<br>- ลด/เลิกบุหรี่และเครื่องดื่มแอลกอฮอล์" +
                  "<br>- ลดการรับประทานอาหาร หวาน มัน เค็ม";
                  if (code == "1") {
                    document.getElementById("circle").classList.add("white");
                }
                let adviceBox = document.getElementById("A_advice");
                if (advice) {
                  adviceBox.classList.add("advice-box", "visible");
                  adviceBox.innerHTML = advice;
            }   else {
                  adviceBox.classList.remove("advice-box", "visible");
                  adviceBox.innerHTML = "";
              }
    
        } else if ((SBP >= 121) ) {
          code = "2";
          answer = "สีเขียวอ่อน (กลุ่มเสี่ยง)";
          advice =  "- เน้นกิจกรรม 3 อ. 3 ล. ได้แก่ อาหาร ออกกำลังกาย อารมณ์"+
                    "<br>- ลด/เลิกบุหรี่และเครื่องดื่มแอลกอฮอล์"+
                    "<br>- ลดการรับประทานอาหาร หวาน มัน เค็ม"+
                    "<br>- วัดความดันโลหิตทุกเดือน และตรวจน้ำตาลในเลือดทุก 1-3  เดือน";
                    if (code == "2") {
                      document.getElementById("circle").classList.add("Light_green");
                  }
                  let adviceBox = document.getElementById("A_advice");
                  if (advice) {
                    adviceBox.classList.add("advice-box", "visible");
                    adviceBox.innerHTML = advice;
              }   else {
                    adviceBox.classList.remove("advice-box", "visible");
                    adviceBox.innerHTML = "";
                }
        }
    }else{
      alert("กรุณากรอกข้อมูล");
      return;
    }
  }
 let str = document.createElement("span");
    str.innerHTML = "<em>" + answer + "</em><br>";
    
    let el = document.querySelector("#A_answer");
    el.innerHTML = "";
    el.appendChild(str);
    
    let str1 = document.createElement("span");
    str1.innerHTML = "<em>" + advice + "</em><br>";  // แก้ไขบรรทัดนี้
    
    let Ej = document.querySelector("#A_advice");
    Ej.innerHTML = "";
    Ej.appendChild(str1);
}
