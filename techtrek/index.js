

$(document).ready(()=>{

	var query = window.location.search.substring(1);
	var qs = parse_query_string(query);
	var api_access = null;
	var showDetails = false;

	// having clientID and secret in code here is not recommended
	// but we leave it here since this is just a sample demo
	var clientId = '3a08fd2f-bba7-4c3a-b73e-515662eee350';
	var clientSecret = '32608105-f40d-4857-8e99-ceb081a1f75a';

	// use https://cors-anywhere.herokuapp.com/ if you are planning to host 
	// a local webserver for your app to bypass CORS issue with OAuth2
	// of course, this is not recommended also in a real world application
	var corsbypass = "https://cors-anywhere.herokuapp.com/";
	console.log(qs);
	console.log(clientId)

	var empty = "";

	$('#showdetails').hide();
	$('#loadingtext').hide();
	
	//if no query params, i.e its the homepage route
	if(qs[empty])
	{
		$('#loginlink').show();
		$('#showdetails').hide();
	}
	else
	{
		// if the code parameter is there, 
		// then we have been redirected by the DBS OAuth login page
		if(qs['code'])
		{
			var code = qs["code"]	;
			var state = qs["state"];

			GetOAuthToken();
			$('#loginlink').hide();
			$('#loadingtext').show();
		}
		// if the get parameter is there,
		// then we have successfully retrieve the oauth token
		// and we can proceed to retrieve and display data from the other APIs
		else if(qs['get'])
		{
			$('#login').hide();
			$('#loadingtext').hide();
			$('#showdetails').show();

		}
		
	}

	//function to parse query parameters in the url
	function parse_query_string(query) {
	  var vars = query.split("&");
	  var query_string = {};
	  for (var i = 0; i < vars.length; i++) {
	    var pair = vars[i].split("=");
	    var key = decodeURIComponent(pair[0]);
	    var value = decodeURIComponent(pair[1]);
	    // If first entry with this name
	    if (typeof query_string[key] === "undefined") {
	      query_string[key] = decodeURIComponent(value);
	      // If second entry with this name
	    } else if (typeof query_string[key] === "string") {
	      var arr = [query_string[key], decodeURIComponent(value)];
	      query_string[key] = arr;
	      // If third or later entry with this name
	    } else {
	      query_string[key].push(decodeURIComponent(value));
	    }
	  }
	  return query_string;
	}

	// This function gets the Oauth2 token based on the
	// authorization code that was given in the url params
	// The authorization code is also given by OAuth2 after
	// the user is logged in and redirected back.
	function GetOAuthToken()
	{
		var settings = {
		  "async": true,
		  "crossDomain": true,
		  "url": corsbypass + "https://www.dbs.com/sandbox/api/sg/v1/oauth/tokens",
		  "method": "POST",
		  "headers": {
		    "authorization": "Basic M2EwOGZkMmYtYmJhNy00YzNhLWI3M2UtNTE1NjYyZWVlMzUwOjMyNjA4MTA1LWY0MGQtNDg1Ny04ZTk5LWNlYjA4MWExZjc1YQ==",
		    "content-type": "application/x-www-form-urlencoded",
		    "cache-control": "no-cache"
		  },
		  "data": {
		    "code": qs["code"],
		    "grant_type": "token",
		    "redirect_url": "http://localhost:8080/Hackaton/index.html?get=morgage"
		  }
		}

		$.ajax(settings).done(function (response) {
			console.log(response);
			api_access = response;

	  		$('#loginlink').hide();
			$('#login').hide();
			GetApplicantData();

		});
	}

	// this function gets the list of 
	// morgage loan applicants and display
	// them in a table
	function GetApplicantData()
	{
		applicantData = {
			'Client Id': clientId,
			'Client secret': clientSecret,
		}
	  	var applicantSettings = {
		  "async": true,
		  "crossDomain": true,
		  "url": corsbypass + "https://www.dbs.com/sandbox/api/sg/v1/mortgages/packages?partyId=12867303374682056150002&loanType=PROD_HL&propertyType=Landed%20(Private)",
		  "method": "GET",
		  "headers": {
		    "content-type": "application/json",
		    "accesstoken": api_access["access_token"],
		    "clientid": clientId,
		    "authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiIDogImh0dHBzOi8vY2FwaS5kYnMuY29tIiwiaWF0IiA6IDE1NDIzNDIyMTkwMzQsICJleHAiIDogMTU0MjM0NTgxOTAzNCwic3ViIiA6ICJTVmN3TXpZPSIsInB0eXR5cGUiIDogMSwiY2xuaWQiIDogIjNhMDhmZDJmLWJiYTctNGMzYS1iNzNlLTUxNTY2MmVlZTM1MCIsImNsbnR5cGUiIDogIjIiLCAiYWNjZXNzIiA6ICIxRkEiLCJzY29wZSIgOiAiMkZBLVNNUyIgLCJhdWQiIDogImh0dHBzOi8vY2FwaS5kYnMuY29tL2FjY2VzcyIgLCJqdGkiIDogIjgyMDU0NDMyMTI3NDU3OTMyNDYiICwiY2luIiA6ICJRMGxPTURBd01EQXgifQ.FK7DveyAzQSMPFa42XT_elJjs28A5TxYKGJ00AGNGsc",
		    "cache-control": "no-cache"
		  },
		  "data": JSON.stringify(applicantData)
		}

		$.ajax(applicantSettings).done(function (response) {
		  
		  $('#showdetails').show();

		  //render each row based on the data we retrieved
		  for(var i =0; i < response.applicantList.length; i++)
		  {
		  	var elem = response.applicantList[i];
		  	var tabletext = `
		  	<tr class="tablerow">
		  		<td>` + elem.applicant.applicantId + `</td>
		  		<td>` + elem.applicant.name.salutation + `</td>
		  		<td>` + elem.applicant.name.fullName + `</td>
			 </tr>
		  					`
		  	$('#tablebod').append(tabletext);
		  }
		  
		});
	}
});
