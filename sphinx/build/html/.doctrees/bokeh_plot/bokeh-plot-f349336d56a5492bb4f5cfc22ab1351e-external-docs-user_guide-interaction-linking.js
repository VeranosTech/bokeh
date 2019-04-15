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
      };var element = document.getElementById("4b44db47-95e0-451a-a163-a8b52e4f05d3");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '4b44db47-95e0-451a-a163-a8b52e4f05d3' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"83121b48-a12b-4fb1-817f-e63fac71ab2f":{"roots":{"references":[{"attributes":{"below":[{"id":"25130","type":"LinearAxis"}],"center":[{"id":"25134","type":"Grid"},{"id":"25139","type":"Grid"}],"left":[{"id":"25135","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"25156","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"25146","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"25086","type":"DataRange1d"},"x_scale":{"id":"25126","type":"LinearScale"},"y_range":{"id":"25088","type":"DataRange1d"},"y_scale":{"id":"25128","type":"LinearScale"}},"id":"25122","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"25210","type":"UnionRenderers"},{"attributes":{"source":{"id":"25153","type":"ColumnDataSource"}},"id":"25157","type":"CDSView"},{"attributes":{},"id":"25126","type":"LinearScale"},{"attributes":{},"id":"25145","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"25211","type":"BoxAnnotation"},{"attributes":{},"id":"25214","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"25153","type":"ColumnDataSource"},"glyph":{"id":"25154","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"25155","type":"Triangle"},"selection_glyph":null,"view":{"id":"25157","type":"CDSView"}},"id":"25156","type":"GlyphRenderer"},{"attributes":{},"id":"25216","type":"BasicTickFormatter"},{"attributes":{},"id":"25218","type":"Selection"},{"attributes":{"below":[{"id":"25167","type":"LinearAxis"}],"center":[{"id":"25171","type":"Grid"},{"id":"25176","type":"Grid"}],"left":[{"id":"25172","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"25193","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"25183","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"25086","type":"DataRange1d"},"x_scale":{"id":"25163","type":"LinearScale"},"y_range":{"id":"25161","type":"DataRange1d"},"y_scale":{"id":"25165","type":"LinearScale"}},"id":"25158","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"25219","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"25161","type":"DataRange1d"},{"attributes":{"ticker":{"id":"25131","type":"BasicTicker"}},"id":"25134","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"25192","type":"Square"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"25220","type":"BoxAnnotation"},{"attributes":{},"id":"25163","type":"LinearScale"},{"attributes":{},"id":"25131","type":"BasicTicker"},{"attributes":{"formatter":{"id":"25205","type":"BasicTickFormatter"},"ticker":{"id":"25131","type":"BasicTicker"}},"id":"25130","type":"LinearAxis"},{"attributes":{},"id":"25165","type":"LinearScale"},{"attributes":{},"id":"25128","type":"LinearScale"},{"attributes":{"formatter":{"id":"25214","type":"BasicTickFormatter"},"ticker":{"id":"25168","type":"BasicTicker"}},"id":"25167","type":"LinearAxis"},{"attributes":{},"id":"25168","type":"BasicTicker"},{"attributes":{"ticker":{"id":"25168","type":"BasicTicker"}},"id":"25171","type":"Grid"},{"attributes":{"dimension":1,"ticker":{"id":"25136","type":"BasicTicker"}},"id":"25139","type":"Grid"},{"attributes":{"formatter":{"id":"25216","type":"BasicTickFormatter"},"ticker":{"id":"25173","type":"BasicTicker"}},"id":"25172","type":"LinearAxis"},{"attributes":{"below":[{"id":"25094","type":"LinearAxis"}],"center":[{"id":"25098","type":"Grid"},{"id":"25103","type":"Grid"}],"left":[{"id":"25099","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"25120","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"25110","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"25086","type":"DataRange1d"},"x_scale":{"id":"25090","type":"LinearScale"},"y_range":{"id":"25088","type":"DataRange1d"},"y_scale":{"id":"25092","type":"LinearScale"}},"id":"25084","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"25144","type":"ResetTool"},{"attributes":{},"id":"25173","type":"BasicTicker"},{"attributes":{"dimension":1,"ticker":{"id":"25173","type":"BasicTicker"}},"id":"25176","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"25119","type":"Circle"},{"attributes":{"callback":null},"id":"25086","type":"DataRange1d"},{"attributes":{"source":{"id":"25117","type":"ColumnDataSource"}},"id":"25121","type":"CDSView"},{"attributes":{},"id":"25143","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"25191","type":"Square"},{"attributes":{"callback":null},"id":"25088","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]},"selected":{"id":"25218","type":"Selection"},"selection_policy":{"id":"25219","type":"UnionRenderers"}},"id":"25190","type":"ColumnDataSource"},{"attributes":{},"id":"25090","type":"LinearScale"},{"attributes":{},"id":"25092","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"25177","type":"PanTool"},{"id":"25178","type":"WheelZoomTool"},{"id":"25179","type":"BoxZoomTool"},{"id":"25180","type":"SaveTool"},{"id":"25181","type":"ResetTool"},{"id":"25182","type":"HelpTool"}]},"id":"25183","type":"Toolbar"},{"attributes":{"overlay":{"id":"25211","type":"BoxAnnotation"}},"id":"25142","type":"BoxZoomTool"},{"attributes":{},"id":"25177","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"25155","type":"Triangle"},{"attributes":{},"id":"25178","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"25196","type":"BasicTickFormatter"},"ticker":{"id":"25095","type":"BasicTicker"}},"id":"25094","type":"LinearAxis"},{"attributes":{"ticker":{"id":"25095","type":"BasicTicker"}},"id":"25098","type":"Grid"},{"attributes":{},"id":"25140","type":"PanTool"},{"attributes":{"overlay":{"id":"25220","type":"BoxAnnotation"}},"id":"25179","type":"BoxZoomTool"},{"attributes":{},"id":"25136","type":"BasicTicker"},{"attributes":{},"id":"25180","type":"SaveTool"},{"attributes":{},"id":"25095","type":"BasicTicker"},{"attributes":{"formatter":{"id":"25198","type":"BasicTickFormatter"},"ticker":{"id":"25100","type":"BasicTicker"}},"id":"25099","type":"LinearAxis"},{"attributes":{"formatter":{"id":"25207","type":"BasicTickFormatter"},"ticker":{"id":"25136","type":"BasicTicker"}},"id":"25135","type":"LinearAxis"},{"attributes":{},"id":"25181","type":"ResetTool"},{"attributes":{},"id":"25100","type":"BasicTicker"},{"attributes":{},"id":"25182","type":"HelpTool"},{"attributes":{},"id":"25104","type":"PanTool"},{"attributes":{"dimension":1,"ticker":{"id":"25100","type":"BasicTicker"}},"id":"25103","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"25104","type":"PanTool"},{"id":"25105","type":"WheelZoomTool"},{"id":"25106","type":"BoxZoomTool"},{"id":"25107","type":"SaveTool"},{"id":"25108","type":"ResetTool"},{"id":"25109","type":"HelpTool"}]},"id":"25110","type":"Toolbar"},{"attributes":{"data_source":{"id":"25190","type":"ColumnDataSource"},"glyph":{"id":"25191","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"25192","type":"Square"},"selection_glyph":null,"view":{"id":"25194","type":"CDSView"}},"id":"25193","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]},"selected":{"id":"25200","type":"Selection"},"selection_policy":{"id":"25201","type":"UnionRenderers"}},"id":"25117","type":"ColumnDataSource"},{"attributes":{},"id":"25141","type":"WheelZoomTool"},{"attributes":{"source":{"id":"25190","type":"ColumnDataSource"}},"id":"25194","type":"CDSView"},{"attributes":{"children":[[{"id":"25084","subtype":"Figure","type":"Plot"},0,0],[{"id":"25122","subtype":"Figure","type":"Plot"},0,1],[{"id":"25158","subtype":"Figure","type":"Plot"},0,2]]},"id":"25222","type":"GridBox"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"25118","type":"Circle"},{"attributes":{},"id":"25196","type":"BasicTickFormatter"},{"attributes":{},"id":"25105","type":"WheelZoomTool"},{"attributes":{},"id":"25198","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"25154","type":"Triangle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"25140","type":"PanTool"},{"id":"25141","type":"WheelZoomTool"},{"id":"25142","type":"BoxZoomTool"},{"id":"25143","type":"SaveTool"},{"id":"25144","type":"ResetTool"},{"id":"25145","type":"HelpTool"}]},"id":"25146","type":"Toolbar"},{"attributes":{},"id":"25107","type":"SaveTool"},{"attributes":{},"id":"25109","type":"HelpTool"},{"attributes":{},"id":"25200","type":"Selection"},{"attributes":{},"id":"25201","type":"UnionRenderers"},{"attributes":{},"id":"25108","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"25202","type":"BoxAnnotation"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]},"selected":{"id":"25209","type":"Selection"},"selection_policy":{"id":"25210","type":"UnionRenderers"}},"id":"25153","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"25202","type":"BoxAnnotation"}},"id":"25106","type":"BoxZoomTool"},{"attributes":{},"id":"25205","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"25117","type":"ColumnDataSource"},"glyph":{"id":"25118","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"25119","type":"Circle"},"selection_glyph":null,"view":{"id":"25121","type":"CDSView"}},"id":"25120","type":"GlyphRenderer"},{"attributes":{},"id":"25207","type":"BasicTickFormatter"},{"attributes":{},"id":"25209","type":"Selection"}],"root_ids":["25222"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"83121b48-a12b-4fb1-817f-e63fac71ab2f","roots":{"25222":"4b44db47-95e0-451a-a163-a8b52e4f05d3"}}];
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