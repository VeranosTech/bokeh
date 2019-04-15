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
      };var element = document.getElementById("ec8eb311-85ec-4385-a03c-dd7838ecf259");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'ec8eb311-85ec-4385-a03c-dd7838ecf259' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"88a82fa1-df1a-4bd8-9244-6e7e0ca61260":{"roots":{"references":[{"attributes":{},"id":"16514","type":"WheelZoomTool"},{"attributes":{},"id":"16533","type":"BasicTickFormatter"},{"attributes":{},"id":"16504","type":"BasicTicker"},{"attributes":{"overlay":{"id":"16539","type":"BoxAnnotation"}},"id":"16515","type":"BoxZoomTool"},{"attributes":{},"id":"16535","type":"BasicTickFormatter"},{"attributes":{"ticker":{"id":"16504","type":"BasicTicker"}},"id":"16507","type":"Grid"},{"attributes":{},"id":"16516","type":"SaveTool"},{"attributes":{"below":[{"id":"16503","type":"LinearAxis"}],"center":[{"id":"16507","type":"Grid"},{"id":"16512","type":"Grid"}],"left":[{"id":"16508","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"16529","type":"GlyphRenderer"}],"title":{"id":"16532","type":"Title"},"toolbar":{"id":"16519","type":"Toolbar"},"x_range":{"id":"16495","type":"DataRange1d"},"x_scale":{"id":"16499","type":"LinearScale"},"y_range":{"id":"16497","type":"DataRange1d"},"y_scale":{"id":"16501","type":"LinearScale"}},"id":"16494","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"16537","type":"Selection"},{"attributes":{"formatter":{"id":"16535","type":"BasicTickFormatter"},"ticker":{"id":"16509","type":"BasicTicker"}},"id":"16508","type":"LinearAxis"},{"attributes":{},"id":"16517","type":"ResetTool"},{"attributes":{"formatter":{"id":"16533","type":"BasicTickFormatter"},"ticker":{"id":"16504","type":"BasicTicker"}},"id":"16503","type":"LinearAxis"},{"attributes":{},"id":"16538","type":"UnionRenderers"},{"attributes":{},"id":"16509","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"top":[1,2,3],"x":[1,2,3]},"selected":{"id":"16537","type":"Selection"},"selection_policy":{"id":"16538","type":"UnionRenderers"}},"id":"16526","type":"ColumnDataSource"},{"attributes":{},"id":"16518","type":"HelpTool"},{"attributes":{"callback":null},"id":"16495","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"16539","type":"BoxAnnotation"},{"attributes":{"dimension":1,"ticker":{"id":"16509","type":"BasicTicker"}},"id":"16512","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"16528","type":"VBar"},{"attributes":{},"id":"16501","type":"LinearScale"},{"attributes":{"callback":null},"id":"16497","type":"DataRange1d"},{"attributes":{"data_source":{"id":"16526","type":"ColumnDataSource"},"glyph":{"id":"16527","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16528","type":"VBar"},"selection_glyph":null,"view":{"id":"16530","type":"CDSView"}},"id":"16529","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#CAB2D6"},"line_color":{"value":"#CAB2D6"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"16527","type":"VBar"},{"attributes":{"source":{"id":"16526","type":"ColumnDataSource"}},"id":"16530","type":"CDSView"},{"attributes":{},"id":"16499","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"16513","type":"PanTool"},{"id":"16514","type":"WheelZoomTool"},{"id":"16515","type":"BoxZoomTool"},{"id":"16516","type":"SaveTool"},{"id":"16517","type":"ResetTool"},{"id":"16518","type":"HelpTool"}]},"id":"16519","type":"Toolbar"},{"attributes":{},"id":"16513","type":"PanTool"},{"attributes":{"text":""},"id":"16532","type":"Title"}],"root_ids":["16494"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"88a82fa1-df1a-4bd8-9244-6e7e0ca61260","roots":{"16494":"ec8eb311-85ec-4385-a03c-dd7838ecf259"}}];
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