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
      };var element = document.getElementById("f50b9a5a-ec3a-4c66-ac4d-528315222a4a");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'f50b9a5a-ec3a-4c66-ac4d-528315222a4a' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"03c227b8-7fd9-4244-95e6-39d432e65dec":{"roots":{"references":[{"attributes":{},"id":"28528","type":"BasicTicker"},{"attributes":{},"id":"28542","type":"HelpTool"},{"attributes":{"source":{"id":"28550","type":"ColumnDataSource"}},"id":"28554","type":"CDSView"},{"attributes":{"dimension":1,"ticker":{"id":"28533","type":"BasicTicker"}},"id":"28536","type":"Grid"},{"attributes":{"text":""},"id":"28556","type":"Title"},{"attributes":{"below":[{"id":"28527","type":"LinearAxis"}],"center":[{"id":"28531","type":"Grid"},{"id":"28536","type":"Grid"}],"left":[{"id":"28532","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"28553","type":"GlyphRenderer"}],"title":{"id":"28556","type":"Title"},"toolbar":{"id":"28543","type":"Toolbar"},"x_range":{"id":"28519","type":"DataRange1d"},"x_scale":{"id":"28523","type":"LinearScale"},"y_range":{"id":"28521","type":"DataRange1d"},"y_scale":{"id":"28525","type":"LinearScale"}},"id":"28518","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"28563","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"28521","type":"DataRange1d"},{"attributes":{"ticker":{"id":"28528","type":"BasicTicker"}},"id":"28531","type":"Grid"},{"attributes":{"formatter":{"id":"28557","type":"BasicTickFormatter"},"ticker":{"id":"28528","type":"BasicTicker"}},"id":"28527","type":"LinearAxis"},{"attributes":{"callback":null},"id":"28519","type":"DataRange1d"},{"attributes":{},"id":"28533","type":"BasicTicker"},{"attributes":{},"id":"28561","type":"Selection"},{"attributes":{"data_source":{"id":"28550","type":"ColumnDataSource"},"glyph":{"id":"28551","type":"Ellipse"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"28552","type":"Ellipse"},"selection_glyph":null,"view":{"id":"28554","type":"CDSView"}},"id":"28553","type":"GlyphRenderer"},{"attributes":{},"id":"28537","type":"PanTool"},{"attributes":{},"id":"28540","type":"SaveTool"},{"attributes":{},"id":"28523","type":"LinearScale"},{"attributes":{},"id":"28541","type":"ResetTool"},{"attributes":{},"id":"28525","type":"LinearScale"},{"attributes":{"formatter":{"id":"28559","type":"BasicTickFormatter"},"ticker":{"id":"28533","type":"BasicTicker"}},"id":"28532","type":"LinearAxis"},{"attributes":{},"id":"28538","type":"WheelZoomTool"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.3},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"28552","type":"Ellipse"},{"attributes":{},"id":"28559","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"width":[0.2,0.3,0.1],"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"28561","type":"Selection"},"selection_policy":{"id":"28562","type":"UnionRenderers"}},"id":"28550","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"28563","type":"BoxAnnotation"}},"id":"28539","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"28537","type":"PanTool"},{"id":"28538","type":"WheelZoomTool"},{"id":"28539","type":"BoxZoomTool"},{"id":"28540","type":"SaveTool"},{"id":"28541","type":"ResetTool"},{"id":"28542","type":"HelpTool"}]},"id":"28543","type":"Toolbar"},{"attributes":{},"id":"28557","type":"BasicTickFormatter"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_color":{"value":"#CAB2D6"},"height":{"units":"data","value":0.3},"line_color":{"value":"#CAB2D6"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"28551","type":"Ellipse"},{"attributes":{},"id":"28562","type":"UnionRenderers"}],"root_ids":["28518"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"03c227b8-7fd9-4244-95e6-39d432e65dec","roots":{"28518":"f50b9a5a-ec3a-4c66-ac4d-528315222a4a"}}];
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