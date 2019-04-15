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
      };var element = document.getElementById("d445e3b1-7a41-4095-89ab-5bc264ff69ce");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'd445e3b1-7a41-4095-89ab-5bc264ff69ce' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"89412a32-7b9b-4590-b1e4-fb0006ffc173":{"roots":{"references":[{"attributes":{},"id":"23405","type":"ResetTool"},{"attributes":{},"id":"23447","type":"UnionRenderers"},{"attributes":{"text":"Graph Interaction Demonstration"},"id":"23402","type":"Title"},{"attributes":{"callback":null,"data":{"edge_color":["black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","red","black","black","black","black","black","black","black","red","black","black","black","red","black","red","red","red","black","black","black","black","black","black","black","black","black","red","red","red","black","red","black","black","black","black","black","black","red","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black"],"end":[1,2,3,4,5,6,7,8,10,11,12,13,17,19,21,31,2,3,7,13,17,19,21,30,3,7,8,9,13,27,28,32,7,12,13,6,10,6,10,16,16,30,32,33,33,33,32,33,32,33,32,33,33,32,33,32,33,25,27,29,32,33,25,27,31,31,29,33,33,31,33,32,33,32,33,32,33,33],"start":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,4,4,5,5,5,6,8,8,8,9,13,14,14,15,15,18,18,19,20,20,22,22,23,23,23,23,23,24,24,24,25,26,26,27,28,28,29,29,30,30,31,31,32]},"selected":{"id":"23448","type":"Selection"},"selection_policy":{"id":"23449","type":"UnionRenderers"}},"id":"23417","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"club":["Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Officer","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Officer","Officer","Mr. Hi","Mr. Hi","Officer","Mr. Hi","Officer","Mr. Hi","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer"],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]},"selected":{"id":"23446","type":"Selection"},"selection_policy":{"id":"23447","type":"UnionRenderers"}},"id":"23413","type":"ColumnDataSource"},{"attributes":{},"id":"23449","type":"UnionRenderers"},{"attributes":{"edge_renderer":{"id":"23418","type":"GlyphRenderer"},"inspection_policy":{"id":"23435","type":"NodesOnly"},"layout_provider":{"id":"23420","type":"StaticLayoutProvider"},"node_renderer":{"id":"23414","type":"GlyphRenderer"},"selection_policy":{"id":"23444","type":"NodesOnly"}},"id":"23411","type":"GraphRenderer"},{"attributes":{},"id":"23446","type":"Selection"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"23398","type":"Range1d"},{"attributes":{},"id":"23434","type":"LinearScale"},{"attributes":{},"id":"23435","type":"NodesOnly"},{"attributes":{"line_alpha":{"value":0.8},"line_color":{"field":"edge_color"}},"id":"23426","type":"MultiLine"},{"attributes":{},"id":"23433","type":"LinearScale"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"23397","type":"Range1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"23403","type":"HoverTool"},{"id":"23404","type":"BoxZoomTool"},{"id":"23405","type":"ResetTool"}]},"id":"23406","type":"Toolbar"},{"attributes":{"source":{"id":"23413","type":"ColumnDataSource"}},"id":"23415","type":"CDSView"},{"attributes":{"overlay":{"id":"23445","type":"BoxAnnotation"}},"id":"23404","type":"BoxZoomTool"},{"attributes":{"plot_height":400,"plot_width":400,"renderers":[{"id":"23411","type":"GraphRenderer"}],"title":{"id":"23402","type":"Title"},"toolbar":{"id":"23406","type":"Toolbar"},"x_range":{"id":"23397","type":"Range1d"},"x_scale":{"id":"23434","type":"LinearScale"},"y_range":{"id":"23398","type":"Range1d"},"y_scale":{"id":"23433","type":"LinearScale"}},"id":"23399","type":"Plot"},{"attributes":{"source":{"id":"23417","type":"ColumnDataSource"}},"id":"23419","type":"CDSView"},{"attributes":{"callback":null,"tooltips":[["index","@index"],["club","@club"]]},"id":"23403","type":"HoverTool"},{"attributes":{"fill_color":{"value":"#2b83ba"},"size":{"units":"screen","value":15}},"id":"23421","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"23445","type":"BoxAnnotation"},{"attributes":{"graph_layout":{"0":[-0.29610936546683303,0.21633052848371356],"1":[-0.13925125720888032,0.17589455904225743],"10":[-0.607294450317878,0.25265850950684615],"11":[-0.47783287029527416,0.5736029718108782],"12":[-0.20727872547952253,0.552118295442923],"13":[-0.007788402591437886,0.13327513353297651],"14":[0.6211048109168775,-0.11931870077709819],"15":[0.5685980173423696,-0.3126577671295038],"16":[-1.0,0.2549699232955058],"17":[-0.33450443450787676,0.4083834566069595],"18":[0.40533890545632645,-0.4768936948371897],"19":[0.07874225643286961,0.1833075018376493],"2":[0.053669861047592735,0.061964092866284945],"20":[0.6227390903820852,-0.22245102460548155],"21":[-0.4194258771855943,0.08028340951448502],"22":[0.568439275914342,-0.024146368963991405],"23":[0.25708855096589245,-0.4468191010495836],"24":[-0.08733950618245774,-0.5014696011945712],"25":[0.03639876659565872,-0.5689466792233945],"26":[0.6422672846400045,-0.4408218889298846],"27":[0.09550185980458845,-0.3164970590241417],"28":[0.23729800627971143,-0.05186749712085063],"29":[0.47335767357030417,-0.4130261585640848],"3":[-0.07473955304535804,0.35391602701950814],"30":[0.14470566501885437,-0.0336141016482509],"31":[0.01393863069432406,-0.21887582052484517],"32":[0.3411150659335371,-0.21327633280068659],"33":[0.32666049396832936,-0.1547605006849329],"4":[-0.6137921896128343,0.3969692626756555],"5":[-0.7345777454109479,0.18596916908188718],"6":[-0.7398864069283259,0.3032641982870511],"7":[-0.14501238945657777,0.3029969373002213],"8":[0.03442958705303869,-0.05887748581951652],"9":[0.36343937167309054,0.13841580659320432]}},"id":"23420","type":"StaticLayoutProvider"},{"attributes":{"data_source":{"id":"23413","type":"ColumnDataSource"},"glyph":{"id":"23421","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"23415","type":"CDSView"}},"id":"23414","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"23417","type":"ColumnDataSource"},"glyph":{"id":"23426","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"23419","type":"CDSView"}},"id":"23418","type":"GlyphRenderer"},{"attributes":{},"id":"23444","type":"NodesOnly"},{"attributes":{},"id":"23448","type":"Selection"}],"root_ids":["23399"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"89412a32-7b9b-4590-b1e4-fb0006ffc173","roots":{"23399":"d445e3b1-7a41-4095-89ab-5bc264ff69ce"}}];
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