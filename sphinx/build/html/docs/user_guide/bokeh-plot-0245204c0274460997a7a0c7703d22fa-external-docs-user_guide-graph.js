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
      };var element = document.getElementById("efb9c9d3-2102-4d5d-9f71-dfa6ac54ba90");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'efb9c9d3-2102-4d5d-9f71-dfa6ac54ba90' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"33522d69-f064-4fa0-af07-e552ecfa2464":{"roots":{"references":[{"attributes":{"ticker":{"id":"23103","type":"BasicTicker"}},"id":"23106","type":"Grid"},{"attributes":{"data_source":{"id":"23117","type":"ColumnDataSource"},"glyph":{"id":"23116","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"23119","type":"CDSView"}},"id":"23118","type":"GlyphRenderer"},{"attributes":{},"id":"23142","type":"Selection"},{"attributes":{"formatter":{"id":"23138","type":"BasicTickFormatter"},"ticker":{"id":"23108","type":"BasicTicker"}},"id":"23107","type":"LinearAxis"},{"attributes":{},"id":"23137","type":"NodesOnly"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"23094","type":"Range1d"},{"attributes":{},"id":"23140","type":"Selection"},{"attributes":{},"id":"23108","type":"BasicTicker"},{"attributes":{},"id":"23120","type":"MultiLine"},{"attributes":{},"id":"23141","type":"UnionRenderers"},{"attributes":{"dimension":1,"ticker":{"id":"23108","type":"BasicTicker"}},"id":"23111","type":"Grid"},{"attributes":{"text":"Networkx Integration Demonstration"},"id":"23092","type":"Title"},{"attributes":{"below":[{"id":"23102","type":"LinearAxis"}],"center":[{"id":"23106","type":"Grid"},{"id":"23111","type":"Grid"}],"left":[{"id":"23107","type":"LinearAxis"}],"renderers":[{"id":"23115","type":"GraphRenderer"}],"title":{"id":"23092","type":"Title"},"toolbar":{"id":"23112","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"23094","type":"Range1d"},"x_scale":{"id":"23098","type":"LinearScale"},"y_range":{"id":"23096","type":"Range1d"},"y_scale":{"id":"23100","type":"LinearScale"}},"id":"23091","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"data":{"end":[1,2,3,4,5,6,7,8,10,11,12,13,17,19,21,31,2,3,7,13,17,19,21,30,3,7,8,9,13,27,28,32,7,12,13,6,10,6,10,16,16,30,32,33,33,33,32,33,32,33,32,33,33,32,33,32,33,25,27,29,32,33,25,27,31,31,29,33,33,31,33,32,33,32,33,32,33,33],"start":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,4,4,5,5,5,6,8,8,8,9,13,14,14,15,15,18,18,19,20,20,22,22,23,23,23,23,23,24,24,24,25,26,26,27,28,28,29,29,30,30,31,31,32]},"selected":{"id":"23142","type":"Selection"},"selection_policy":{"id":"23143","type":"UnionRenderers"}},"id":"23121","type":"ColumnDataSource"},{"attributes":{},"id":"23138","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"23112","type":"Toolbar"},{"attributes":{"data_source":{"id":"23121","type":"ColumnDataSource"},"glyph":{"id":"23120","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"23123","type":"CDSView"}},"id":"23122","type":"GlyphRenderer"},{"attributes":{},"id":"23143","type":"UnionRenderers"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"23096","type":"Range1d"},{"attributes":{"source":{"id":"23121","type":"ColumnDataSource"}},"id":"23123","type":"CDSView"},{"attributes":{"graph_layout":{"0":[0.24327558809927774,-0.6655965055873713],"1":[0.25085324037104095,-0.34146454766043943],"10":[0.6689190750175329,-1.219615523626573],"11":[-0.1599064169494974,-1.2828776192166642],"12":[0.9043008686204581,-0.6692562390904438],"13":[0.2605968488309499,-0.04836557091665313],"14":[-0.6137237189109239,1.087328022340055],"15":[-0.22885315809560935,1.3394427382264011],"16":[0.620090779838406,-2.0],"17":[-0.028965520825173126,-0.8690397365118847],"18":[0.28564188790112544,1.0104959295194853],"19":[-0.08494671286845637,-0.1750777987250349],"2":[-0.01068277183690361,0.01974832123168683],"20":[0.020025030347323107,1.2241822623845802],"21":[0.6144809076836113,-0.7825386008440595],"22":[-0.455310070886073,1.2440247613738469],"23":[-0.6377782344777737,0.8004809131833566],"24":[-1.0800748025330966,0.18390751407683273],"25":[-1.0574165962395876,0.4753278638122914],"26":[0.18655516882540685,1.3380690746271273],"27":[-0.6385826744477787,0.41246068196392655],"28":[-0.5785478327394259,0.16999329172109406],"29":[-0.21890447791134957,1.1110146739983162],"3":[0.5146744349601448,-0.38916958711110383],"30":[0.2525730539622925,0.40815286369315656],"31":[-0.4419239081201729,0.1251969010686437],"32":[-0.15944541942096924,0.779853011602207],"33":[-0.17440711035247347,0.6607224688193281],"4":[0.3595187554026902,-1.2794813402955079],"5":[0.5942956857114652,-1.4844625508019238],"6":[0.3688210168970244,-1.5363189741465948],"7":[0.5263840388173199,-0.22576783868908354],"8":[0.1250635007456411,0.20719234442866866],"9":[-0.2266004554164481,0.37143879515233097]}},"id":"23124","type":"StaticLayoutProvider"},{"attributes":{},"id":"23100","type":"LinearScale"},{"attributes":{"edge_renderer":{"id":"23122","type":"GlyphRenderer"},"inspection_policy":{"id":"23128","type":"NodesOnly"},"layout_provider":{"id":"23124","type":"StaticLayoutProvider"},"node_renderer":{"id":"23118","type":"GlyphRenderer"},"selection_policy":{"id":"23137","type":"NodesOnly"}},"id":"23115","type":"GraphRenderer"},{"attributes":{},"id":"23103","type":"BasicTicker"},{"attributes":{},"id":"23128","type":"NodesOnly"},{"attributes":{},"id":"23116","type":"Circle"},{"attributes":{},"id":"23098","type":"LinearScale"},{"attributes":{"formatter":{"id":"23126","type":"BasicTickFormatter"},"ticker":{"id":"23103","type":"BasicTicker"}},"id":"23102","type":"LinearAxis"},{"attributes":{"source":{"id":"23117","type":"ColumnDataSource"}},"id":"23119","type":"CDSView"},{"attributes":{"callback":null,"data":{"club":["Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Officer","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Officer","Officer","Mr. Hi","Mr. Hi","Officer","Mr. Hi","Officer","Mr. Hi","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer"],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]},"selected":{"id":"23140","type":"Selection"},"selection_policy":{"id":"23141","type":"UnionRenderers"}},"id":"23117","type":"ColumnDataSource"},{"attributes":{},"id":"23126","type":"BasicTickFormatter"}],"root_ids":["23091"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"33522d69-f064-4fa0-af07-e552ecfa2464","roots":{"23091":"efb9c9d3-2102-4d5d-9f71-dfa6ac54ba90"}}];
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