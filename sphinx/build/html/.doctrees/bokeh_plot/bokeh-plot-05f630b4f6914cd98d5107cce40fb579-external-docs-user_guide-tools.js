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
      };var element = document.getElementById("1b574317-dc0c-4f19-99ea-3b22bba8a98b");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '1b574317-dc0c-4f19-99ea-3b22bba8a98b' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"bf7feded-cc43-40fa-a9a3-3f4d95ae000c":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.4},"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"36012","type":"Patches"},{"attributes":{},"id":"36034","type":"BasicTickFormatter"},{"attributes":{},"id":"35989","type":"BasicTicker"},{"attributes":{"overlay":{"id":"36042","type":"BoxAnnotation"}},"id":"36000","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"36034","type":"BasicTickFormatter"},"ticker":{"id":"35994","type":"BasicTicker"}},"id":"35993","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.4},"fill_color":{"value":"green"},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"36017","type":"Patches"},{"attributes":{"ticker":{"id":"35989","type":"BasicTicker"}},"id":"35992","type":"Grid"},{"attributes":{},"id":"35984","type":"LinearScale"},{"attributes":{"data_source":{"id":"36011","type":"ColumnDataSource"},"glyph":{"id":"36012","type":"Patches"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"36013","type":"Patches"},"selection_glyph":null,"view":{"id":"36015","type":"CDSView"}},"id":"36014","type":"GlyphRenderer"},{"attributes":{},"id":"35999","type":"WheelZoomTool"},{"attributes":{"callback":null,"data":{"xs":[],"ys":[]},"selected":{"id":"36036","type":"Selection"},"selection_policy":{"id":"36037","type":"UnionRenderers"}},"id":"36011","type":"ColumnDataSource"},{"attributes":{},"id":"36041","type":"UnionRenderers"},{"attributes":{},"id":"36032","type":"BasicTickFormatter"},{"attributes":{"text":"Poly Edit Tool"},"id":"35978","type":"Title"},{"attributes":{"dimension":1,"ticker":{"id":"35994","type":"BasicTicker"}},"id":"35997","type":"Grid"},{"attributes":{"source":{"id":"36016","type":"ColumnDataSource"}},"id":"36020","type":"CDSView"},{"attributes":{},"id":"36040","type":"Selection"},{"attributes":{},"id":"35994","type":"BasicTicker"},{"attributes":{"data_source":{"id":"36021","type":"ColumnDataSource"},"glyph":{"id":"36022","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"36023","type":"Circle"},"selection_glyph":null,"view":{"id":"36025","type":"CDSView"}},"id":"36024","type":"GlyphRenderer"},{"attributes":{},"id":"36003","type":"HelpTool"},{"attributes":{"renderers":[{"id":"36014","type":"GlyphRenderer"},{"id":"36019","type":"GlyphRenderer"}],"vertex_renderer":null},"id":"36026","type":"PolyDrawTool"},{"attributes":{"source":{"id":"36021","type":"ColumnDataSource"}},"id":"36025","type":"CDSView"},{"attributes":{"below":[{"id":"35988","type":"LinearAxis"}],"center":[{"id":"35992","type":"Grid"},{"id":"35997","type":"Grid"}],"left":[{"id":"35993","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"36014","type":"GlyphRenderer"},{"id":"36019","type":"GlyphRenderer"},{"id":"36024","type":"GlyphRenderer"}],"title":{"id":"35978","type":"Title"},"toolbar":{"id":"36004","type":"Toolbar"},"x_range":{"id":"35980","type":"Range1d"},"x_scale":{"id":"35984","type":"LinearScale"},"y_range":{"id":"35982","type":"Range1d"},"y_scale":{"id":"35986","type":"LinearScale"}},"id":"35977","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"36036","type":"Selection"},{"attributes":{"callback":null,"data":{"x":[],"y":[]},"selected":{"id":"36040","type":"Selection"},"selection_policy":{"id":"36041","type":"UnionRenderers"}},"id":"36021","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"xs":[[1,2,3]],"ys":[[3,5,2]]},"selected":{"id":"36038","type":"Selection"},"selection_policy":{"id":"36039","type":"UnionRenderers"}},"id":"36016","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"36022","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"36023","type":"Circle"},{"attributes":{"formatter":{"id":"36032","type":"BasicTickFormatter"},"ticker":{"id":"35989","type":"BasicTicker"}},"id":"35988","type":"LinearAxis"},{"attributes":{"data_source":{"id":"36016","type":"ColumnDataSource"},"glyph":{"id":"36017","type":"Patches"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"36018","type":"Patches"},"selection_glyph":null,"view":{"id":"36020","type":"CDSView"}},"id":"36019","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"36042","type":"BoxAnnotation"},{"attributes":{"callback":null,"end":10},"id":"35980","type":"Range1d"},{"attributes":{},"id":"35986","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"36018","type":"Patches"},{"attributes":{},"id":"36039","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"36013","type":"Patches"},{"attributes":{},"id":"36001","type":"SaveTool"},{"attributes":{},"id":"36037","type":"UnionRenderers"},{"attributes":{"callback":null,"end":10},"id":"35982","type":"Range1d"},{"attributes":{},"id":"36002","type":"ResetTool"},{"attributes":{},"id":"36038","type":"Selection"},{"attributes":{"active_drag":{"id":"36027","type":"PolyEditTool"},"active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"35998","type":"PanTool"},{"id":"35999","type":"WheelZoomTool"},{"id":"36000","type":"BoxZoomTool"},{"id":"36001","type":"SaveTool"},{"id":"36002","type":"ResetTool"},{"id":"36003","type":"HelpTool"},{"id":"36026","type":"PolyDrawTool"},{"id":"36027","type":"PolyEditTool"}]},"id":"36004","type":"Toolbar"},{"attributes":{},"id":"35998","type":"PanTool"},{"attributes":{"source":{"id":"36011","type":"ColumnDataSource"}},"id":"36015","type":"CDSView"},{"attributes":{"renderers":[{"id":"36014","type":"GlyphRenderer"},{"id":"36019","type":"GlyphRenderer"}],"vertex_renderer":{"id":"36024","type":"GlyphRenderer"}},"id":"36027","type":"PolyEditTool"}],"root_ids":["35977"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"bf7feded-cc43-40fa-a9a3-3f4d95ae000c","roots":{"35977":"1b574317-dc0c-4f19-99ea-3b22bba8a98b"}}];
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