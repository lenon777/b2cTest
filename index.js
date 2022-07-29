alert('Test');
console.log('useeffect log');
let showBtn = document.getElementById('password');
let verifyBtn = document.getElementById(
    'emailVerificationControl_but_verify_code'
);
verifyBtn.addEventListener('click', () => {
    alert('Test click');
    console.log('clicl log');
    varificationMessage = document.getElementById(
        'emailVerificationControl_success_message'
    );
    varificationMessage.addEventListener(
        'DOMCharacterDataModified',
        function (event) {
            console.log(event);
            alert('Test changed');
            console.log('DOMCharacterDataModified log');
            let newPassword_li = document.getElementById('newPassword_li');
            let reenterPassword_li =
                document.getElementById('reenterPassword_li');
            let continueBtn = document.getElementById('continue');

            newPassword_li.style.display = 'block';
            reenterPassword_li.style.display = 'block';
            continueBtn.style.display = 'inline';
        },
        false
    );
});
