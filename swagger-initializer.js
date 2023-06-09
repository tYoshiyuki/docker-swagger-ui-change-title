window.onload = function() {
  
      //<editor-fold desc="Changeable Configuration Block">
      window.ui = SwaggerUIBundle({
        url: "https://petstore.swagger.io/v2/swagger.json",
        "dom_id": "#swagger-ui",
        deepLinking: true,
        presets: [
          SwaggerUIBundle.presets.apis,
          SwaggerUIStandalonePreset
        ],
        plugins: [
          SwaggerUIBundle.plugins.DownloadUrl
        ],
        layout: "StandaloneLayout",
        queryConfigEnabled: false,
      })
      
      //</editor-fold>

      // custom code start.
      const observer = new MutationObserver(function() {
        const titleElement = document.getElementsByClassName('title').item(0);

        // change document title with api title.
        if (titleElement && titleElement.firstChild.data.trim()){
          document.title = titleElement.firstChild.data.trim() + ' - ' + document.title;
          observer.disconnect();
        }
      });

      const config = { 
        attributes: true, 
        childList: true, 
        characterData: true,
        subtree: true
      };

      observer.observe(document.body, config);
};
