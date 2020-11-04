window.fileIntegrity = window.fileIntegrity;
					// securely add the analytics code into iframe
				script = document.createElement('script');
				script.setAttribute('src', 'xxx');
				script.setAttribute('integrity', 'sha256-'+fileIntegrity.value);
				script.setAttribute('crossorigin', 'anonymous');
				analyticsFrame.contentDocument.body.appendChild(script);
