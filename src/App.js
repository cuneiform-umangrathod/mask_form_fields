import { useFormik } from "formik";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const initialValues = {
    num1: "",
    num2: "",
    num3: "",
    num4: "",
  };

  const formik = useFormik({
    initialValues,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
    },
  });

  const [listArr, setListArr] = useState();
  const [fieldName, setFieldName] = useState('num1');


  // handle Change function

  const handleChange = (e) => {
    const checkNum = e.target.value;
    const name = e.target.name;
    let temp = [];
    const reg = /\d/;
    const regAlpha = /[a-z,A-Z]/;
    let str;

    if (regAlpha.test(checkNum)) {
      return;
    }

    for (let i = 0; i < checkNum.length; i++) {
      if (reg.test(checkNum.charAt(i))) {
        temp.push(checkNum.charAt(i));
      }
    }

    for (let i = 0; i < listArr.length; i++) {
      if (listArr[i] === "_") {
        setListArr((listArr[i] = temp[temp.length - 1]));
        break;
      }
    }
    setListArr(listArr);
    str = listArr.join("");

    formik.setFieldValue(name, str);


    // switch (name) {
    //   case "num1":
        

    //     // let check3 = e.target.value;
    //     // formik.setFieldValue("num1",  check3.replace("_",""));
    //     break;

    //   case "num2":
    //     for (let i = 0; i < listArr.length; i++) {
    //       if (listArr[i] === "_") {
    //         listArr[i] = temp[temp.length - 1];
    //         break;
    //       }
    //     }
    //     setListArr(listArr);
    //     str = listArr.join("");
    //     break;

    //   case "num3":
    //     for (let i = 0; i < listArr3.length; i++) {
    //       if (listArr3[i] === "_") {
    //         listArr3[i] = temp[temp.length - 1];
    //         break;
    //       }
    //     }
    //     setListArr3(listArr3);
    //     str = listArr3.join("");
    //     formik.setFieldValue("num3", str);
    //     break;

    //   case "num4":
    //     for (let i = 0; i < listArr4.length; i++) {
    //       if (listArr4[i] === "_") {
    //         listArr4[i] = temp[temp.length - 1];
    //         break;
    //       }
    //     }
    //     setListArr4(listArr4);
    //     str = listArr4.join("");
    //     break;
    // }

  };

  //Handle Backspace Fucntion

  const handleBackspace = (e) => {
    let check = e.target.selectionStart - 1;
    const name = e.target.name;
    const reg = /\d/;

    if (!reg.test(listArr[check])) {
      check = check - 1;
      if (!reg.test(listArr[check])) {
        check = check - 1;
      }
    }

    listArr.splice(check, 1, "_");
    formik.setFieldValue(name, listArr.join(""));

    // switch (e.target.name) {
    //   case "num1":
    
    //     break;

    //   case "num2":
    //     if (!reg.test(listArr2[check])) {
    //       check = check - 1;
    //       if (!reg.test(listArr2[check])) {
    //         check = check - 1;
    //       }
    //     }

    //     listArr2.splice(check, 1, "_");
    //     formik.setFieldValue("num2", listArr2.join(""));

    //     break;

    //   case "num3":
    //     if (!reg.test(listArr3[check])) {
    //       check = check - 1;
    //       if (!reg.test(listArr3[check])) {
    //         check = check - 1;
    //       }
    //     }

    //     listArr3.splice(check, 1, "_");
    //     formik.setFieldValue("num3", listArr3.join(""));

    //     break;

    //   case "num4":
    //     if (!reg.test(listArr4[check])) {
    //       check = check - 1;
    //       if (!reg.test(listArr4[check])) {
    //         check = check - 1;
    //       }
    //     }

    //     listArr4.splice(check, 1, "_");
    //     formik.setFieldValue("num4", listArr4.join(""));

    //     break;
    // }
    // if (!reg.test(listArr[check])) {
    //   check = check - 1;
    //   if (!reg.test(listArr[check])) {
    //     check = check - 1;
    //   }
    // }

    // listArr.splice(check, 1, "_");
    // formik.setFieldValue("num1", listArr.join(""));

    //   const reg = /\d/;
    //   let arr = [];

    //   for (let i = 0; i < checkNum.length; i++) {
    //     if (reg.test(checkNum.at(i))) {
    //       arr.push(checkNum.at(i));
    //     }
    //   }
    //   arr.splice(check - 1, 1);
    //
    //
  };

  const handleClick = (e) => {
    const check = e.target.selectionStart;
    const regex = /\d/;
    const name = e.target.name;
    console.log('name: ', formik.values[name]);

    if (!regex.test(formik.values[name].charAt(check - 1))) {
      e.target.setSelectionRange(
        formik.values[name].indexOf("_"),
        formik.values[name].indexOf("_")
      );
    }

    // switch (e.target.name) {
    //   case "num1":
    //     if (!regex.test(formik.values.num1.charAt(check - 1))) {
    //       e.target.setSelectionRange(
    //         formik.values.num1.indexOf("_"),
    //         formik.values.num1.indexOf("_")
    //       );
    //     }
    //     break;
    //   case "num2":
    //     if (!regex.test(formik.values.num2.charAt(check - 1))) {
    //       e.target.setSelectionRange(
    //         formik.values.num2.indexOf("_"),
    //         formik.values.num2.indexOf("_")
    //       );
    //     }
    //     break;
    //   case "num3":
    //     if (!regex.test(formik.values.num3.charAt(check - 1))) {
    //       e.target.setSelectionRange(
    //         formik.values.num3.indexOf("_"),
    //         formik.values.num3.indexOf("_")
    //       );
    //     }
    //     break;

    //   case "num4":
    //     if (!regex.test(formik.values.num4.charAt(check - 1))) {
    //       e.target.setSelectionRange(
    //         formik.values.num4.indexOf("_"),
    //         formik.values.num4.indexOf("_")
    //       );
    //     }
    //     break;
    // }


  };

  useEffect(() => {
    document
      .getElementById(fieldName)
      .setSelectionRange(
        formik.values[fieldName].indexOf("_"),
        formik.values[fieldName].indexOf("_")
      );

  }, [
    formik.values.num1,
    formik.values.num2,
    formik.values.num3,
    formik.values.num4,
  ]);

  // document.getElementById("num3").addEventListener("keyup", (e) => {
  //
  // });

  return (
    <div className="App">
      <form onSubmit={formik.handleSubmit}>
        <div>
          <span>Number 1</span>
          <input
            type="text"
            name="num1"
            id="num1"
            onChange={handleChange}
            value={formik.values.num1}
            placeholder="(__)-____-____"
            onClick={handleClick}
            onKeyDown={(e) => {
              if (e.key === "Backspace") {
                e.preventDefault();
                handleBackspace(e);
              }
            }}
            onFocus={(e) => {

              setFieldName('num1');
              if (!e.target.value) {
                formik.setFieldValue("num1", "(__)-____-____");
              }
              if (!formik.values.num1) {
                setListArr([
                  "(",
                  "_",
                  "_",
                  ")",
                  "-",
                  "_",
                  "_",
                  "_",
                  "_",
                  "-",
                  "_",
                  "_",
                  "_",
                  "_",
                ]);
              } else {
                formik.setFieldValue("num1", formik.values.num1);
                setListArr(formik.values.num1.split(""));
              }
            }}
          />
        </div>
        <div>
          <span>Number 2</span>
          <input
            type="text"
            name="num2"
            id="num2"
            value={formik.values.num2}
            onChange={handleChange}
            onClick={handleClick}
            onFocus={(e) => {
              setFieldName('num2');
              if (!e.target.value) {
                formik.setFieldValue("num2", "+__-__________");
              }
              if (!formik.values.num2) {
                setListArr([
                  "+",
                  "_",
                  "_",
                  "-",
                  "_",
                  "_",
                  "_",
                  "_",
                  "_",
                  "_",
                  "_",
                  "_",
                  "_",
                  "_",
                ]);
              } else {
                formik.setFieldValue("num2", formik.values.num2);
                setListArr(formik.values.num2.split(""));
              }
            }}
            onKeyDown={(e) => {
              if (e.key === "Backspace") {
                e.preventDefault();
                handleBackspace(e);
              }
            }}
            placeholder="+__-__________"
          />
        </div>
        <div>
          <span>Number 3</span>
          <input
            type="text"
            name="num3"
            id="num3"
            value={formik.values.num3}
            onChange={handleChange}
            onClick={handleClick}
            onFocus={(e) => {
              setFieldName('num3');
              if (!e.target.value) {
                formik.setFieldValue("num3", "(___)-___-____");
              }

              if (!formik.values.num3) {
                setListArr([
                  "(",
                  "_",
                  "_",
                  "_",
                  ")",
                  "-",
                  "_",
                  "_",
                  "_",
                  "-",
                  "_",
                  "_",
                  "_",
                  "_",
                ]);
              } else {
                formik.setFieldValue("num3", formik.values.num3);
                setListArr(formik.values.num3.split(""));
              }
            }}
            onKeyDown={(e) => {
              if (e.key === "Backspace") {
                e.preventDefault();
                handleBackspace(e);
              }
            }}
            placeholder="(___)-___-____"
          />
        </div>
        <div>
          <span>Number 4</span>
          <input
            onChange={handleChange}
            type="text"
            name="num4"
            id="num4"
            value={formik.values.num4}
            onClick={handleClick}
            onFocus={(e) => {
              setFieldName('num4');
              if (!e.target.value) {
                formik.setFieldValue("num4", "+___-__-__-______");
              }

              if (!formik.values.num4) {
                setListArr([
                  "+",
                  "_",
                  "_",
                  "_",
                  "-",
                  "_",
                  "_",
                  "-",
                  "_",
                  "_",
                  "-",
                  "_",
                  "_",
                  "_",
                  "_",
                  "_",
                  "_",
                ]);
              } else {
                formik.setFieldValue("num4", formik.values.num4);
                setListArr(formik.values.num4.split(""));
              }
            }}
            placeholder="+___-__-__-______"
            onKeyDown={(e) => {
              if (e.key === "Backspace") {
                e.preventDefault();
                handleBackspace(e);
              }
            }}
          />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;
