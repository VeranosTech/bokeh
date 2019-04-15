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
      };var element = document.getElementById("3e94b06d-4db5-43e3-a0f1-2ff66173198c");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '3e94b06d-4db5-43e3-a0f1-2ff66173198c' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"ef76413f-346e-4d83-8527-1b5319937351":{"roots":{"references":[{"attributes":{"below":[{"id":"25914","type":"LinearAxis"}],"center":[{"id":"25918","type":"Grid"},{"id":"25923","type":"Grid"}],"left":[{"id":"25919","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"25940","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"25930","type":"Toolbar"},"x_range":{"id":"25906","type":"DataRange1d"},"x_scale":{"id":"25910","type":"LinearScale"},"y_range":{"id":"25908","type":"DataRange1d"},"y_scale":{"id":"25912","type":"LinearScale"}},"id":"25904","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"25844","type":"BasicTicker"},{"attributes":{"dimension":1,"ticker":{"id":"25844","type":"BasicTicker"}},"id":"25847","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"25939","type":"Square"},{"attributes":{},"id":"25948","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"25906","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"25862","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"25938","type":"Square"},{"attributes":{"callback":null},"id":"25908","type":"DataRange1d"},{"attributes":{"ticker":{"id":"25915","type":"BasicTicker"}},"id":"25918","type":"Grid"},{"attributes":{},"id":"25915","type":"BasicTicker"},{"attributes":{},"id":"25910","type":"LinearScale"},{"attributes":{},"id":"25839","type":"BasicTicker"},{"attributes":{},"id":"25849","type":"WheelZoomTool"},{"attributes":{},"id":"25912","type":"LinearScale"},{"attributes":{},"id":"25851","type":"SaveTool"},{"attributes":{"formatter":{"id":"25948","type":"BasicTickFormatter"},"ticker":{"id":"25844","type":"BasicTicker"}},"id":"25843","type":"LinearAxis"},{"attributes":{},"id":"25853","type":"HelpTool"},{"attributes":{"formatter":{"id":"25954","type":"BasicTickFormatter"},"ticker":{"id":"25915","type":"BasicTicker"}},"id":"25914","type":"LinearAxis"},{"attributes":{"formatter":{"id":"25946","type":"BasicTickFormatter"},"ticker":{"id":"25839","type":"BasicTicker"}},"id":"25838","type":"LinearAxis"},{"attributes":{},"id":"25836","type":"LinearScale"},{"attributes":{},"id":"25929","type":"HelpTool"},{"attributes":{"formatter":{"id":"25956","type":"BasicTickFormatter"},"ticker":{"id":"25920","type":"BasicTicker"}},"id":"25919","type":"LinearAxis"},{"attributes":{},"id":"25852","type":"ResetTool"},{"attributes":{},"id":"25834","type":"LinearScale"},{"attributes":{"overlay":{"id":"25960","type":"BoxAnnotation"}},"id":"25850","type":"BoxZoomTool"},{"attributes":{},"id":"25920","type":"BasicTicker"},{"attributes":{"callback":null},"id":"25832","type":"DataRange1d"},{"attributes":{"callback":null},"id":"25868","type":"DataRange1d"},{"attributes":{"dimension":1,"ticker":{"id":"25920","type":"BasicTicker"}},"id":"25923","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"25848","type":"PanTool"},{"id":"25849","type":"WheelZoomTool"},{"id":"25850","type":"BoxZoomTool"},{"id":"25851","type":"SaveTool"},{"id":"25852","type":"ResetTool"},{"id":"25853","type":"HelpTool"}]},"id":"25854","type":"Toolbar"},{"attributes":{"callback":null},"id":"25830","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"25901","type":"Triangle"},{"attributes":{},"id":"25946","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"25861","type":"ColumnDataSource"},"glyph":{"id":"25862","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"25863","type":"Circle"},"selection_glyph":null,"view":{"id":"25865","type":"CDSView"}},"id":"25864","type":"GlyphRenderer"},{"attributes":{"source":{"id":"25861","type":"ColumnDataSource"}},"id":"25865","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]},"selected":{"id":"25958","type":"Selection"},"selection_policy":{"id":"25959","type":"UnionRenderers"}},"id":"25861","type":"ColumnDataSource"},{"attributes":{},"id":"25924","type":"PanTool"},{"attributes":{"below":[{"id":"25876","type":"LinearAxis"}],"center":[{"id":"25880","type":"Grid"},{"id":"25885","type":"Grid"}],"left":[{"id":"25881","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"25902","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"25892","type":"Toolbar"},"x_range":{"id":"25868","type":"DataRange1d"},"x_scale":{"id":"25872","type":"LinearScale"},"y_range":{"id":"25870","type":"DataRange1d"},"y_scale":{"id":"25874","type":"LinearScale"}},"id":"25866","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"25848","type":"PanTool"},{"attributes":{},"id":"25925","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"25870","type":"DataRange1d"},{"attributes":{"overlay":{"id":"25966","type":"BoxAnnotation"}},"id":"25926","type":"BoxZoomTool"},{"attributes":{"ticker":{"id":"25839","type":"BasicTicker"}},"id":"25842","type":"Grid"},{"attributes":{"ticker":{"id":"25877","type":"BasicTicker"}},"id":"25880","type":"Grid"},{"attributes":{},"id":"25927","type":"SaveTool"},{"attributes":{},"id":"25877","type":"BasicTicker"},{"attributes":{},"id":"25928","type":"ResetTool"},{"attributes":{},"id":"25872","type":"LinearScale"},{"attributes":{},"id":"25950","type":"BasicTickFormatter"},{"attributes":{},"id":"25874","type":"LinearScale"},{"attributes":{},"id":"25952","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"25950","type":"BasicTickFormatter"},"ticker":{"id":"25877","type":"BasicTicker"}},"id":"25876","type":"LinearAxis"},{"attributes":{},"id":"25954","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]},"selected":{"id":"25964","type":"Selection"},"selection_policy":{"id":"25965","type":"UnionRenderers"}},"id":"25937","type":"ColumnDataSource"},{"attributes":{},"id":"25956","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"25952","type":"BasicTickFormatter"},"ticker":{"id":"25882","type":"BasicTicker"}},"id":"25881","type":"LinearAxis"},{"attributes":{"data_source":{"id":"25937","type":"ColumnDataSource"},"glyph":{"id":"25938","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"25939","type":"Square"},"selection_glyph":null,"view":{"id":"25941","type":"CDSView"}},"id":"25940","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"25900","type":"Triangle"},{"attributes":{},"id":"25958","type":"Selection"},{"attributes":{"children":[{"id":"25828","subtype":"Figure","type":"Plot"},{"id":"25866","subtype":"Figure","type":"Plot"},{"id":"25904","subtype":"Figure","type":"Plot"}]},"id":"25942","type":"Column"},{"attributes":{},"id":"25882","type":"BasicTicker"},{"attributes":{},"id":"25959","type":"UnionRenderers"},{"attributes":{"dimension":1,"ticker":{"id":"25882","type":"BasicTicker"}},"id":"25885","type":"Grid"},{"attributes":{"source":{"id":"25937","type":"ColumnDataSource"}},"id":"25941","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"25960","type":"BoxAnnotation"},{"attributes":{},"id":"25961","type":"Selection"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]},"selected":{"id":"25961","type":"Selection"},"selection_policy":{"id":"25962","type":"UnionRenderers"}},"id":"25899","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"25886","type":"PanTool"},{"id":"25887","type":"WheelZoomTool"},{"id":"25888","type":"BoxZoomTool"},{"id":"25889","type":"SaveTool"},{"id":"25890","type":"ResetTool"},{"id":"25891","type":"HelpTool"}]},"id":"25892","type":"Toolbar"},{"attributes":{},"id":"25962","type":"UnionRenderers"},{"attributes":{},"id":"25890","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"25963","type":"BoxAnnotation"},{"attributes":{},"id":"25889","type":"SaveTool"},{"attributes":{},"id":"25964","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"25863","type":"Circle"},{"attributes":{"source":{"id":"25899","type":"ColumnDataSource"}},"id":"25903","type":"CDSView"},{"attributes":{},"id":"25886","type":"PanTool"},{"attributes":{"below":[{"id":"25838","type":"LinearAxis"}],"center":[{"id":"25842","type":"Grid"},{"id":"25847","type":"Grid"}],"left":[{"id":"25843","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"25864","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"25854","type":"Toolbar"},"x_range":{"id":"25830","type":"DataRange1d"},"x_scale":{"id":"25834","type":"LinearScale"},"y_range":{"id":"25832","type":"DataRange1d"},"y_scale":{"id":"25836","type":"LinearScale"}},"id":"25828","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"25965","type":"UnionRenderers"},{"attributes":{},"id":"25887","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"25966","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"25963","type":"BoxAnnotation"}},"id":"25888","type":"BoxZoomTool"},{"attributes":{},"id":"25891","type":"HelpTool"},{"attributes":{"data_source":{"id":"25899","type":"ColumnDataSource"},"glyph":{"id":"25900","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"25901","type":"Triangle"},"selection_glyph":null,"view":{"id":"25903","type":"CDSView"}},"id":"25902","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"25924","type":"PanTool"},{"id":"25925","type":"WheelZoomTool"},{"id":"25926","type":"BoxZoomTool"},{"id":"25927","type":"SaveTool"},{"id":"25928","type":"ResetTool"},{"id":"25929","type":"HelpTool"}]},"id":"25930","type":"Toolbar"}],"root_ids":["25942"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"ef76413f-346e-4d83-8527-1b5319937351","roots":{"25942":"3e94b06d-4db5-43e3-a0f1-2ff66173198c"}}];
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