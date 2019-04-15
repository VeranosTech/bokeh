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
      };var element = document.getElementById("947f8467-7e06-4908-93d8-0e13ff68b258");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '947f8467-7e06-4908-93d8-0e13ff68b258' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"04b28baf-e2a3-4c75-a507-cff441796e05":{"roots":{"references":[{"attributes":{"dimension":1,"ticker":{"id":"29197","type":"BasicTicker"}},"id":"29200","type":"Grid"},{"attributes":{"below":[{"id":"29191","type":"LinearAxis"}],"center":[{"id":"29195","type":"Grid"},{"id":"29200","type":"Grid"}],"left":[{"id":"29196","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"29217","type":"GlyphRenderer"},{"id":"29222","type":"GlyphRenderer"}],"title":{"id":"29225","type":"Title"},"toolbar":{"id":"29207","type":"Toolbar"},"x_range":{"id":"29183","type":"DataRange1d"},"x_scale":{"id":"29187","type":"LinearScale"},"y_range":{"id":"29185","type":"DataRange1d"},"y_scale":{"id":"29189","type":"LinearScale"}},"id":"29182","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"29214","type":"ColumnDataSource"},"glyph":{"id":"29215","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"29216","type":"Line"},"selection_glyph":null,"view":{"id":"29218","type":"CDSView"}},"id":"29217","type":"GlyphRenderer"},{"attributes":{"source":{"id":"29214","type":"ColumnDataSource"}},"id":"29218","type":"CDSView"},{"attributes":{},"id":"29230","type":"Selection"},{"attributes":{},"id":"29205","type":"ResetTool"},{"attributes":{},"id":"29206","type":"HelpTool"},{"attributes":{},"id":"29232","type":"Selection"},{"attributes":{},"id":"29187","type":"LinearScale"},{"attributes":{},"id":"29228","type":"BasicTickFormatter"},{"attributes":{},"id":"29204","type":"SaveTool"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,8,7,3]},"selected":{"id":"29232","type":"Selection"},"selection_policy":{"id":"29233","type":"UnionRenderers"}},"id":"29219","type":"ColumnDataSource"},{"attributes":{},"id":"29197","type":"BasicTicker"},{"attributes":{"formatter":{"id":"29228","type":"BasicTickFormatter"},"ticker":{"id":"29197","type":"BasicTicker"}},"id":"29196","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"29234","type":"BoxAnnotation"},{"attributes":{},"id":"29226","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"29226","type":"BasicTickFormatter"},"ticker":{"id":"29192","type":"BasicTicker"}},"id":"29191","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,8,7,3]},"selected":{"id":"29230","type":"Selection"},"selection_policy":{"id":"29231","type":"UnionRenderers"}},"id":"29214","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"29221","type":"Circle"},{"attributes":{},"id":"29192","type":"BasicTicker"},{"attributes":{"callback":null},"id":"29183","type":"DataRange1d"},{"attributes":{"data_source":{"id":"29219","type":"ColumnDataSource"},"glyph":{"id":"29220","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"29221","type":"Circle"},"selection_glyph":null,"view":{"id":"29223","type":"CDSView"}},"id":"29222","type":"GlyphRenderer"},{"attributes":{"text":""},"id":"29225","type":"Title"},{"attributes":{"overlay":{"id":"29234","type":"BoxAnnotation"}},"id":"29203","type":"BoxZoomTool"},{"attributes":{},"id":"29201","type":"PanTool"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"29220","type":"Circle"},{"attributes":{},"id":"29202","type":"WheelZoomTool"},{"attributes":{},"id":"29231","type":"UnionRenderers"},{"attributes":{"ticker":{"id":"29192","type":"BasicTicker"}},"id":"29195","type":"Grid"},{"attributes":{"source":{"id":"29219","type":"ColumnDataSource"}},"id":"29223","type":"CDSView"},{"attributes":{},"id":"29233","type":"UnionRenderers"},{"attributes":{},"id":"29189","type":"LinearScale"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"29216","type":"Line"},{"attributes":{"callback":null},"id":"29185","type":"DataRange1d"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"29215","type":"Line"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"29201","type":"PanTool"},{"id":"29202","type":"WheelZoomTool"},{"id":"29203","type":"BoxZoomTool"},{"id":"29204","type":"SaveTool"},{"id":"29205","type":"ResetTool"},{"id":"29206","type":"HelpTool"}]},"id":"29207","type":"Toolbar"}],"root_ids":["29182"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"04b28baf-e2a3-4c75-a507-cff441796e05","roots":{"29182":"947f8467-7e06-4908-93d8-0e13ff68b258"}}];
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