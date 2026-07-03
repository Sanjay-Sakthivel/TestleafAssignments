function login(afterLogin) {

    console.log("Logging into the application...");

    afterLogin();
}

// Now different test cases can perform different actions after login.

function createCustomer() {
    console.log("Create Customer");
}

function createOrder() {
    console.log("Create Order");
}

login(createCustomer);

login(createOrder);

// The login code is written once, but reused for multiple scenarios.

// Another Real Example

// Downloading a file.

function downloadFile(afterDownload) {

    console.log("Downloading file...");

    afterDownload();
}

//Now you can perform different tasks after downloading.

function verifyFile() {
    console.log("Verify downloaded file");
}

function uploadFile() {
    console.log("Upload downloaded file");
}

downloadFile(verifyFile);
downloadFile(uploadFile);