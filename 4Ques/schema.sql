CREATE TABLE payment (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cardno VARCHAR(20),
    cvv VARCHAR(5),
    exp VARCHAR(10),
    otp VARCHAR(10)
);