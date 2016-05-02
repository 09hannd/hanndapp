function checkInternet() {
    var networkState = navigator.connection.type;
    if(networkState == Connection.NONE) {
        return false;
    } else {
       return true;
    }
}

alert(checkInternet());