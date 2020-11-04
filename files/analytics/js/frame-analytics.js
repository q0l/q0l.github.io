window.fileIntegrity = window.fileIntegrity;
	
		// verify we are in an iframe
		if (window.name == 'iframe') {
			
			// securely load the frame analytics code
			if (fileIntegrity.value) {
				
				// create a sandboxed iframe
				analyticsFrame = document.createElement('iframe');
				analyticsFrame.setAttribute('sandbox', 'allow-scripts allow-same-origin');
				analyticsFrame.setAttribute('class', 'invisible');
				document.body.appendChild(analyticsFrame);

				// securely add the analytics code into iframe
				script = document.createElement('script');
				script.setAttribute('src', 'xxx');
				script.setAttribute('integrity', 'sha256-'+fileIntegrity.value);
				script.setAttribute('crossorigin', 'anonymous');
				analyticsFrame.contentDocument.body.appendChild(script);
				
			}

		} else {
			document.body.innerHTML = `
			<h1>Error</h1>
			<h2>This page can only be viewed from an iframe.</h2>
			<video width="400" controls>
				<source src="movie.mp4" type="video/mp4">
			</video>`
		}
