function doGet(e) {
  var x = HtmlService.createTemplateFromFile("login_register");
  var y = x.evaluate();
  var z = y.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  return z;

}

function saveCheckInLocation(username, lat, lng) {
  var url = 'https://docs.google.com/spreadsheets/d/1ZMDKncOCaFQL-wmH9mY8yPPAFZtW4n8FYHtcDNgfl0s/edit?gid=849879612#gid=849879612';
  const sheet = SpreadsheetApp.openByUrl(url).getSheetByName("CheckInData");
  sheet.appendRow([new Date(), username, lat, lng]);
}

function checkLogin(username, password) {

  var url = 'https://docs.google.com/spreadsheets/d/1ZMDKncOCaFQL-wmH9mY8yPPAFZtW4n8FYHtcDNgfl0s/edit?gid=0#gid=0';
  var ss= SpreadsheetApp.openByUrl(url);
  var webAppSheet = ss.getSheetByName("DATA");
  var getLastRow =  webAppSheet.getLastRow();
  var found_record = '';

  for(var i = 1; i <= getLastRow; i++)
  {
   if(webAppSheet.getRange(i, 1).getValue().toUpperCase() == username.toUpperCase() &&
     webAppSheet.getRange(i, 2).getValue().toUpperCase() == password.toUpperCase())
   {
     found_record = 'TRUE';
   }    
  }

  if(found_record == '')
  {
    found_record = 'FALSE';
  }
  return found_record;
}

/*var verificationCodes = {};
function  checkLogin(username, password) {
  var url = "https://docs.google.com/spreadsheets/d/1ZMDKncOCaFQL-wmH9mY8yPPAFZtW4n8FYHtcDNgfl0s/edit?gid=0#gid=0";
  var ss = SpreadsheetApp.openByUrl(url);
  var webAppSheet = ss.getSheetByName("DATA");
  var getLastRow = webAppSheet.getLastRow();
  
  for (var i=1; i<= getLastRow; i++) {
    if(webAppSheet.getRange(i,1).getValue()== username &&
    webAppSheet.getRange(i,2).getValue()== password) {
      const email = webAppSheet.getRange(i,3).getValue();
      if (email && email.includes("@aku.edu")) {
        // Generate 6-digit verification code
        const code = Math.floor(100000 + Math.random() * 900000);
        verificationCodes[username] = code;

        MailApp.sendEmail({
          to: email,
          subject: "Your Verification Code",
          htmlBody: `<p>Your verification code is: <strong>${code}</strong></p>`
        });

        return{status: "VERIFY", emailSent: "TRUE"};
      }

      return { statue:"NO EMAIL FOUND"};
    }
  }

  return{ status: "INVALID"}
}*/

function sendVerificationCode(email) {
  const code = Math.floor(100000 + Math.random() * 900000).toString();
  PropertiesService.getUserProperties().setProperty(email, code);

  MailApp.sendEmail({
    to: email,
    subject: 'AKU Registration Verification Code',
    htmlBody: `<p>Your verification code is: <b>${code}</b></p>`
  });
  return {status: "SENT"};
}


function verifyCode(username, inputCode) {
  const storedCode = verificationCodes[username];
  return storedCode && parseInt(inputCode) === storedCode;
}

function AddRecord(usernamee, passwordd, email, phone) {
  var url = 'https://docs.google.com/spreadsheets/d/1ZMDKncOCaFQL-wmH9mY8yPPAFZtW4n8FYHtcDNgfl0s/edit?gid=0#gid=0';
  var ss= SpreadsheetApp.openByUrl(url);
  var webAppSheet = ss.getSheetByName("DATA");
  webAppSheet.appendRow([usernamee,passwordd,email,phone]);
}