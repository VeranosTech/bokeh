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
      };var element = document.getElementById("a7412fc3-f1bf-4363-949c-07f1964e9a82");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'a7412fc3-f1bf-4363-949c-07f1964e9a82' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"e7c3d661-252c-4eff-a69d-a83c44325630":{"roots":{"references":[{"attributes":{},"id":"31082","type":"Selection"},{"attributes":{},"id":"31048","type":"BasicTicker"},{"attributes":{"args":{"object":{"id":"31066","type":"GlyphRenderer"},"toggle":{"id":"31072","type":"Toggle"}},"code":"object.visible = toggle.active\\n"},"id":"31071","type":"CustomJS"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"31057","type":"Toolbar"},{"attributes":{"callback":null},"id":"31041","type":"DataRange1d"},{"attributes":{"dimension":1,"ticker":{"id":"31053","type":"BasicTicker"}},"id":"31056","type":"Grid"},{"attributes":{},"id":"31080","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"31039","type":"DataRange1d"},{"attributes":{},"id":"31083","type":"UnionRenderers"},{"attributes":{"args":{"object":{"id":"31068","type":"BoxAnnotation"},"toggle":{"id":"31070","type":"Toggle"}},"code":"object.visible = toggle.active\\n"},"id":"31069","type":"CustomJS"},{"attributes":{"children":[{"id":"31038","subtype":"Figure","type":"Plot"}]},"id":"31073","type":"Row"},{"attributes":{"button_type":"success","callback":{"id":"31071","type":"CustomJS"},"icon":null,"label":"Pink Line"},"id":"31072","type":"Toggle"},{"attributes":{},"id":"31053","type":"BasicTicker"},{"attributes":{},"id":"31045","type":"LinearScale"},{"attributes":{"text":""},"id":"31077","type":"Title"},{"attributes":{"button_type":"success","callback":{"id":"31069","type":"CustomJS"},"icon":null,"label":"Green Box"},"id":"31070","type":"Toggle"},{"attributes":{"formatter":{"id":"31080","type":"BasicTickFormatter"},"ticker":{"id":"31053","type":"BasicTicker"}},"id":"31052","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[2,1,2]},"selected":{"id":"31084","type":"Selection"},"selection_policy":{"id":"31085","type":"UnionRenderers"}},"id":"31063","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"31060","type":"Line"},{"attributes":{},"id":"31085","type":"UnionRenderers"},{"attributes":{"line_color":"blue","x":{"field":"x"},"y":{"field":"y"}},"id":"31059","type":"Line"},{"attributes":{"below":[{"id":"31047","type":"LinearAxis"}],"center":[{"id":"31051","type":"Grid"},{"id":"31056","type":"Grid"},{"id":"31068","type":"BoxAnnotation"}],"left":[{"id":"31052","type":"LinearAxis"}],"plot_height":200,"renderers":[{"id":"31061","type":"GlyphRenderer"},{"id":"31066","type":"GlyphRenderer"}],"title":{"id":"31077","type":"Title"},"toolbar":{"id":"31057","type":"Toolbar"},"x_range":{"id":"31039","type":"DataRange1d"},"x_scale":{"id":"31043","type":"LinearScale"},"y_range":{"id":"31041","type":"DataRange1d"},"y_scale":{"id":"31045","type":"LinearScale"}},"id":"31038","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"31084","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"green"},"left":1.5,"right":2.5},"id":"31068","type":"BoxAnnotation"},{"attributes":{},"id":"31078","type":"BasicTickFormatter"},{"attributes":{"line_color":"pink","x":{"field":"x"},"y":{"field":"y"}},"id":"31064","type":"Line"},{"attributes":{"children":[{"id":"31073","type":"Row"},{"id":"31074","type":"Row"}]},"id":"31075","type":"Column"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"31065","type":"Line"},{"attributes":{"data_source":{"id":"31063","type":"ColumnDataSource"},"glyph":{"id":"31064","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"31065","type":"Line"},"selection_glyph":null,"view":{"id":"31067","type":"CDSView"}},"id":"31066","type":"GlyphRenderer"},{"attributes":{"source":{"id":"31063","type":"ColumnDataSource"}},"id":"31067","type":"CDSView"},{"attributes":{"source":{"id":"31058","type":"ColumnDataSource"}},"id":"31062","type":"CDSView"},{"attributes":{"data_source":{"id":"31058","type":"ColumnDataSource"},"glyph":{"id":"31059","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"31060","type":"Line"},"selection_glyph":null,"view":{"id":"31062","type":"CDSView"}},"id":"31061","type":"GlyphRenderer"},{"attributes":{"children":[{"id":"31070","type":"Toggle"},{"id":"31072","type":"Toggle"}]},"id":"31074","type":"Row"},{"attributes":{"formatter":{"id":"31078","type":"BasicTickFormatter"},"ticker":{"id":"31048","type":"BasicTicker"}},"id":"31047","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,1]},"selected":{"id":"31082","type":"Selection"},"selection_policy":{"id":"31083","type":"UnionRenderers"}},"id":"31058","type":"ColumnDataSource"},{"attributes":{},"id":"31043","type":"LinearScale"},{"attributes":{"ticker":{"id":"31048","type":"BasicTicker"}},"id":"31051","type":"Grid"}],"root_ids":["31075"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"e7c3d661-252c-4eff-a69d-a83c44325630","roots":{"31075":"a7412fc3-f1bf-4363-949c-07f1964e9a82"}}];
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