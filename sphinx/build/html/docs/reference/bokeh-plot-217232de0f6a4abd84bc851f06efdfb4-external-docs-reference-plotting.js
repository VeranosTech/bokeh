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
      };var element = document.getElementById("f1a9889e-e1ff-4002-8792-0ae59839179c");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'f1a9889e-e1ff-4002-8792-0ae59839179c' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"49c4cf03-437b-4001-b2a0-de8d543ed86c":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"14781","type":"PanTool"},{"id":"14782","type":"WheelZoomTool"},{"id":"14783","type":"BoxZoomTool"},{"id":"14784","type":"SaveTool"},{"id":"14785","type":"ResetTool"},{"id":"14786","type":"HelpTool"}]},"id":"14787","type":"Toolbar"},{"attributes":{},"id":"14769","type":"LinearScale"},{"attributes":{"text":""},"id":"14800","type":"Title"},{"attributes":{},"id":"14781","type":"PanTool"},{"attributes":{"formatter":{"id":"14801","type":"BasicTickFormatter"},"ticker":{"id":"14772","type":"BasicTicker"}},"id":"14771","type":"LinearAxis"},{"attributes":{},"id":"14801","type":"BasicTickFormatter"},{"attributes":{},"id":"14782","type":"WheelZoomTool"},{"attributes":{},"id":"14772","type":"BasicTicker"},{"attributes":{},"id":"14803","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"14807","type":"BoxAnnotation"}},"id":"14783","type":"BoxZoomTool"},{"attributes":{"ticker":{"id":"14772","type":"BasicTicker"}},"id":"14775","type":"Grid"},{"attributes":{},"id":"14805","type":"Selection"},{"attributes":{},"id":"14784","type":"SaveTool"},{"attributes":{"below":[{"id":"14771","type":"LinearAxis"}],"center":[{"id":"14775","type":"Grid"},{"id":"14780","type":"Grid"}],"left":[{"id":"14776","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"14797","type":"GlyphRenderer"}],"title":{"id":"14800","type":"Title"},"toolbar":{"id":"14787","type":"Toolbar"},"x_range":{"id":"14763","type":"DataRange1d"},"x_scale":{"id":"14767","type":"LinearScale"},"y_range":{"id":"14765","type":"DataRange1d"},"y_scale":{"id":"14769","type":"LinearScale"}},"id":"14762","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"14803","type":"BasicTickFormatter"},"ticker":{"id":"14777","type":"BasicTicker"}},"id":"14776","type":"LinearAxis"},{"attributes":{},"id":"14806","type":"UnionRenderers"},{"attributes":{},"id":"14785","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":20},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"width":{"units":"data","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"14796","type":"Ellipse"},{"attributes":{},"id":"14777","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"14805","type":"Selection"},"selection_policy":{"id":"14806","type":"UnionRenderers"}},"id":"14794","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"14807","type":"BoxAnnotation"},{"attributes":{},"id":"14786","type":"HelpTool"},{"attributes":{"callback":null},"id":"14763","type":"DataRange1d"},{"attributes":{"dimension":1,"ticker":{"id":"14777","type":"BasicTicker"}},"id":"14780","type":"Grid"},{"attributes":{"data_source":{"id":"14794","type":"ColumnDataSource"},"glyph":{"id":"14795","type":"Ellipse"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14796","type":"Ellipse"},"selection_glyph":null,"view":{"id":"14798","type":"CDSView"}},"id":"14797","type":"GlyphRenderer"},{"attributes":{},"id":"14767","type":"LinearScale"},{"attributes":{"source":{"id":"14794","type":"ColumnDataSource"}},"id":"14798","type":"CDSView"},{"attributes":{"callback":null},"id":"14765","type":"DataRange1d"},{"attributes":{"fill_color":{"value":null},"height":{"units":"data","value":20},"line_color":{"value":"#386CB0"},"line_width":{"value":2},"width":{"units":"data","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"14795","type":"Ellipse"}],"root_ids":["14762"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"49c4cf03-437b-4001-b2a0-de8d543ed86c","roots":{"14762":"f1a9889e-e1ff-4002-8792-0ae59839179c"}}];
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