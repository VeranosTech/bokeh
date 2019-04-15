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
      };var element = document.getElementById("bd0deaf0-e622-4ade-97f1-f16381a5e707");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'bd0deaf0-e622-4ade-97f1-f16381a5e707' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"54f3d78d-903f-49df-b039-1e7a7d626b61":{"roots":{"references":[{"attributes":{"source":{"id":"10524","type":"ColumnDataSource"}},"id":"10529","type":"CDSView"},{"attributes":{},"id":"10541","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"10536","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"10537","type":"Toolbar"},{"attributes":{"data_source":{"id":"10524","type":"ColumnDataSource"},"glyph":{"id":"10527","type":"MultiPolygons"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"10529","type":"CDSView"}},"id":"10528","type":"GlyphRenderer"},{"attributes":{},"id":"10545","type":"Selection"},{"attributes":{"formatter":{"id":"10541","type":"BasicTickFormatter"},"ticker":{"id":"10532","type":"BasicTicker"}},"id":"10530","type":"LinearAxis"},{"attributes":{"dimension":1,"ticker":{"id":"10534","type":"BasicTicker"}},"id":"10535","type":"Grid"},{"attributes":{"callback":null,"data":{"xs":[[[[1,1,2,2]]],[[[1,1,3],[1.5,1.5,2]]],[[[2,2,4,4],[2.5,2.5,3],[3.5,3,3]],[[3.5,3.5,4]]]],"ys":[[[[4,3,3,4]]],[[[1,3,1],[1.5,2,1.5]]],[[[2,4,4,2],[3,3.5,3.5],[2.5,2.5,3]],[[1,1.5,1.5]]]]},"selected":{"id":"10545","type":"Selection"},"selection_policy":{"id":"10546","type":"UnionRenderers"}},"id":"10524","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"10543","type":"BasicTickFormatter"},"ticker":{"id":"10534","type":"BasicTicker"}},"id":"10531","type":"LinearAxis"},{"attributes":{},"id":"10546","type":"UnionRenderers"},{"attributes":{},"id":"10539","type":"LinearScale"},{"attributes":{},"id":"10532","type":"BasicTicker"},{"attributes":{"line_width":{"value":2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"10527","type":"MultiPolygons"},{"attributes":{},"id":"10540","type":"LinearScale"},{"attributes":{"ticker":{"id":"10532","type":"BasicTicker"}},"id":"10533","type":"Grid"},{"attributes":{},"id":"10543","type":"BasicTickFormatter"},{"attributes":{},"id":"10534","type":"BasicTicker"},{"attributes":{"callback":null},"id":"10538","type":"DataRange1d"},{"attributes":{"below":[{"id":"10530","type":"LinearAxis"}],"center":[{"id":"10533","type":"Grid"},{"id":"10535","type":"Grid"}],"left":[{"id":"10531","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"10528","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"10537","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"10536","type":"DataRange1d"},"x_scale":{"id":"10540","type":"LinearScale"},"y_range":{"id":"10538","type":"DataRange1d"},"y_scale":{"id":"10539","type":"LinearScale"}},"id":"10525","type":"Plot"}],"root_ids":["10525"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"54f3d78d-903f-49df-b039-1e7a7d626b61","roots":{"10525":"bd0deaf0-e622-4ade-97f1-f16381a5e707"}}];
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