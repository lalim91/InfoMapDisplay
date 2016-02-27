function getDataFromServer(){
    $.ajax({
        method:'GET',
        url:'http://waterservices.usgs.gov/nwis/iv/?format=json&stateCd=ca&parameterCd=00060,00065',

        success: function(response){
            console.log('response',response);

        }
    })
}

$(document).ready(function(){
    getDataFromServer();
});