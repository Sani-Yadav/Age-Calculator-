function calculateAge() {
    const birthdate = document.getElementById('birthdate').value;
    const birthDate = new Date(birthdate);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    const day = today.getDate() - birthDate.getDate();

    if (month < 0 || (month === 0 && day < 0)) {
        age--;
    }

    document.getElementById('result').innerText = `You are ${age} years old.`;
}
