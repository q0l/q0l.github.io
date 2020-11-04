window.fileIntegrity = window.fileIntegrity;
	

				
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
