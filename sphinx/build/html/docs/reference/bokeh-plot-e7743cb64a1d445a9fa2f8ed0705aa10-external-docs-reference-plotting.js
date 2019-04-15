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
      };var element = document.getElementById("2a98fd68-595d-4325-8d8d-97ed282ce38b");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '2a98fd68-595d-4325-8d8d-97ed282ce38b' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.1.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.1.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.1.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.1.0.min.js"];
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
                    
                  var docs_json = '{"2feac661-9304-4f0d-9546-caa83521cbdf":{"roots":{"references":[{"attributes":{},"id":"15176","type":"LinearScale"},{"attributes":{},"id":"15208","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"15201","type":"ColumnDataSource"},"glyph":{"id":"15202","type":"InvertedTriangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15203","type":"InvertedTriangle"},"selection_glyph":null,"view":{"id":"15205","type":"CDSView"}},"id":"15204","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"15172","type":"DataRange1d"},{"attributes":{"text":""},"id":"15207","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"15203","type":"InvertedTriangle"},{"attributes":{},"id":"15174","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#DE2D26"},"line_color":{"value":"#DE2D26"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"15202","type":"InvertedTriangle"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"15212","type":"Selection"},"selection_policy":{"id":"15213","type":"UnionRenderers"}},"id":"15201","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"15208","type":"BasicTickFormatter"},"ticker":{"id":"15179","type":"BasicTicker"}},"id":"15178","type":"LinearAxis"},{"attributes":{},"id":"15189","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"15214","type":"BoxAnnotation"}},"id":"15190","type":"BoxZoomTool"},{"attributes":{"source":{"id":"15201","type":"ColumnDataSource"}},"id":"15205","type":"CDSView"},{"attributes":{},"id":"15188","type":"PanTool"},{"attributes":{},"id":"15192","type":"ResetTool"},{"attributes":{},"id":"15193","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"15188","type":"PanTool"},{"id":"15189","type":"WheelZoomTool"},{"id":"15190","type":"BoxZoomTool"},{"id":"15191","type":"SaveTool"},{"id":"15192","type":"ResetTool"},{"id":"15193","type":"HelpTool"}]},"id":"15194","type":"Toolbar"},{"attributes":{},"id":"15179","type":"BasicTicker"},{"attributes":{},"id":"15191","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"15214","type":"BoxAnnotation"},{"attributes":{"ticker":{"id":"15179","type":"BasicTicker"}},"id":"15182","type":"Grid"},{"attributes":{"below":[{"id":"15178","type":"LinearAxis"}],"center":[{"id":"15182","type":"Grid"},{"id":"15187","type":"Grid"}],"left":[{"id":"15183","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"15204","type":"GlyphRenderer"}],"title":{"id":"15207","type":"Title"},"toolbar":{"id":"15194","type":"Toolbar"},"x_range":{"id":"15170","type":"DataRange1d"},"x_scale":{"id":"15174","type":"LinearScale"},"y_range":{"id":"15172","type":"DataRange1d"},"y_scale":{"id":"15176","type":"LinearScale"}},"id":"15169","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"15213","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"15210","type":"BasicTickFormatter"},"ticker":{"id":"15184","type":"BasicTicker"}},"id":"15183","type":"LinearAxis"},{"attributes":{},"id":"15212","type":"Selection"},{"attributes":{},"id":"15184","type":"BasicTicker"},{"attributes":{"callback":null},"id":"15170","type":"DataRange1d"},{"attributes":{},"id":"15210","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"ticker":{"id":"15184","type":"BasicTicker"}},"id":"15187","type":"Grid"}],"root_ids":["15169"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"2feac661-9304-4f0d-9546-caa83521cbdf","roots":{"15169":"2a98fd68-595d-4325-8d8d-97ed282ce38b"}}];
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