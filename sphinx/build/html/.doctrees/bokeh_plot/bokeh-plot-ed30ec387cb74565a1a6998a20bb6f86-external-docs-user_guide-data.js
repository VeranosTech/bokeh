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
      };var element = document.getElementById("a53fafec-d42d-43ce-b68b-3a07ffa72a2f");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'a53fafec-d42d-43ce-b68b-3a07ffa72a2f' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"1f0aaf6d-453d-4de3-bcac-d36b9be1a78a":{"roots":{"references":[{"attributes":{},"id":"21615","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"ticker":{"id":"21585","type":"BasicTicker"}},"id":"21588","type":"Grid"},{"attributes":{},"id":"21603","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"21609","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"21549","type":"LinearAxis"}],"center":[{"id":"21553","type":"Grid"},{"id":"21558","type":"Grid"}],"left":[{"id":"21554","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"21570","type":"GlyphRenderer"}],"title":{"id":"21602","type":"Title"},"toolbar":{"id":"21562","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"21541","type":"DataRange1d"},"x_scale":{"id":"21545","type":"LinearScale"},"y_range":{"id":"21543","type":"DataRange1d"},"y_scale":{"id":"21547","type":"LinearScale"}},"id":"21540","subtype":"Figure","type":"Plot"},{"attributes":{"below":[{"id":"21579","type":"LinearAxis"}],"center":[{"id":"21583","type":"Grid"},{"id":"21588","type":"Grid"}],"left":[{"id":"21584","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"21600","type":"GlyphRenderer"}],"title":{"id":"21612","type":"Title"},"toolbar":{"id":"21592","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"21541","type":"DataRange1d"},"x_scale":{"id":"21575","type":"LinearScale"},"y_range":{"id":"21543","type":"DataRange1d"},"y_scale":{"id":"21577","type":"LinearScale"}},"id":"21572","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"21597","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"21559","type":"BoxSelectTool"},{"id":"21560","type":"HoverTool"},{"id":"21561","type":"ResetTool"}]},"id":"21562","type":"Toolbar"},{"attributes":{"text":""},"id":"21612","type":"Title"},{"attributes":{"formatter":{"id":"21603","type":"BasicTickFormatter"},"ticker":{"id":"21550","type":"BasicTicker"}},"id":"21549","type":"LinearAxis"},{"attributes":{"data_source":{"id":"21537","type":"ColumnDataSource"},"glyph":{"id":"21597","type":"Circle"},"hover_glyph":{"id":"21599","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"21598","type":"Circle"},"selection_glyph":null,"view":{"id":"21539","type":"CDSView"}},"id":"21600","type":"GlyphRenderer"},{"attributes":{},"id":"21577","type":"LinearScale"},{"attributes":{"callback":null},"id":"21560","type":"HoverTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"21589","type":"BoxSelectTool"},{"id":"21590","type":"HoverTool"},{"id":"21591","type":"ResetTool"}]},"id":"21592","type":"Toolbar"},{"attributes":{},"id":"21550","type":"BasicTicker"},{"attributes":{"dimension":1,"ticker":{"id":"21555","type":"BasicTicker"}},"id":"21558","type":"Grid"},{"attributes":{"toolbar":{"id":"21622","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"21623","type":"ToolbarBox"},{"attributes":{"filters":[{"id":"21538","type":"BooleanFilter"}],"source":{"id":"21537","type":"ColumnDataSource"}},"id":"21539","type":"CDSView"},{"attributes":{},"id":"21555","type":"BasicTicker"},{"attributes":{},"id":"21613","type":"BasicTickFormatter"},{"attributes":{},"id":"21580","type":"BasicTicker"},{"attributes":{"formatter":{"id":"21613","type":"BasicTickFormatter"},"ticker":{"id":"21580","type":"BasicTicker"}},"id":"21579","type":"LinearAxis"},{"attributes":{},"id":"21608","type":"UnionRenderers"},{"attributes":{},"id":"21545","type":"LinearScale"},{"attributes":{"children":[[{"id":"21540","subtype":"Figure","type":"Plot"},0,0],[{"id":"21572","subtype":"Figure","type":"Plot"},0,1]]},"id":"21621","type":"GridBox"},{"attributes":{"text":""},"id":"21602","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"21568","type":"Circle"},{"attributes":{"callback":null,"overlay":{"id":"21609","type":"BoxAnnotation"}},"id":"21559","type":"BoxSelectTool"},{"attributes":{"source":{"id":"21537","type":"ColumnDataSource"}},"id":"21571","type":"CDSView"},{"attributes":{},"id":"21605","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"21598","type":"Circle"},{"attributes":{"formatter":{"id":"21615","type":"BasicTickFormatter"},"ticker":{"id":"21585","type":"BasicTicker"}},"id":"21584","type":"LinearAxis"},{"attributes":{},"id":"21547","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"21619","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"21569","type":"Circle"},{"attributes":{},"id":"21575","type":"LinearScale"},{"attributes":{},"id":"21591","type":"ResetTool"},{"attributes":{"callback":null},"id":"21541","type":"DataRange1d"},{"attributes":{"callback":null,"overlay":{"id":"21619","type":"BoxAnnotation"}},"id":"21589","type":"BoxSelectTool"},{"attributes":{"booleans":[false,false,true,true,true]},"id":"21538","type":"BooleanFilter"},{"attributes":{"ticker":{"id":"21580","type":"BasicTicker"}},"id":"21583","type":"Grid"},{"attributes":{"callback":null},"id":"21590","type":"HoverTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"21567","type":"Circle"},{"attributes":{"tools":[{"id":"21559","type":"BoxSelectTool"},{"id":"21560","type":"HoverTool"},{"id":"21561","type":"ResetTool"},{"id":"21589","type":"BoxSelectTool"},{"id":"21590","type":"HoverTool"},{"id":"21591","type":"ResetTool"}]},"id":"21622","type":"ProxyToolbar"},{"attributes":{"callback":null},"id":"21543","type":"DataRange1d"},{"attributes":{},"id":"21585","type":"BasicTicker"},{"attributes":{"children":[{"id":"21623","type":"ToolbarBox"},{"id":"21621","type":"GridBox"}]},"id":"21624","type":"Column"},{"attributes":{},"id":"21561","type":"ResetTool"},{"attributes":{"ticker":{"id":"21550","type":"BasicTicker"}},"id":"21553","type":"Grid"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"21599","type":"Circle"},{"attributes":{},"id":"21607","type":"Selection"},{"attributes":{"data_source":{"id":"21537","type":"ColumnDataSource"},"glyph":{"id":"21567","type":"Circle"},"hover_glyph":{"id":"21569","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"21568","type":"Circle"},"selection_glyph":null,"view":{"id":"21571","type":"CDSView"}},"id":"21570","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"21605","type":"BasicTickFormatter"},"ticker":{"id":"21555","type":"BasicTicker"}},"id":"21554","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[1,2,3,4,5]},"selected":{"id":"21607","type":"Selection"},"selection_policy":{"id":"21608","type":"UnionRenderers"}},"id":"21537","type":"ColumnDataSource"}],"root_ids":["21624"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"1f0aaf6d-453d-4de3-bcac-d36b9be1a78a","roots":{"21624":"a53fafec-d42d-43ce-b68b-3a07ffa72a2f"}}];
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