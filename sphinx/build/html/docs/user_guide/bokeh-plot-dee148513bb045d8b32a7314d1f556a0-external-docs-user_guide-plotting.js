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
      };var element = document.getElementById("105c8fa2-4400-4b83-87cb-61ce9ea8480e");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '105c8fa2-4400-4b83-87cb-61ce9ea8480e' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"cc564f01-0cf0-459f-8cbb-02e2cf3623db":{"roots":{"references":[{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_color":{"value":"#CAB2D6"},"height":{"units":"screen","value":40},"line_color":{"value":"#CAB2D6"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"28468","type":"Oval"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"28480","type":"BoxAnnotation"},{"attributes":{},"id":"28479","type":"UnionRenderers"},{"attributes":{},"id":"28440","type":"LinearScale"},{"attributes":{},"id":"28445","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"28478","type":"Selection"},"selection_policy":{"id":"28479","type":"UnionRenderers"}},"id":"28467","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"28454","type":"PanTool"},{"id":"28455","type":"WheelZoomTool"},{"id":"28456","type":"BoxZoomTool"},{"id":"28457","type":"SaveTool"},{"id":"28458","type":"ResetTool"},{"id":"28459","type":"HelpTool"}]},"id":"28460","type":"Toolbar"},{"attributes":{},"id":"28474","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"28438","type":"DataRange1d"},{"attributes":{"formatter":{"id":"28476","type":"BasicTickFormatter"},"ticker":{"id":"28450","type":"BasicTicker"}},"id":"28449","type":"LinearAxis"},{"attributes":{"data_source":{"id":"28467","type":"ColumnDataSource"},"glyph":{"id":"28468","type":"Oval"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"28469","type":"Oval"},"selection_glyph":null,"view":{"id":"28471","type":"CDSView"}},"id":"28470","type":"GlyphRenderer"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"screen","value":40},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"28469","type":"Oval"},{"attributes":{"text":""},"id":"28473","type":"Title"},{"attributes":{},"id":"28459","type":"HelpTool"},{"attributes":{"source":{"id":"28467","type":"ColumnDataSource"}},"id":"28471","type":"CDSView"},{"attributes":{"ticker":{"id":"28445","type":"BasicTicker"}},"id":"28448","type":"Grid"},{"attributes":{},"id":"28442","type":"LinearScale"},{"attributes":{},"id":"28454","type":"PanTool"},{"attributes":{},"id":"28478","type":"Selection"},{"attributes":{},"id":"28458","type":"ResetTool"},{"attributes":{"below":[{"id":"28444","type":"LinearAxis"}],"center":[{"id":"28448","type":"Grid"},{"id":"28453","type":"Grid"}],"left":[{"id":"28449","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"28470","type":"GlyphRenderer"}],"title":{"id":"28473","type":"Title"},"toolbar":{"id":"28460","type":"Toolbar"},"x_range":{"id":"28436","type":"DataRange1d"},"x_scale":{"id":"28440","type":"LinearScale"},"y_range":{"id":"28438","type":"DataRange1d"},"y_scale":{"id":"28442","type":"LinearScale"}},"id":"28435","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"ticker":{"id":"28450","type":"BasicTicker"}},"id":"28453","type":"Grid"},{"attributes":{},"id":"28476","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"28480","type":"BoxAnnotation"}},"id":"28456","type":"BoxZoomTool"},{"attributes":{},"id":"28455","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"28436","type":"DataRange1d"},{"attributes":{},"id":"28450","type":"BasicTicker"},{"attributes":{},"id":"28457","type":"SaveTool"},{"attributes":{"formatter":{"id":"28474","type":"BasicTickFormatter"},"ticker":{"id":"28445","type":"BasicTicker"}},"id":"28444","type":"LinearAxis"}],"root_ids":["28435"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"cc564f01-0cf0-459f-8cbb-02e2cf3623db","roots":{"28435":"105c8fa2-4400-4b83-87cb-61ce9ea8480e"}}];
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