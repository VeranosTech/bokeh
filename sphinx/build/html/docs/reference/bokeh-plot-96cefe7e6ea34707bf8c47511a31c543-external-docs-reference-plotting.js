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
      };var element = document.getElementById("f1ade6c3-8aff-4a59-b141-97a016ae6ae6");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'f1ade6c3-8aff-4a59-b141-97a016ae6ae6' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"faf26fb2-2166-4c74-a481-7acb98f73ed6":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"14532","type":"PanTool"},{"id":"14533","type":"WheelZoomTool"},{"id":"14534","type":"BoxZoomTool"},{"id":"14535","type":"SaveTool"},{"id":"14536","type":"ResetTool"},{"id":"14537","type":"HelpTool"}]},"id":"14538","type":"Toolbar"},{"attributes":{"callback":null,"data":{"size":[10,20,25],"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"14556","type":"Selection"},"selection_policy":{"id":"14557","type":"UnionRenderers"}},"id":"14545","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"14552","type":"BasicTickFormatter"},"ticker":{"id":"14523","type":"BasicTicker"}},"id":"14522","type":"LinearAxis"},{"attributes":{},"id":"14557","type":"UnionRenderers"},{"attributes":{},"id":"14535","type":"SaveTool"},{"attributes":{"fill_color":{"value":"#99D594"},"line_color":{"value":"#99D594"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"14546","type":"Dash"},{"attributes":{"data_source":{"id":"14545","type":"ColumnDataSource"},"glyph":{"id":"14546","type":"Dash"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14547","type":"Dash"},"selection_glyph":null,"view":{"id":"14549","type":"CDSView"}},"id":"14548","type":"GlyphRenderer"},{"attributes":{"dimension":1,"ticker":{"id":"14528","type":"BasicTicker"}},"id":"14531","type":"Grid"},{"attributes":{},"id":"14533","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"14516","type":"DataRange1d"},{"attributes":{},"id":"14554","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"14558","type":"BoxAnnotation"},{"attributes":{},"id":"14520","type":"LinearScale"},{"attributes":{},"id":"14532","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"14547","type":"Dash"},{"attributes":{},"id":"14537","type":"HelpTool"},{"attributes":{"text":""},"id":"14551","type":"Title"},{"attributes":{},"id":"14536","type":"ResetTool"},{"attributes":{"callback":null},"id":"14514","type":"DataRange1d"},{"attributes":{"formatter":{"id":"14554","type":"BasicTickFormatter"},"ticker":{"id":"14528","type":"BasicTicker"}},"id":"14527","type":"LinearAxis"},{"attributes":{},"id":"14556","type":"Selection"},{"attributes":{},"id":"14523","type":"BasicTicker"},{"attributes":{"source":{"id":"14545","type":"ColumnDataSource"}},"id":"14549","type":"CDSView"},{"attributes":{},"id":"14518","type":"LinearScale"},{"attributes":{},"id":"14552","type":"BasicTickFormatter"},{"attributes":{"ticker":{"id":"14523","type":"BasicTicker"}},"id":"14526","type":"Grid"},{"attributes":{},"id":"14528","type":"BasicTicker"},{"attributes":{"below":[{"id":"14522","type":"LinearAxis"}],"center":[{"id":"14526","type":"Grid"},{"id":"14531","type":"Grid"}],"left":[{"id":"14527","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"14548","type":"GlyphRenderer"}],"title":{"id":"14551","type":"Title"},"toolbar":{"id":"14538","type":"Toolbar"},"x_range":{"id":"14514","type":"DataRange1d"},"x_scale":{"id":"14518","type":"LinearScale"},"y_range":{"id":"14516","type":"DataRange1d"},"y_scale":{"id":"14520","type":"LinearScale"}},"id":"14513","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"14558","type":"BoxAnnotation"}},"id":"14534","type":"BoxZoomTool"}],"root_ids":["14513"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"faf26fb2-2166-4c74-a481-7acb98f73ed6","roots":{"14513":"f1ade6c3-8aff-4a59-b141-97a016ae6ae6"}}];
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