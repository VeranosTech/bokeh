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
      };var element = document.getElementById("2e061c25-e7d0-4dab-b6b4-aa6883702839");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '2e061c25-e7d0-4dab-b6b4-aa6883702839' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"3455c9c3-60c0-47a2-88a0-d05907290f91":{"roots":{"references":[{"attributes":{},"id":"26876","type":"SaveTool"},{"attributes":{},"id":"26861","type":"LinearScale"},{"attributes":{},"id":"26878","type":"HelpTool"},{"attributes":{},"id":"26869","type":"BasicTicker"},{"attributes":{"ticker":{"id":"26864","type":"BasicTicker"}},"id":"26867","type":"Grid"},{"attributes":{"callback":null},"id":"26855","type":"DataRange1d"},{"attributes":{"data_source":{"id":"26886","type":"ColumnDataSource"},"glyph":{"id":"26887","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26888","type":"Circle"},"selection_glyph":null,"view":{"id":"26890","type":"CDSView"}},"id":"26889","type":"GlyphRenderer"},{"attributes":{"dimension":1,"ticker":{"id":"26869","type":"BasicTicker"}},"id":"26872","type":"Grid"},{"attributes":{"formatter":{"id":"26893","type":"BasicTickFormatter"},"ticker":{"id":"26864","type":"BasicTicker"}},"id":"26863","type":"LinearAxis"},{"attributes":{},"id":"26877","type":"ResetTool"},{"attributes":{"formatter":{"id":"26895","type":"BasicTickFormatter"},"ticker":{"id":"26869","type":"BasicTicker"}},"id":"26868","type":"LinearAxis"},{"attributes":{},"id":"26898","type":"UnionRenderers"},{"attributes":{},"id":"26897","type":"Selection"},{"attributes":{},"id":"26864","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"26873","type":"PanTool"},{"id":"26874","type":"WheelZoomTool"},{"id":"26875","type":"BoxZoomTool"},{"id":"26876","type":"SaveTool"},{"id":"26877","type":"ResetTool"},{"id":"26878","type":"HelpTool"}]},"id":"26879","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"26888","type":"Circle"},{"attributes":{},"id":"26859","type":"LinearScale"},{"attributes":{"callback":null},"id":"26857","type":"DataRange1d"},{"attributes":{},"id":"26893","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"26887","type":"Circle"},{"attributes":{},"id":"26895","type":"BasicTickFormatter"},{"attributes":{},"id":"26873","type":"PanTool"},{"attributes":{"source":{"id":"26886","type":"ColumnDataSource"}},"id":"26890","type":"CDSView"},{"attributes":{"text":""},"id":"26892","type":"Title"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":{"id":"26897","type":"Selection"},"selection_policy":{"id":"26898","type":"UnionRenderers"}},"id":"26886","type":"ColumnDataSource"},{"attributes":{},"id":"26874","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"26863","type":"LinearAxis"}],"center":[{"id":"26867","type":"Grid"},{"id":"26872","type":"Grid"}],"left":[{"id":"26868","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"26889","type":"GlyphRenderer"}],"title":{"id":"26892","type":"Title"},"toolbar":{"id":"26879","type":"Toolbar"},"x_range":{"id":"26855","type":"DataRange1d"},"x_scale":{"id":"26859","type":"LinearScale"},"y_range":{"id":"26857","type":"DataRange1d"},"y_scale":{"id":"26861","type":"LinearScale"}},"id":"26854","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"26899","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"26899","type":"BoxAnnotation"}},"id":"26875","type":"BoxZoomTool"}],"root_ids":["26854"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"3455c9c3-60c0-47a2-88a0-d05907290f91","roots":{"26854":"2e061c25-e7d0-4dab-b6b4-aa6883702839"}}];
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