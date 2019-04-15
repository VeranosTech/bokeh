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
      };var element = document.getElementById("3654814a-35f4-4ed9-9792-da55179fdbf7");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '3654814a-35f4-4ed9-9792-da55179fdbf7' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"bf191ff3-e9df-447d-8823-80de2790d2be":{"roots":{"references":[{"attributes":{},"id":"22671","type":"UnionRenderers"},{"attributes":{"source":{"id":"22661","type":"ColumnDataSource"}},"id":"22666","type":"CDSView"},{"attributes":{"dimension":"lat"},"id":"22647","type":"MercatorTickFormatter"},{"attributes":{"formatter":{"id":"22647","type":"MercatorTickFormatter"},"ticker":{"id":"22648","type":"MercatorTicker"}},"id":"22649","type":"LinearAxis"},{"attributes":{},"id":"22670","type":"Selection"},{"attributes":{"callback":null,"data":{"lat":[30.29,30.2,30.29],"lon":[-97.7,-97.74,-97.78]},"selected":{"id":"22670","type":"Selection"},"selection_policy":{"id":"22671","type":"UnionRenderers"}},"id":"22661","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"22638","type":"Range1d"},{"attributes":{"callback":null},"id":"22637","type":"Range1d"},{"attributes":{"dimension":"lon"},"id":"22642","type":"MercatorTickFormatter"},{"attributes":{"text":"Austin"},"id":"22636","type":"Title"},{"attributes":{},"id":"22652","type":"PanTool"},{"attributes":{},"id":"22654","type":"ResetTool"},{"attributes":{"formatter":{"id":"22642","type":"MercatorTickFormatter"},"ticker":{"id":"22643","type":"MercatorTicker"}},"id":"22644","type":"LinearAxis"},{"attributes":{},"id":"22655","type":"HelpTool"},{"attributes":{},"id":"22653","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"lon"},"y":{"field":"lat"}},"id":"22664","type":"Circle"},{"attributes":{"dimension":"lat"},"id":"22648","type":"MercatorTicker"},{"attributes":{},"id":"22668","type":"LinearScale"},{"attributes":{"lat":30.2861,"lng":-97.7394,"zoom":11},"id":"22634","type":"GMapOptions"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"blue"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"lon"},"y":{"field":"lat"}},"id":"22663","type":"Circle"},{"attributes":{},"id":"22669","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"22652","type":"PanTool"},{"id":"22653","type":"WheelZoomTool"},{"id":"22654","type":"ResetTool"},{"id":"22655","type":"HelpTool"}]},"id":"22656","type":"Toolbar"},{"attributes":{"api_key":"MISSING_API_KEY","below":[{"id":"22644","type":"LinearAxis"}],"left":[{"id":"22649","type":"LinearAxis"}],"map_options":{"id":"22634","type":"GMapOptions"},"renderers":[{"id":"22665","type":"GlyphRenderer"}],"title":{"id":"22636","type":"Title"},"toolbar":{"id":"22656","type":"Toolbar"},"x_range":{"id":"22637","type":"Range1d"},"x_scale":{"id":"22669","type":"LinearScale"},"y_range":{"id":"22638","type":"Range1d"},"y_scale":{"id":"22668","type":"LinearScale"}},"id":"22635","subtype":"GMap","type":"GMapPlot"},{"attributes":{"dimension":"lon"},"id":"22643","type":"MercatorTicker"},{"attributes":{"data_source":{"id":"22661","type":"ColumnDataSource"},"glyph":{"id":"22663","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"22664","type":"Circle"},"selection_glyph":null,"view":{"id":"22666","type":"CDSView"}},"id":"22665","type":"GlyphRenderer"}],"root_ids":["22635"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"bf191ff3-e9df-447d-8823-80de2790d2be","roots":{"22635":"3654814a-35f4-4ed9-9792-da55179fdbf7"}}];
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