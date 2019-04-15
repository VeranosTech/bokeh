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
      };var element = document.getElementById("b78f5099-2b15-4a51-9687-63dccf827c7a");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'b78f5099-2b15-4a51-9687-63dccf827c7a' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"d3af6b52-9d5a-413a-97f5-20e834ab03cf":{"roots":{"references":[{"attributes":{"formatter":{"id":"27557","type":"BasicTickFormatter"},"ticker":{"id":"27528","type":"BasicTicker"}},"id":"27527","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"firebrick"},"line_color":{"value":"firebrick"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"27551","type":"VBar"},{"attributes":{},"id":"27523","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"27563","type":"BoxAnnotation"},{"attributes":{"ticker":{"id":"27528","type":"BasicTicker"}},"id":"27531","type":"Grid"},{"attributes":{"formatter":{"id":"27559","type":"BasicTickFormatter"},"ticker":{"id":"27533","type":"BasicTicker"}},"id":"27532","type":"LinearAxis"},{"attributes":{},"id":"27542","type":"HelpTool"},{"attributes":{},"id":"27538","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"27550","type":"ColumnDataSource"},"glyph":{"id":"27551","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"27552","type":"VBar"},"selection_glyph":null,"view":{"id":"27554","type":"CDSView"}},"id":"27553","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"27552","type":"VBar"},{"attributes":{},"id":"27540","type":"SaveTool"},{"attributes":{},"id":"27537","type":"PanTool"},{"attributes":{"dimension":1,"ticker":{"id":"27533","type":"BasicTicker"}},"id":"27536","type":"Grid"},{"attributes":{},"id":"27533","type":"BasicTicker"},{"attributes":{},"id":"27541","type":"ResetTool"},{"attributes":{"text":""},"id":"27556","type":"Title"},{"attributes":{},"id":"27525","type":"LinearScale"},{"attributes":{},"id":"27559","type":"BasicTickFormatter"},{"attributes":{},"id":"27528","type":"BasicTicker"},{"attributes":{"below":[{"id":"27527","type":"LinearAxis"}],"center":[{"id":"27531","type":"Grid"},{"id":"27536","type":"Grid"}],"left":[{"id":"27532","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"27553","type":"GlyphRenderer"}],"title":{"id":"27556","type":"Title"},"toolbar":{"id":"27543","type":"Toolbar"},"x_range":{"id":"27519","type":"DataRange1d"},"x_scale":{"id":"27523","type":"LinearScale"},"y_range":{"id":"27521","type":"DataRange1d"},"y_scale":{"id":"27525","type":"LinearScale"}},"id":"27518","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"27563","type":"BoxAnnotation"}},"id":"27539","type":"BoxZoomTool"},{"attributes":{},"id":"27562","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"27537","type":"PanTool"},{"id":"27538","type":"WheelZoomTool"},{"id":"27539","type":"BoxZoomTool"},{"id":"27540","type":"SaveTool"},{"id":"27541","type":"ResetTool"},{"id":"27542","type":"HelpTool"}]},"id":"27543","type":"Toolbar"},{"attributes":{},"id":"27561","type":"Selection"},{"attributes":{"callback":null},"id":"27519","type":"DataRange1d"},{"attributes":{"callback":null},"id":"27521","type":"DataRange1d"},{"attributes":{"source":{"id":"27550","type":"ColumnDataSource"}},"id":"27554","type":"CDSView"},{"attributes":{"callback":null,"data":{"top":[1.2,2.5,3.7],"x":[1,2,3]},"selected":{"id":"27561","type":"Selection"},"selection_policy":{"id":"27562","type":"UnionRenderers"}},"id":"27550","type":"ColumnDataSource"},{"attributes":{},"id":"27557","type":"BasicTickFormatter"}],"root_ids":["27518"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"d3af6b52-9d5a-413a-97f5-20e834ab03cf","roots":{"27518":"b78f5099-2b15-4a51-9687-63dccf827c7a"}}];
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