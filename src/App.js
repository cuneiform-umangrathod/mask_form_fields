import { useFormik } from "formik";
import "./App.css";
import { useEffect, useState } from "react";
import { data } from "./data";
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
  const [fieldName, setFieldName] = useState("num1");

  /**
   * * this fucntion handle change event
   */

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
  };

  /**
   * * this fucntion handle BackSpace event
   */

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
  };

  /**
   * * to target the first "_" on click in the text field
   * * and move the cursor to the first "_" in the text field
   */

  const handleClick = (e) => {
    const check = e.target.selectionStart;
    const regex = /\d/;
    const name = e.target.name;
    console.log("name: ", formik.values[name]);

    if (!regex.test(formik.values[name].charAt(check - 1))) {
      e.target.setSelectionRange(
        formik.values[name].indexOf("_"),
        formik.values[name].indexOf("_")
      );
    }
  };

  /**
   * * does the same thing as fucntion above
   * * but for the changes made in formik.values
   */

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

  return (
    <div className="App">
      <form onSubmit={formik.handleSubmit}>
        <div className="form-main">
          {data.map((item, index) => {
            const { name, listarr, placeHolde } = item;

            return (
              <div key={index} className="form-field">
                <span>{name}</span>
                <input
                  type="text"
                  name={name}
                  id={name}
                  onChange={handleChange}
                  value={formik.values[name]}
                  placeholder={placeHolde}
                  onClick={handleClick}
                  onKeyDown={(e) => {
                    if (e.key === "Backspace") {
                      e.preventDefault();
                      handleBackspace(e);
                    }
                  }}
                  onFocus={(e) => {
                    setFieldName(name);
                    if (!e.target.value) {
                      formik.setFieldValue(name,placeHolde);
                    }
                    if (!formik.values[name]) {
                      setListArr(listarr);
                    } else {
                      formik.setFieldValue(name, formik.values[name]);
                      setListArr(formik.values[name].split(""));
                    }
                  }}
                />
              </div>
            );
          })}
        </div>
      
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;
