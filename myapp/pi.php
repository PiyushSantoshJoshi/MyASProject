<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $username = $_POST['username'];
    $email = $_POST['text2Input'];
    $date = $_POST['dateInput'];
    $time = $_POST['timeInput'];
    $password = $_POST['password'];
    $file = $_FILES['fileInput'];

    // Additional processing if needed
    
    // Now you can proceed with your VirusTotal API call or any other processing

    $curl = curl_init();

    curl_setopt_array($curl, [
      CURLOPT_URL => "https://www.virustotal.com/api/v3/files",
      CURLOPT_RETURNTRANSFER => true,
      CURLOPT_ENCODING => "",
      CURLOPT_MAXREDIRS => 10,
      CURLOPT_TIMEOUT => 30,
      CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
      CURLOPT_CUSTOMREQUEST => "POST",
      CURLOPT_HTTPHEADER => [
        "accept: application/json",
        "content-type: multipart/form-data",
        "x-apikey: a621c1fdcf95305d9e74ac0194d5f4203fa587416c15f52dbcdf35ba283530f4"
      ],
    ]);

    $response = curl_exec($curl);
    $err = curl_error($curl);

    curl_close($curl);

    if ($err) {
      echo "cURL Error #:" . $err;
    } else {
      echo $response;
    }
} else {
    echo "Invalid request method.";
}
?>
