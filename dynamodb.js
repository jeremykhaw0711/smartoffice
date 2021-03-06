const apiUrl = window.location.href
const apiReplacedURL = apiUrl.replace('#', '&')
const apiFinalURL = new URLSearchParams(apiReplacedURL)

var api_access_token = apiFinalURL.get('access_token')


//DCS_Table
var getdevicedetails = (input)=>{

    
    fetch(
        'https://n5z0lp4nxg.execute-api.us-east-1.amazonaws.com/DCS_Table/dcs_table',
        {
            method:"POST",
            body: JSON.stringify({
                "number": parseInt(input)
            }),
            headers:{
                'Content-Type':'application/json',
                'authorization':api_access_token
            },
        }
    )
    .then(function(response){
        return response.json();
    })
    .then(function (data) {
        document.getElementById('result').innerHTML = JSON.stringify(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });
}

//DCS_Table2
var getdevicedata = (DataNum)=>{
    
    fetch(
        'https://n5z0lp4nxg.execute-api.us-east-1.amazonaws.com/DCS_Table/dcs_table2',
        {
            method:"POST",
            body: JSON.stringify({
                "datanum": parseInt(DataNum)
            }),
            headers:{
                'Content-Type':'application/json',
                'authorization':api_access_token
            },
        }
    )
    .then(function(response){
            return response.json();
        })
        .then(function (data) {
            document.getElementById('result').innerHTML = JSON.stringify(data);
        })
        .catch(function (err) {
            console.log('error: ' + err);
        });
}