/**
 *
 * @param {a element what need add error message} element
 * @param {a message to add to error message} message
 * First, get element input (becasue only one input in div) to add class error
 * Then, create 1 element span to add icon error
 * Then, create 1 element p to add error message into it.
 */
const addError = (element, message) => {
  element.getElementsByTagName("input")[0].classList.add("error");
  const span = document.createElement("span"); //Span này để chứa icon báo lỗi
  span.innerHTML = `<ion-icon name="alert-circle-outline"></ion-icon>`;
  element.appendChild(span);
  const errorMessage = document.createElement("p"); //Element p này chứa error message để hiện ra
  errorMessage.classList.add("input-error-message");
  errorMessage.innerHTML = `${
    element.getElementsByTagName("input")[0].placeholder
  } ${message}  `;
  element.appendChild(errorMessage);
};
/**
 *
 * @param {a list contains elements} list
 * Loop through the list and catch error
 */
const checkError = (list) => {
  for (let element of list) {
    if (element.getElementsByTagName("input")[0].value === "") {
      //Chỉ có 1 input trong group
      addError(element, "cannot be empty");
    } else {
      if (element.id === "email") {
        if (
          !element
            .getElementsByTagName("input")[0]
            .value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)
        ) {
          addError(element, "is not an valid email");
        }
      }
    }
  }
};
/**
 *
 * @param {a list contains elements} list
 * Get element input and if have a class error
 * Then, remove error from it (border input eror)
 * Then, remove span (it's a icon error)
 * Then, remove p (it's a error message)
 */
const removeError = (list) => {
  for (let element of list) {
    if (element.getElementsByTagName("input")[0].classList.contains("error")) {
      element.getElementsByTagName("input")[0].classList.remove("error");
      const span = element.getElementsByTagName("span")[0];
      if (span) element.removeChild(span);
      const p = element.getElementsByTagName("p")[0];
      if (p) element.removeChild(p);
    }
  }
};

const button = document.getElementById("submit");
button.addEventListener("click", (e) => {
  e.preventDefault();
  const firstName = document.getElementById("firstname");
  const lastName = document.getElementById("lastname");
  const emailAddress = document.getElementById("email");
  const password = document.getElementById("password");
  removeError([firstName, lastName, emailAddress, password]);
  checkError([firstName, lastName, emailAddress, password]);
});
