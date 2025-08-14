export function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  
  export function validateForm({ name, email, selectedMovie }) {
    const errors = {};
    if (!name) errors.name = "โปรดใส่ชื่อของคุณ";
    if (!email) errors.email = "โปรดใส่อีเมลของคุณ";
    else if (!validateEmail(email)) errors.email = "รูปแบบอีเมลไม่ถูกต้อง";
    if (!selectedMovie) errors.selectedMovie = "กรุณาเลือกหนังที่คุณชอบ";
    return errors;
  }
  