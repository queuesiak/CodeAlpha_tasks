document.getElementById("resumeForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var photo = document.getElementById("photo").files[0];
    var qualification = document.getElementById("qualification").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    var certifications = document.getElementById("certifications").value;
  
    var reader = new FileReader();
    reader.onload = function() {
      var photoDataUrl = reader.result;
  
      var output = `
        <h2>Resume</h2>
        <img src="${photoDataUrl}" alt="Profile Photo">
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Qualification:</strong></p>
        <p>${qualification}</p>
        <p><strong>Experience:</strong></p>
        <p>${experience}</p>
        <p><strong>Skills:</strong></p>
        <p>${skills}</p>
        <p><strong>Certifications:</strong></p>
        <p>${certifications}</p>
      `;
  
      document.getElementById("resumeOutput").innerHTML = output;
      document.getElementById("resumeOutput").style.display = "block";
    };
  
    if (photo) {
      reader.readAsDataURL(photo);
    } else {
      reader.onload();
    }
  });
  