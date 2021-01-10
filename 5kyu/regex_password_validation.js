function validate(pass) {
    return /^[A-Za-z0-9]{6,}$/.test(pass) &&
    /[A-Z]/.test(pass) &&
    /[a-z]/.test(pass) &&
    /[0-9]/.test(pass);
}