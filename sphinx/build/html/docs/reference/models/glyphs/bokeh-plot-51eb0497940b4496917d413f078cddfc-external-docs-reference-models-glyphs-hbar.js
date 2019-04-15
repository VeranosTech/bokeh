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
      };var element = document.getElementById("23fdb907-5ff0-4936-9bf4-b416b6d7207a");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '23fdb907-5ff0-4936-9bf4-b416b6d7207a' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"7b3288ee-16a8-445a-adfa-58a96be3bf0c":{"roots":{"references":[{"attributes":{"callback":null},"id":"10014","type":"DataRange1d"},{"attributes":{},"id":"10016","type":"LinearScale"},{"attributes":{},"id":"10021","type":"Selection"},{"attributes":{"fill_color":{"value":"#b3de69"},"height":{"value":0.5},"right":{"field":"right"},"y":{"field":"y"}},"id":"10003","type":"HBar"},{"attributes":{},"id":"10017","type":"BasicTickFormatter"},{"attributes":{},"id":"10015","type":"LinearScale"},{"attributes":{},"id":"10010","type":"BasicTicker"},{"attributes":{"ticker":{"id":"10008","type":"BasicTicker"}},"id":"10009","type":"Grid"},{"attributes":{"below":[{"id":"10006","type":"LinearAxis"}],"center":[{"id":"10009","type":"Grid"},{"id":"10011","type":"Grid"}],"left":[{"id":"10007","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"10004","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"10013","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"10012","type":"DataRange1d"},"x_scale":{"id":"10016","type":"LinearScale"},"y_range":{"id":"10014","type":"DataRange1d"},"y_scale":{"id":"10015","type":"LinearScale"}},"id":"10001","type":"Plot"},{"attributes":{"formatter":{"id":"10017","type":"BasicTickFormatter"},"ticker":{"id":"10008","type":"BasicTicker"}},"id":"10006","type":"LinearAxis"},{"attributes":{},"id":"10008","type":"BasicTicker"},{"attributes":{"source":{"id":"10000","type":"ColumnDataSource"}},"id":"10005","type":"CDSView"},{"attributes":{"data_source":{"id":"10000","type":"ColumnDataSource"},"glyph":{"id":"10003","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"10005","type":"CDSView"}},"id":"10004","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"10019","type":"BasicTickFormatter"},"ticker":{"id":"10010","type":"BasicTicker"}},"id":"10007","type":"LinearAxis"},{"attributes":{"dimension":1,"ticker":{"id":"10010","type":"BasicTicker"}},"id":"10011","type":"Grid"},{"attributes":{},"id":"10019","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"10013","type":"Toolbar"},{"attributes":{"callback":null},"id":"10012","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"right":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]}},"selected":{"id":"10021","type":"Selection"},"selection_policy":{"id":"10022","type":"UnionRenderers"}},"id":"10000","type":"ColumnDataSource"},{"attributes":{},"id":"10022","type":"UnionRenderers"}],"root_ids":["10001"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"7b3288ee-16a8-445a-adfa-58a96be3bf0c","roots":{"10001":"23fdb907-5ff0-4936-9bf4-b416b6d7207a"}}];
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