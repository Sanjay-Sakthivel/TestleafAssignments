function launchbrowser(browserName) {
    if (browserName === "chrome") {
        console.log("Launching Chrome browser");
    } else if (browserName === "firefox") {
        console.log("Launching Firefox browser");
    } else 
        console.log("Unsupported browser");
}

function runtests(testType)
{
    switch(testType) {
        case "smoke":
            console.log("Running smoke tests");
            break;
        case "regression":
            console.log("Running regression tests");
            break;
            case "sanity":
            console.log("Running sanity tests");
            break;
        
        default:
            console.log("Unknown test type");
    }
}

launchbrowser("chrome");
runtests("regression");