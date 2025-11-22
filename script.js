function bookPandit(service) {
    let phone = "917250658771 

    let msg = नमस्ते! मुझे ${service} के लिए पंडित जी बुक करना है।;

    let url = https://wa.me/${phone}?text=${encodeURIComponent(msg)};

    window.open(url, "_blank");
}
