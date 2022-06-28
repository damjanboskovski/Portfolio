function sendEmail(){
    var eName = document.getElementById('name').value;
    var eMail = document.getElementById('email').value;
    var eSubject = document.getElementById('subject').value;
    var eMessage = document.getElementById('message').value;
    var eBody = 'name: ' + eName + '<br/> email: ' + eMail + '<br/> message: ' + eMessage;

    Email.send({
        SecureToken: '5021fe67-8a9c-4814-b746-43a8b632f532',
        To: 'damjanboskovski2002@gmail.com',
        From: 'damjanboskovski2002@gmail.com',
        Subject: eSubject === "" ? "Work inquiry" : eSubject,
        Body: eBody
    }).then(
        
    );

}