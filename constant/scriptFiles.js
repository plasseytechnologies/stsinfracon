const AllScriptLoad = () => {
  // List of script files to load
  const scriptFiles = [
    "/assets/js/core.min.js",
    "/assets/js/3ts2ksMwXvKRuG480KNifJ2_JNM.js",
    "/assets/js/4o300efCt-CXoq1JEC-sVReFz48.js",
    "/assets/js/script.js", // Move the script.js to the end if it depends on other scripts
  ];

  // Function to load scripts dynamically
  const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.defer = true;
      script.async = true;

      script.onload = () => {
        // console.log(`Script ${src} loaded successfully`);
        resolve();
        return true;
      };

      script.onerror = (error) => {
        // console.error(`Error loading script ${src}:`, error);
        reject();
        return false;
      };

      document.body.appendChild(script);
    });
  };

  // Load each script dynamically in sequence
  const loadScriptsSequentially = async () => {
    for (const scriptFile of scriptFiles) {
      await loadScript(scriptFile);
    }
  };

  // Call the function to load scripts
  loadScriptsSequentially();

  // Cleanup on component unmount
  return () => {
    // Remove script elements
    scriptFiles.forEach((scriptFile) => {
      const scriptElement = document.querySelector(
        `script[src="${scriptFile}"]`
      );
      if (scriptElement) {
        document.body.removeChild(scriptElement);
      }
    });
  };
};

export { AllScriptLoad };
