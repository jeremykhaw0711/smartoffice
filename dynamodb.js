const apiUrl = window.location.href
const apiReplacedURL = apiUrl.replace('#', '&')
const apiFinalURL = new URLSearchParams(apiReplacedURL)

var api_access_token = apiFinalURL.get('access_token')

var getdevicedetails = (deviceid)=>{

    fetch(
        'https://mbvwh69009.execute-api.us-east-1.amazonaws.com/GetDevice/getdevice',
        {
            method:"GET",
            body: JSON.stringify({
                "dev_id": deviceid
            }),
            headers:{
                'Content-Type':'application/json',
                'authentication':api_access_token
            },
        }
    )
        .then(function(response){
            return response.json();
        })
        .then(function (data) {
            document.getElementById('result').innerHTML = data;
        })
        .catch(function (err) {
            console.log('error: ' + err);
        });
}
