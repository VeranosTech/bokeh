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
      };var element = document.getElementById("9e59cb0d-d13b-49e4-8ebc-ee34ec27c018");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '9e59cb0d-d13b-49e4-8ebc-ee34ec27c018' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"09739411-938e-40f6-879f-2a2f4f403976":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":null},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"olive"},"line_dash":[],"line_width":{"value":8},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"32588","type":"BoxAnnotation"},{"attributes":{},"id":"32554","type":"LinearScale"},{"attributes":{"formatter":{"id":"32581","type":"BasicTickFormatter"},"ticker":{"id":"32557","type":"BasicTicker"}},"id":"32556","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":null},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"32587","type":"BoxAnnotation"},{"attributes":{"callback":null,"overlay":{"id":"32587","type":"BoxAnnotation"}},"id":"32566","type":"BoxSelectTool"},{"attributes":{},"id":"32585","type":"Selection"},{"attributes":{},"id":"32586","type":"UnionRenderers"},{"attributes":{"ticker":{"id":"32557","type":"BasicTicker"}},"id":"32560","type":"Grid"},{"attributes":{},"id":"32583","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"32583","type":"BasicTickFormatter"},"ticker":{"id":"32562","type":"BasicTicker"}},"id":"32561","type":"LinearAxis"},{"attributes":{"below":[{"id":"32556","type":"LinearAxis"}],"center":[{"id":"32560","type":"Grid"},{"id":"32565","type":"Grid"}],"left":[{"id":"32561","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"32578","type":"GlyphRenderer"}],"title":{"id":"32546","type":"Title"},"toolbar":{"id":"32570","type":"Toolbar"},"x_range":{"id":"32548","type":"DataRange1d"},"x_scale":{"id":"32552","type":"LinearScale"},"y_range":{"id":"32550","type":"DataRange1d"},"y_scale":{"id":"32554","type":"LinearScale"}},"id":"32545","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"32581","type":"BasicTickFormatter"},{"attributes":{},"id":"32557","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"32576","type":"Circle"},{"attributes":{"source":{"id":"32575","type":"ColumnDataSource"}},"id":"32579","type":"CDSView"},{"attributes":{},"id":"32562","type":"BasicTicker"},{"attributes":{"text":"Select and Zoom"},"id":"32546","type":"Title"},{"attributes":{"overlay":{"id":"32588","type":"BoxAnnotation"}},"id":"32567","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"32575","type":"ColumnDataSource"},"glyph":{"id":"32576","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"32577","type":"Circle"},"selection_glyph":null,"view":{"id":"32579","type":"CDSView"}},"id":"32578","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"32548","type":"DataRange1d"},{"attributes":{"callback":null,"overlay":{"id":"32589","type":"PolyAnnotation"}},"id":"32568","type":"LassoSelectTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"32577","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[10,10],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"32589","type":"PolyAnnotation"},{"attributes":{"callback":null},"id":"32550","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"32566","type":"BoxSelectTool"},{"id":"32567","type":"BoxZoomTool"},{"id":"32568","type":"LassoSelectTool"},{"id":"32569","type":"ResetTool"}]},"id":"32570","type":"Toolbar"},{"attributes":{},"id":"32569","type":"ResetTool"},{"attributes":{},"id":"32552","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[200]},"y":{"__ndarray__":"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","dtype":"float64","shape":[200]}},"selected":{"id":"32585","type":"Selection"},"selection_policy":{"id":"32586","type":"UnionRenderers"}},"id":"32575","type":"ColumnDataSource"},{"attributes":{"dimension":1,"ticker":{"id":"32562","type":"BasicTicker"}},"id":"32565","type":"Grid"}],"root_ids":["32545"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"09739411-938e-40f6-879f-2a2f4f403976","roots":{"32545":"9e59cb0d-d13b-49e4-8ebc-ee34ec27c018"}}];
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