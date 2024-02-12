// go to google security, enable two factor authentication, create app password
  function sendEmail() {
    Email.send({
      Host: "smtp.gmail.com",
      Username: "cecejbrannan@gmail.com",
      Password: "oydgduedlpsodttd",
      To: 'cecejbrannan@gmail.com',
      From: document.getElementById("email").value,
      Subject: "New Punk Generation Message",
      Body: "Name: " + document.getElementById("name").value
          + "<br /> Email: "+ document.getElementById("email").value
          + "<br /> Message: "+ document.getElementById("message").value

    }).then(
      message => alert("Message Sent")
    );
  }
