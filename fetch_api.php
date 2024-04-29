<?php
$apiKey = "API_KEY_HERE"; // Replace with your API key
$apiEndpoint = "https://searchcourse.azurewebsites.net/api/search";
function fetchDataFromAPI($apiKey, $apiEndpoint) {
    // Initialize cURL session
    $curl = curl_init();

    // Set the cURL options
    curl_setopt_array($curl, array(
        CURLOPT_URL => $apiEndpoint,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "GET",
        CURLOPT_HTTPHEADER => array(
            "x-functions-key: $apiKey", // Set the API key in the header
            "Content-Type: application/json"
        ),
    ));

    // Execute the cURL request
    $response = curl_exec($curl);

    // Check for errors
    if (curl_errno($curl)) {
        $error = curl_error($curl);
        curl_close($curl);
        return "Error: $error";
    }

    // Close cURL session
    curl_close($curl);

    // Return the API response
    return json_decode($response);
}
echo json_encode(fetchDataFromAPI($apiKey, $apiEndpoint));
?>