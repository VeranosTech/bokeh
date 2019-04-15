(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };var element = document.getElementById("c2325144-7149-4c39-9a50-a49df7754673");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'c2325144-7149-4c39-9a50-a49df7754673' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.1.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.1.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.1.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.1.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.1.0.min.js"];
      var css_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.1.0.min.css", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.1.0.min.css", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.1.0.min.css"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"f71ae21e-841d-4f44-b13d-832636e64e50":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"20555","type":"Toolbar"},{"attributes":{},"id":"20544","type":"LinearScale"},{"attributes":{},"id":"20547","type":"CategoricalTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"20558","type":"VBar"},{"attributes":{"below":[{"id":"20546","type":"CategoricalAxis"}],"center":[{"id":"20549","type":"Grid"},{"id":"20554","type":"Grid"}],"left":[{"id":"20550","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"20559","type":"GlyphRenderer"}],"title":{"id":"20536","type":"Title"},"toolbar":{"id":"20555","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"20538","type":"FactorRange"},"x_scale":{"id":"20542","type":"CategoricalScale"},"y_range":{"id":"20540","type":"DataRange1d"},"y_scale":{"id":"20544","type":"LinearScale"}},"id":"20535","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"20551","type":"BasicTicker"},{"attributes":{},"id":"20564","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"20557","type":"VBar"},{"attributes":{"formatter":{"id":"20564","type":"BasicTickFormatter"},"ticker":{"id":"20551","type":"BasicTicker"}},"id":"20550","type":"LinearAxis"},{"attributes":{"dimension":1,"ticker":{"id":"20551","type":"BasicTicker"}},"id":"20554","type":"Grid"},{"attributes":{"formatter":{"id":"20562","type":"CategoricalTickFormatter"},"ticker":{"id":"20547","type":"CategoricalTicker"}},"id":"20546","type":"CategoricalAxis"},{"attributes":{},"id":"20566","type":"Selection"},{"attributes":{"data_source":{"id":"20556","type":"ColumnDataSource"},"glyph":{"id":"20557","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"20558","type":"VBar"},"selection_glyph":null,"view":{"id":"20560","type":"CDSView"}},"id":"20559","type":"GlyphRenderer"},{"attributes":{"callback":null,"start":0},"id":"20540","type":"DataRange1d"},{"attributes":{},"id":"20542","type":"CategoricalScale"},{"attributes":{},"id":"20562","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"20538","type":"FactorRange"},{"attributes":{"text":"Fruit Counts"},"id":"20536","type":"Title"},{"attributes":{"source":{"id":"20556","type":"ColumnDataSource"}},"id":"20560","type":"CDSView"},{"attributes":{},"id":"20567","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"top":[5,3,4,2,4,6],"x":[["Apples",-0.5],["Pears",-0.2],["Nectarines",0.0],["Plums",0.3],["Grapes",0.1],["Strawberries",0.3]]},"selected":{"id":"20566","type":"Selection"},"selection_policy":{"id":"20567","type":"UnionRenderers"}},"id":"20556","type":"ColumnDataSource"},{"attributes":{"grid_line_color":{"value":null},"ticker":{"id":"20547","type":"CategoricalTicker"}},"id":"20549","type":"Grid"}],"root_ids":["20535"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"f71ae21e-841d-4f44-b13d-832636e64e50","roots":{"20535":"c2325144-7149-4c39-9a50-a49df7754673"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {} // ensure no trailing comma for IE
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();