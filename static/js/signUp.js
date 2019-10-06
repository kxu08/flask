$(function(){


		// Beach button
		$('#Beach').click(function(){
		var fullname = $('#inputUsername').val();
		var zipcode = $('#inputZipcode').val();
		var dob = $('#inputDOB').val();
		var email = $('#inputEmail').val();
		var status = 'OK'


		// This is what is being dumped as json
		var jsonToSend = {
		    fullname: fullname,
		    zipcode: zipcode,
		    dob: dob,
		    email: email
		}

		$.ajax({
			url: '/signUpUser',
			data: jsonToSend,
			type: 'POST',
			success: function(response){
				console.log(response);

				//var obj = JSON.parse(response)

				var html = html_container['OK']
				newHtml = html.replace('%fullname%', fullname)


				// Insert into html
				element = ".container";
				document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);

				// Remove instruction
				elementId = "instruction"
				var ele = document.getElementById(elementId);
				ele.parentNode.removeChild(ele)
				// Remove request form
				elementId = "lookUp"
				var ele = document.getElementById(elementId);
				ele.parentNode.removeChild(ele);

				// add button
				var textLink = "window.location.href='/interpretation_%num%'"
				new_textLink = textLink.replace("%num%", scoreDecile)

				console.log(new_textLink)

				var button = document.createElement("button");
				button.classname += "btn btn-lg btn-primary btn-block"
				button.id += "test";
				button.innerHTML = "Click here to learn more what Risk Score Decile means";
				element = ".container";
				document.querySelector(element).appendChild(button);
				document.getElementById("test").setAttribute('onclick', new_textLink);
			},
			error: function(error){
				console.log(error);
			}
		});

		// Add new line
		element = ".container";
		var html_container;

		html_container = {OK: '<p style="text-align:center"> Hi, %fullname%!, you chose to stay in a beach house. We are generating your Safely Score!'}

		addButton = ' <br /> <button class="btn btn-lg btn-primary btn-block" type="button"></button>'
	});


		// Mountains button
		$('#Mountains').click(function(){
		var fullname = $('#inputUsername').val();
		var zipcode = $('#inputZipcode').val();
		var dob = $('#inputDOB').val();
		var email = $('#inputEmail').val();
		var status = 'OK'


		// This is what is being dumped as json
		var jsonToSend = {
		    fullname: fullname,
		    zipcode: zipcode,
		    dob: dob,
		    email: email
		}

		$.ajax({
			url: '/signUpUser',
			data: jsonToSend,
			type: 'POST',
			success: function(response){
				console.log(response);

				//var obj = JSON.parse(response)

				var html = html_container['OK']
				newHtml = html.replace('%fullname%', fullname)


				// Insert into html
				element = ".container";
				document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);

				// Remove instruction
				elementId = "instruction"
				var ele = document.getElementById(elementId);
				ele.parentNode.removeChild(ele)
				// Remove request form
				elementId = "lookUp"
				var ele = document.getElementById(elementId);
				ele.parentNode.removeChild(ele);

				// add button
				var textLink = "window.location.href='/interpretation_%num%'"
				new_textLink = textLink.replace("%num%", scoreDecile)

				console.log(new_textLink)

				var button = document.createElement("button");
				button.classname += "btn btn-lg btn-primary btn-block"
				button.id += "test";
				button.innerHTML = "Click here to learn more what Risk Score Decile means";
				element = ".container";
				document.querySelector(element).appendChild(button);
				document.getElementById("test").setAttribute('onclick', new_textLink);
			},
			error: function(error){
				console.log(error);
			}
		});

		// Add new line
		element = ".container";
		var html_container;

		html_container = {OK: '<p style="text-align:center"> Hi, %fullname%!, you chose to stay in a mountain house. We are generating your Safely Score!'}

		addButton = ' <br /> <button class="btn btn-lg btn-primary btn-block" type="button"></button>'
	});


		// Countryside button
		$('#Countryside').click(function(){
		var fullname = $('#inputUsername').val();
		var zipcode = $('#inputZipcode').val();
		var dob = $('#inputDOB').val();
		var email = $('#inputEmail').val();
		var status = 'OK'


		// This is what is being dumped as json
		var jsonToSend = {
		    fullname: fullname,
		    zipcode: zipcode,
		    dob: dob,
		    email: email
		}

		$.ajax({
			url: '/signUpUser',
			data: jsonToSend,
			type: 'POST',
			success: function(response){
				console.log(response);

				//var obj = JSON.parse(response)

				var html = html_container['OK']
				newHtml = html.replace('%fullname%', fullname)


				// Insert into html
				element = ".container";
				document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);

				// Remove instruction
				elementId = "instruction"
				var ele = document.getElementById(elementId);
				ele.parentNode.removeChild(ele)
				// Remove request form
				elementId = "lookUp"
				var ele = document.getElementById(elementId);
				ele.parentNode.removeChild(ele);

				// add button
				var textLink = "window.location.href='/interpretation_%num%'"
				new_textLink = textLink.replace("%num%", scoreDecile)

				console.log(new_textLink)

				var button = document.createElement("button");
				button.classname += "btn btn-lg btn-primary btn-block"
				button.id += "test";
				button.innerHTML = "Click here to learn more what Risk Score Decile means";
				element = ".container";
				document.querySelector(element).appendChild(button);
				document.getElementById("test").setAttribute('onclick', new_textLink);
			},
			error: function(error){
				console.log(error);
			}
		});

		// Add new line
		element = ".container";
		var html_container;

		html_container = {OK: '<p style="text-align:center"> Hi, %fullname%!, you chose to stay in a countryside house. We are generating your Safely Score!'}

		addButton = ' <br /> <button class="btn btn-lg btn-primary btn-block" type="button"></button>'
	});


		// City button
		$('#City').click(function(){
		var fullname = $('#inputUsername').val();
		var zipcode = $('#inputZipcode').val();
		var dob = $('#inputDOB').val();
		var email = $('#inputEmail').val();
		var status = 'OK'


		// This is what is being dumped as json
		var jsonToSend = {
		    fullname: fullname,
		    zipcode: zipcode,
		    dob: dob,
		    email: email
		}

		$.ajax({
			url: '/signUpUser',
			data: jsonToSend,
			type: 'POST',
			success: function(response){
				console.log(response);

				//var obj = JSON.parse(response)

				var html = html_container['OK']
				newHtml = html.replace('%fullname%', fullname)


				// Insert into html
				element = ".container";
				document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);

				// Remove instruction
				elementId = "instruction"
				var ele = document.getElementById(elementId);
				ele.parentNode.removeChild(ele)
				// Remove request form
				elementId = "lookUp"
				var ele = document.getElementById(elementId);
				ele.parentNode.removeChild(ele);

				// add button
				var textLink = "window.location.href='/interpretation_%num%'"
				new_textLink = textLink.replace("%num%", scoreDecile)

				console.log(new_textLink)

				var button = document.createElement("button");
				button.classname += "btn btn-lg btn-primary btn-block"
				button.id += "test";
				button.innerHTML = "Click here to learn more what Risk Score Decile means";
				element = ".container";
				document.querySelector(element).appendChild(button);
				document.getElementById("test").setAttribute('onclick', new_textLink);
			},
			error: function(error){
				console.log(error);
			}
		});

		// Add new line
		element = ".container";
		var html_container;

		html_container = {OK: '<p style="text-align:center"> Hi, %fullname%!, you chose to stay in a city house. We are generating your Safely Score!'}

		addButton = ' <br /> <button class="btn btn-lg btn-primary btn-block" type="button"></button>'
	});
});

